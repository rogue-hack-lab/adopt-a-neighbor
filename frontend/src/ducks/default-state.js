// Every top level reducer with persisted user data should have a case that resets it's slice of
// the store to the default state. When the user logs out of the application, the logout middleware
// (saga) should complete by calling the defaultStateAction() action
export const DEFAULT_STATE = 'DEFAULT_STATE';

export const defaultStateAction = () => ({
  type: DEFAULT_STATE,
});
