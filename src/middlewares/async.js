export default function({ dispatch }) {
  return next => action => {
    // If action does  not have payload
    // or , the payload does not have a .then property
    // we don't care about it, sent it on
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
    // make sure the action's promise resolves
    // create a new action with the old type, but
    // replace the promise with the response data
    action.payload.then(res => dispatch({ ...action, payload: res }));
  };
}
