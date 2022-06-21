import { useEffect } from "react";
import { HTTP_STATUS } from "../app/utils/constants";

export function useTitle(title, loading) {
  useEffect(() => {
    const defaultTitle = "Cocktails";
    const prevTitle = document.title;
    if (loading === null) {
      document.title = title;
    } else {
      document.title = loading === HTTP_STATUS.FULFILLED ? title : defaultTitle;
    }
    return () => {
      document.title = prevTitle;
    };
  }, [title, loading]);
}
