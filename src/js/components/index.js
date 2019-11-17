
import giveProps from "./container/give-props";
import SideDrawer from "./presentational/side-drawer/side-drawer";
import TreatmentsList from "./presentational/treatments-list/treatments-list";
import TherapistList from "./presentational/therapist-list/therapist-list";
import PricesList from "./presentational/prices-list/prices-list";
import GroupSessions from "./presentational/group-sessions/group-sessions";
import Contacts from "./presentational/contacts/contacts";
import Footer from "./presentational/footer/footer";

export const SideDrawerWithProps = giveProps(SideDrawer);
export const TreatmentsListWithProps = giveProps(TreatmentsList);
export const TherapistListWithProps = giveProps(TherapistList);
export const PricesListWithProps = giveProps(PricesList);
export const GroupSessionsWithProps = giveProps(GroupSessions);
export const ContactsWithProps = giveProps(Contacts);
export const FooterWithProps = giveProps(Footer);