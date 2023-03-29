import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * A React component that scrolls to the top of the page when the route changes.
 *
 * @returns {null} This component does not have a visible output.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
