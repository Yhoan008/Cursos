import { createContext, useContext, useEffect, useState } from "react";

export const scrollerContext = createContext();

export const useScrollerValue = () => useContext(scrollerContext);

export const useSetScroller = () => {
  const setScroller = useContext(scrollerContext)[1];
  return setScroller;
};

export default function ScrollerProvider({ children }) {
  const [scroller, setScroller] = useState();

  useEffect(() => {
    const handleScroll = () => {
      setScroller(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <scrollerContext.Provider value={scroller}>
      {children}
    </scrollerContext.Provider>
  );
}
