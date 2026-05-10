import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { PROJECTS } from "../../data/projects";
import type { Project } from "../../data/projects";
import { useI18n } from "../../i18n/I18nProvider";
import { Modal } from "../ui/Modal";
import { LinkButton } from "../ui/LinkButton";
import { Button } from "../ui/Button";
import styles from "./WorkSection.module.css";

const MAX_ITEM_WIDTH = 320;
const ITEM_VW = 0.62;

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function useItemWidth(): number {
  const compute = () =>
    typeof window === "undefined"
      ? MAX_ITEM_WIDTH
      : Math.min(window.innerWidth * ITEM_VW, MAX_ITEM_WIDTH);
  const [width, setWidth] = useState<number>(compute);
  useLayoutEffect(() => {
    setWidth(compute());
    const onResize = () => setWidth(compute());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return width;
}

type CarouselItemProps = {
  project: Project;
  index: number;
  count: number;
  parentX: MotionValue<number>;
  itemWidth: number;
  isActive: boolean;
  reduce: boolean;
  onOpenDetails: (p: Project) => void;
  openLabel: string;
};

function CarouselItem({
  project,
  index,
  count,
  parentX,
  itemWidth,
  isActive,
  reduce,
  onOpenDetails,
  openLabel,
}: CarouselItemProps) {
  const { locale } = useI18n();
  const copy = project.copy[locale];

  const isFirst = index === 0;
  const isLast = index === count - 1;
  const w = itemWidth;

  const offset = useTransform(parentX, (px) => px + index * w);

  const rotateKeys = isFirst
    ? { input: [-w, -w / 2, 0, w], output: [40, 25, 0, -15] }
    : isLast
      ? { input: [-w, 0, w / 2, w], output: [15, 0, -25, -40] }
      : { input: [-w, -w / 2, 0, w / 2, w], output: [40, 25, 0, -25, -40] };

  const opacityKeys = isFirst
    ? { input: [-w, -w / 4, 0, w], output: [0, 0, 1, 0] }
    : isLast
      ? { input: [-w, 0, w / 4, w], output: [0, 1, 0, 0] }
      : {
          input: [-w, -w / 4, 0, w / 4, w],
          output: [0, 0, 1, 0, 0],
        };

  const rotateY = useTransform(offset, rotateKeys.input, rotateKeys.output);
  const textOpacity = useTransform(
    offset,
    opacityKeys.input,
    opacityKeys.output,
  );
  const z = useTransform(offset, (v) => -Math.abs(v / w) * (w * 0.55));
  const opacity = useTransform(offset, (v) => {
    if (Math.abs(v) > w * 1.6) return 0;
    return 1;
  });
  const zIndex = useTransform(offset, (v) =>
    Math.max(0, Math.round(1000 - Math.abs(v))),
  );

  if (reduce) {
    return (
      <li className={styles.itemReduced} style={{ width: w }}>
        <div className={styles.cardImage}>
          <img
            draggable={false}
            src={project.image}
            alt={copy.title}
            className={styles.cardImg}
          />
        </div>
        <div className={styles.cardMeta}>
          <p className={styles.cardYear}>{project.year}</p>
          <h3 className={styles.cardTitle}>{copy.title}</h3>
          <p className={styles.cardTagline}>{copy.tagline}</p>
        </div>
      </li>
    );
  }

  return (
    <motion.li
      className={styles.item}
      style={{ width: w, zIndex }}
    >
      <motion.div
        className={styles.itemInner}
        style={{
          transformPerspective: w * 2.4,
          transformStyle: "preserve-3d",
          z,
          rotateY,
          opacity,
        }}
      >
        <div className={styles.cardImage}>
          <img
            draggable={false}
            src={project.image}
            alt={copy.title}
            className={styles.cardImg}
            loading="lazy"
          />
          <div className={styles.cardImageOverlay} aria-hidden />
        </div>

        <motion.div
          className={styles.cardMeta}
          style={{ opacity: textOpacity }}
        >
          <div className={styles.cardMetaTop}>
            <p className={styles.cardYear}>{project.year}</p>
            <ul className={styles.tagList} aria-hidden>
              {project.stack.slice(0, 3).map((s) => (
                <li key={s} className={styles.tag}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <h3 className={styles.cardTitle}>{copy.title}</h3>
          <p className={styles.cardTagline}>{copy.tagline}</p>
          {isActive ? (
            <Button
              type="button"
              variant="ghost"
              className={styles.cardCta}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetails(project);
              }}
            >
              {openLabel}
              <span aria-hidden>↗</span>
            </Button>
          ) : null}
        </motion.div>
      </motion.div>
    </motion.li>
  );
}

export function WorkSection() {
  const { locale, messages } = useI18n();
  const reduce = useReducedMotion() === true;
  const itemWidth = useItemWidth();
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const total = PROJECTS.length;
  const minX = useMemo(
    () => -((total - 1) * itemWidth),
    [total, itemWidth],
  );

  const goTo = useCallback(
    (i: number) => {
      const clamped = clamp(i, 0, total - 1);
      const target = -clamped * itemWidth;
      setActiveIndex(clamped);
      if (reduce) {
        x.set(target);
      } else {
        animate(x, target, { type: "spring", stiffness: 220, damping: 32 });
      }
    },
    [itemWidth, reduce, total, x],
  );

  useEffect(() => {
    goTo(activeIndex);
  }, [itemWidth, goTo, activeIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (active) return;
      if (e.key === "ArrowLeft") goTo(activeIndex - 1);
      if (e.key === "ArrowRight") goTo(activeIndex + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, activeIndex, goTo]);

  const handleDragEnd = useCallback(
    (
      _: unknown,
      info: { offset: { x: number }; velocity: { x: number } },
    ) => {
      const projected = x.get() + info.velocity.x * 0.1;
      const nearest = Math.round(-projected / itemWidth);
      goTo(nearest);
    },
    [goTo, itemWidth, x],
  );

  return (
    <section
      id="work"
      className={styles.section}
      aria-labelledby="work-title"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>{messages.work.kicker}</p>
          <h2 id="work-title" className={styles.srTitle}>
            {messages.work.kicker}
          </h2>
          <p className={styles.counter}>{messages.work.counter(total)}</p>
        </header>

        <div
          className={styles.stage}
          data-modal-open={active !== null ? "true" : undefined}
          aria-hidden={active !== null}
        >
          <div
            className={styles.viewport}
            ref={trackRef}
            style={{ width: itemWidth }}
          >
            <motion.ul
              className={styles.track}
              style={{ x }}
              drag={reduce ? false : "x"}
              dragConstraints={{ left: minX, right: 0 }}
              dragElastic={0.1}
              dragMomentum={false}
              onDragEnd={handleDragEnd}
            >
              {PROJECTS.map((project, i) => (
                <CarouselItem
                  key={project.id}
                  project={project}
                  index={i}
                  count={total}
                  parentX={x}
                  itemWidth={itemWidth}
                  isActive={i === activeIndex}
                  reduce={reduce}
                  onOpenDetails={setActive}
                  openLabel={messages.work.openDetails}
                />
              ))}
            </motion.ul>
          </div>

          <div className={styles.controls}>
            <Button
              type="button"
              variant="ghost"
              className={styles.arrow}
              aria-label={messages.work.prev}
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
            >
              ←
            </Button>
            <ol className={styles.dots} aria-hidden>
              {PROJECTS.map((p, i) => (
                <li key={p.id}>
                  <button
                    type="button"
                    className={i === activeIndex ? styles.dotActive : styles.dot}
                    onClick={() => goTo(i)}
                    tabIndex={-1}
                  />
                </li>
              ))}
            </ol>
            <Button
              type="button"
              variant="ghost"
              className={styles.arrow}
              aria-label={messages.work.next}
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === total - 1}
            >
              →
            </Button>
          </div>
        </div>
      </div>

      <Modal
        open={active !== null}
        title={active ? active.copy[locale].title : ""}
        closeLabel={messages.work.closeModal}
        onClose={() => setActive(null)}
      >
        {active ? (
          <div className={styles.modalBody}>
            <p className={styles.modalTagline}>
              {active.copy[locale].tagline}
            </p>
            <p className={styles.modalDesc}>
              {active.copy[locale].description}
            </p>
            <div className={styles.stackBlock}>
              <p className={styles.stackLabel}>{messages.work.stackLabel}</p>
              <ul className={styles.stackList}>
                {active.stack.map((tag) => (
                  <li key={tag} className={styles.stackItem}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <LinkButton
              href={active.url}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              className={styles.visit}
            >
              {messages.work.visit}
            </LinkButton>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
