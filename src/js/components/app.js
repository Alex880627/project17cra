import React from "react";
import lazyLoadHoc from "./presentational/lazy-load-hoc/lazy-load-hoc";
import ScrollProgressBar from "./presentational/scroll-progress-bar/scroll-progress-bar";

import { LandingPageWithProps } from "./index";
import { SideDrawerWithProps } from "./index";

import { TreatmentsListLazy } from "./lazy-load-imports";
import { TherapistListLazy } from "./lazy-load-imports";
import { PricesListWithLazy } from "./lazy-load-imports";
import { GroupSessionsLazy } from "./lazy-load-imports";
import { ContactsLazy } from "./lazy-load-imports";
import { FooterLazy } from "./lazy-load-imports"; 

const App = () => {
  return (
    <>
      <ScrollProgressBar />
      <LandingPageWithProps />
      <SideDrawerWithProps />
      <TreatmentsListLazy />
      <TherapistListLazy/>
      <PricesListWithLazy />
      <GroupSessionsLazy />
      <ContactsLazy />
      <FooterLazy />
    </>
  );
};

export default App;
