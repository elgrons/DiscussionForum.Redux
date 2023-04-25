const reducer = (state = {}, action) => {
  const { title, userName, thoughts, postTime, id } = action;
  switch (action.type){
  case 'ADD_POST':
    return Object.assign({}, state, {
    [id]: {
      title: title,
      userName: userName,
      thoughts: thoughts,
      postTime: postTime,
      id: id
      }
    });
    case 'DELETE_POST':
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default reducer;