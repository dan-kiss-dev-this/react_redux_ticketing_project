export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_TICKET':
    const { names, location, issue, timeOpen, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id
      }
    });
    console.log(newState);
    return newState;
  default:
    return state;
  }
};
