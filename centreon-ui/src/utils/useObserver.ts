import * as React from 'react';

interface HookParam {
  maxPage: number;
  page: number;
  loading: boolean;
  action: () => void;
}

const useObserver = ({
  maxPage,
  page,
  loading,
  action,
}: HookParam): ((node) => void) => {
  const observer = React.useRef<IntersectionObserver | null>(null);
  const lastElementRef = React.useCallback(
    (node) => {
      if (observer.current) {
        observer.current.disconnect();
      }

      if (loading) {
        observer.current = null;
        return;
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && page < maxPage) {
          action();
        }
      });

      if (node && observer.current) {
        observer.current.observe(node);
      }
    },
    [maxPage, page, loading],
  );

  return lastElementRef;
};

export default useObserver;
