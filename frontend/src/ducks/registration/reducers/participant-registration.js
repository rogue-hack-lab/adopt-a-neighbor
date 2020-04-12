import { DefaultState } from '../default-state';
import * as Types from '../action-types';

export const initialState = {
  participantRegistration: {},
};

export const participantRegistration = (state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case Types.PARTICIPANT_REGISTRATION_RESPONSE:
      return {
        ...state,
        participantRegistration: {
          open: payload.open,
          success: payload.success,
          result: payload.result,
          error: payload.error,
          errorDetail: payload.errorDetail,
        },
      };
    case Types.PARTICIPANT_REGISTRATION_DEFAULT_STATE:
      return { ...state, participantRegistration: {} };
    case DefaultState.DEFAULT_STATE:
      return initialState;
    default:
      return state;
  }
}
