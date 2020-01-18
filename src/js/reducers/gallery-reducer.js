const initState = {
  gallery: false,
};

const galleryReducer = (state=initState, action) => {
  switch (action.type) {
    case 'OPEN_GALLERY':
      return Object.assign({}, state, {
        gallery: true,
      });
    case 'CLOSE_GALLERY':
      return Object.assign({}, state, {
        gallery: false,
      });
    default:
      return state;
  }
}

export default galleryReducer;