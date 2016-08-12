/*
 * All reducers get two parameters passed in, store and action that occurred
 *  > store isn't entire apps store, only the part of store that this reducer is responsible for
 */
// "store = null" is set so that we don't throw an error when app first boots up
export const activeUserReducer = (store = null, action) => {
  switch (action.type) {
    case 'USER_SELECTED':
      return action.payload;
      break;
    case 'USER_CREATED':
      return null;
      break;
    case 'USER_UPDATED':
      return null;
      break;
    case 'USER_DELETED':
      return null;
      break;
    case 'USER_AUTHED':
      return null;
      break;
  }
  return store;
};
