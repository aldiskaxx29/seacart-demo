// utils/ga.ts

import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-SVNSQB3XBT"); // Replace with your GA tracking ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
