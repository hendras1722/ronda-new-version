// useCallback.ts
import { ref } from 'vue'

export function useCallback<T extends (...args: any[]) => any>(fn: T) {
  const fnRef = ref(fn)
  return fnRef
}
