import lazyLoadHoc from "./presentational/lazy-load-hoc/lazy-load-hoc";

import { TreatmentsListWithProps } from "./index";
import { TherapistListWithProps } from "./index";
import { PricesListWithProps } from "./index";
import { GroupSessionsWithProps } from "./index";
import { ContactsWithProps } from "./index";
import { FooterWithProps } from "./index";

export const TreatmentsListLazy = lazyLoadHoc(TreatmentsListWithProps, "white");
export const TherapistListLazy = lazyLoadHoc(TherapistListWithProps);
export const PricesListWithLazy = lazyLoadHoc(PricesListWithProps, "white");
export const GroupSessionsLazy = lazyLoadHoc(GroupSessionsWithProps);
export const ContactsLazy = lazyLoadHoc(ContactsWithProps);
export const FooterLazy = lazyLoadHoc(FooterWithProps);
