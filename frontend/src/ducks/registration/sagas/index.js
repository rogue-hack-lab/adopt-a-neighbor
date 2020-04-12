import { all, takeLatest } from 'redux-saga/effects';
import * as Types from '../action-types';
import { participantRegistrationSaga } from './participant-registration';

export function* watchParticipantRegistrationSendSaga(config) {
  yield takeLatest(
    Types.PARTICIPANT_REGISTRATION_REQUEST,
    participantRegistrationSaga,
    config,
  );
}

export default (config = {}) =>
  function* rootSaga() {
    yield all([watchParticipantRegistrationSendSaga(config)]);
  };
