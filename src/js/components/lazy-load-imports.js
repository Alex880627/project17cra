import lazyLoadHoc from "./presentational/lazy-load-hoc/lazy-load-hoc";
import TreatmentsList from "./presentational/treatments-list/treatments-list";
import TherapistList from "./presentational/therapist-list/therapist-list";
import PricesList from "./presentational/prices-list/prices-list";
import GroupSessions from "./presentational/group-sessions/group-sessions";
import Contacts from "./presentational/contacts/contacts";

export const TreatmentsListLazy = lazyLoadHoc(TreatmentsList,"treatments", "white");
export const TherapistListLazy = lazyLoadHoc(TherapistList, "colleagues");
export const PricesListWithLazy = lazyLoadHoc(PricesList,"prices", "white");
export const GroupSessionsLazy = lazyLoadHoc(GroupSessions, "group sessions");
export const ContactsLazy = lazyLoadHoc(Contacts, "contacts", "white");
