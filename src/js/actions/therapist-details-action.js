import { SHOW_THERAPIST , HIDE_THERAPIST } from '../constants/constants';

const showTherapistDetails = (payload) => ({
  type: SHOW_THERAPIST,
  payload: payload
});
const hideTherapistDetails = () => ({
  type: HIDE_THERAPIST,
});

export { showTherapistDetails, hideTherapistDetails };
