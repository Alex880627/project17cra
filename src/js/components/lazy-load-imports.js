import lazyLoadHoc from "./presentational/lazy-load-hoc/lazy-load-hoc";

import { TreatmentsListWithProps } from "./index";
import { TherapistListWithProps } from "./index";
import { PricesListWithProps } from "./index";
import { GroupSessionsWithProps } from "./index";
import { ContactsWithProps } from "./index";
import { FooterWithProps } from "./index";

export const TreatmentsListLazy = lazyLoadHoc(TreatmentsListWithProps,"treatments", "white");
export const TherapistListLazy = lazyLoadHoc(TherapistListWithProps, "colleagues");
export const PricesListWithLazy = lazyLoadHoc(PricesListWithProps,"prices", "white");
export const GroupSessionsLazy = lazyLoadHoc(GroupSessionsWithProps, "group sessions");
export const ContactsLazy = lazyLoadHoc(ContactsWithProps, "contacts", "white");
export const FooterLazy = lazyLoadHoc(FooterWithProps, "footer", "#17263C");
