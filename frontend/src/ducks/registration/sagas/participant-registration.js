import { call, put, select } from 'redux-saga/effects';
import { sendAction, convertToSuccessesAndFailures } from '../utils';
import { participantRegistrationResponse } from '../actions';

export const existingInvitesFromClient = (clientStorePath) => (state) =>
  get(state, `${clientStorePath}invites`) || [];

export function* participantRegistrationSaga(config, action, timeout = 10000) {
  try {
    const response = yield call(sendAction, config, serverAction, url, timeout);
    const open = true;
    const { succeeded, failed, data, error } = response;
    if (failed) {
      const success = false;
      yield put(participantRegistrationResponse(open, success, {}, error));
    } else if (succeeded) {
      const success = true;
      yield put(participantRegistrationResponse(open, success, data, null));
    }
  } catch (error) {
    const open = true;
    const success = false;
    yield put(participantRegistrationResponse(open, success, {}, error));
  }
}
