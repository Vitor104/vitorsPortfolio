import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect } from "react";
import styles from "./Modal.module.css";
import { Button } from "./Button";

type Props = {
  open: boolean;
  title: string;
  closeLabel: string;
  onClose: () => void;
  children: ReactNode;
};

export function Modal({ open, title, closeLabel, onClose, children }: Props) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className={styles.backdrop}
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className={styles.panel}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            <div className={styles.head}>
              <h2 id="modal-title" className={styles.title}>
                {title}
              </h2>
              <Button
                type="button"
                variant="ghost"
                className={styles.close}
                onClick={onClose}
                aria-label={closeLabel}
              >
                ×
              </Button>
            </div>
            <div className={styles.body}>{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
