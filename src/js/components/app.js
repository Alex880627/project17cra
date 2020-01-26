import React from "react";

import ScrollProgressBar from "./presentational/scroll-progress-bar/scroll-progress-bar";

import LandingPage from "./presentational/landing-page/landing-page";
import SideDrawer from "./presentational/side-drawer/side-drawer";
import { TreatmentsListLazy } from "./lazy-load-imports";
import { TherapistListLazy } from "./lazy-load-imports";
import { PricesListWithLazy } from "./lazy-load-imports";
import { GroupSessionsLazy } from "./lazy-load-imports";
import { ContactsLazy } from "./lazy-load-imports";
import Footer from "./presentational/footer/footer";

const App = () => {
  return (
    <>
      <ScrollProgressBar />
      <LandingPage />
      <SideDrawer />
      <TreatmentsListLazy />
      <TherapistListLazy/>
      <PricesListWithLazy />
      <GroupSessionsLazy />
      <ContactsLazy />
      <Footer />
    </>
  );
};

export default App;
