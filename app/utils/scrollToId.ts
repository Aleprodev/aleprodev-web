// utils/scrollToId.ts
import { scroller } from "react-scroll";

export const scrollToId = (
  id: string,
  offset: number = -80,
  duration: number = 500
) => {
  scroller.scrollTo(id, {
    duration,
    smooth: true,
    offset,
  });
};
