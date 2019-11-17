import React, { Suspense, lazy } from "react";

import giveProps from "./container/give-props";
import ScrollProgressBar from "./presentational/scroll-progress-bar/scroll-progress-bar";
import LandinPage from "./presentational/landing-page/landing-page";

const LandingPageWithProps = giveProps(LandinPage);
const SideDrawerWithProps = lazy(() =>
  import("./index").then(module => ({ default: module.SideDrawerWithProps }))
);
const TreatmentsListWithProps = lazy(() =>
  import("./index").then(module => ({
    default: module.TreatmentsListWithProps
  }))
);
const TherapistListWithProps = lazy(() =>
  import("./index").then(module => ({
    default: module.TherapistListWithProps
  }))
);
const PricesListWithProps = lazy(() =>
  import("./index").then(module => ({
    default: module.PricesListWithProps
  }))
);

const GroupSessionsWithProps = lazy(() =>
  import("./index").then(module => ({
    default: module.GroupSessionsWithProps
  }))
);

const ContactsWithProps = lazy(() =>
  import("./index").then(module => ({
    default: module.ContactsWithProps
  }))
);

const FooterWithProps = lazy(() =>
  import("./index").then(module => ({
    default: module.FooterWithProps
  }))
);

const App = () => {
  return (
    <>
      <ScrollProgressBar />
      <LandingPageWithProps />
      <Suspense fallback={<div>WHATS UP</div>}>
        <SideDrawerWithProps />
      </Suspense>
      <Suspense fallback={<div>WHATS UP</div>}>
        <TreatmentsListWithProps />
      </Suspense>
      <Suspense fallback={<div>WHATS UP</div>}>
        <TherapistListWithProps />
      </Suspense>
      <Suspense fallback={<div>WHATS UP</div>}>
        <PricesListWithProps />
      </Suspense>
      <Suspense fallback={<div>WHATS UP</div>}>
        <GroupSessionsWithProps />
      </Suspense>
      <Suspense fallback={<div>WHATS UP</div>}>
        <ContactsWithProps />
      </Suspense>
      <Suspense fallback={<div>WHATS UP</div>}>
        <FooterWithProps />
      </Suspense>
    </>
  );
};

export default App;
