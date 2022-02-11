import { useEffect } from "react";

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
