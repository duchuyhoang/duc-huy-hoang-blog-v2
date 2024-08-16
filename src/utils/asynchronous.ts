export const debounce = (callback: Function, wait = 1000) => {
  let timeoutId: any = null;
  const func = (...args: any) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
  func.clear = () => {
    window.clearTimeout(timeoutId);
  };
  return func;
};

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number = 1,
  timeout: number = 1000
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  let ranCount = 0;

  return (...args: Parameters<T>) => {
    if (ranCount < limit) {
      func(...args);
      ranCount++;
    }
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        ranCount = 0;
        timeoutId = null;
      }, timeout);
    }
  };
}
