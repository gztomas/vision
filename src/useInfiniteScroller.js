import { useEffect } from "react";

/**
 * Notifies about document scroll getting to the bottom with a threshold
 * expressed as a fraction of the whole page height
 */
export const useInfiniteScroller = (options) => {
  const { onMore, threshold } = options;

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      if (scrollHeight - scrollTop - clientHeight < scrollHeight * threshold) {
        document.removeEventListener("scroll", handleScroll);
        onMore();
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [onMore, threshold]);
};
