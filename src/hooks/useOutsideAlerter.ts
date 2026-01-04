import { useEffect, RefObject } from "react";

export default function useOutsideAlerter<T extends HTMLElement>(
  ref: RefObject<T>,
  setState: (value: boolean) => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target;

      if (
        ref.current &&
        target instanceof Node &&
        !ref.current.contains(target)
      ) {
        setState(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setState]);
}
