import HU from "../../data/languages/hu.json"
import EN from "../../data/languages/en.json"

const initState = {
  language: HU
};

const changeLanguage = (state=initState, action) => {
  switch (action.type) {
    case 'CHANGE_TO_HU':
      return Object.assign({}, state, {
        language: HU,
      });
    case 'CHANGE_TO_EN':
      return Object.assign({}, state, {
        language: EN,
      });
    default:
      return state;
  }
}

export default changeLanguage;