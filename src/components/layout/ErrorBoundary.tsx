import { Component, type ErrorInfo, type ReactNode } from "react";
import styles from "./ErrorBoundary.module.css";

type Props = { children: ReactNode };
type State = { hasError: boolean; message: string | null };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, message: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Render error:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.fallback} role="alert">
          <h1 className={styles.title}>Something went wrong</h1>
          <p className={styles.text}>
            The portfolio hit an unexpected render error. You can reload the page
            to try again.
          </p>
          {this.state.message ? (
            <pre className={styles.pre}>{this.state.message}</pre>
          ) : null}
          <button
            type="button"
            className={styles.reload}
            onClick={() => window.location.reload()}
          >
            Reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
