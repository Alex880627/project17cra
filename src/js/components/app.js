import React from "react";

import ScrollProgressBar from "./presentational/scroll-progress-bar/scroll-progress-bar";

import { LandingPageWithProps } from "./index";
import { SideDrawerWithProps } from "./index";
import { TreatmentsListLazy } from "./lazy-load-imports";
import { TherapistListLazy } from "./lazy-load-imports";
import { PricesListWithLazy } from "./lazy-load-imports";
import { GroupSessionsLazy } from "./lazy-load-imports";
import { ContactsLazy } from "./lazy-load-imports";
import { FooterWithProps } from "./index"; 

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

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
      <FooterWithProps />
    </>
  );
};

App.whyDidYouRender = true

export default App;
