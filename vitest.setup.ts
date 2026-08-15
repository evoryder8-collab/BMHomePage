// jsdom lacks IntersectionObserver; framer-motion and Gleam need it.
class IOStub implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = "";
  readonly thresholds: ReadonlyArray<number> = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}
globalThis.IntersectionObserver =
  globalThis.IntersectionObserver ?? (IOStub as typeof IntersectionObserver);
