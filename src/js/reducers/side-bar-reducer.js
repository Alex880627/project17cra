const initState = {
  sideBar: false
};

const toogleSideBar = (state=initState, action) => {
  switch (action.type) {
    case 'OPEN_SIDE_BAR':
      return Object.assign({}, state, {
        sideBar: true,
      });
    case 'CLOSE_SIDE_BAR':
      return Object.assign({}, state, {
        sideBar: false,
      });
    default:
      return state;
  }
}

export default toogleSideBar;