import { useEffect } from "react";
import { HTTP_STATUS } from "../app/utils/constants";
import { animateScroll as scroll } from "react-scroll";

export function useTitle(title, loading = HTTP_STATUS.FULFILLED) {
  useEffect(() => {
    scroll.scrollToTop({
      duration: 300,
      delay: 50,
      smooth: true,
    });
    const defaultTitle = "Cocktails";
    const prevTitle = document.title;
    if (loading === null) {
      document.title = title;
    } else {
      if (title === undefined) {
        document.title = defaultTitle;
      } else {
        document.title =
          loading === HTTP_STATUS.FULFILLED ? title : defaultTitle;
      }
    }
    return () => {
      document.title = prevTitle;
    };
  }, [title, loading]);
}
