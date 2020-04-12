import * as Types from '../action-types';

export const participantRegistrationRequest(
  name,
  homeAddress,
  unitNumber,
  phoneNumber,
  communityReferrals,
  notes,
  textMessageOptIn = false,
  maxNeighborMatches = 0,
  emailAddress = undefined,
  geocode = undefined
) {
  return {
    type: Types.PARTICIPANT_REGISTRATION_REQUEST,
    name,
    homeAddress,
    unitNumber,
    phoneNumber,
    communityReferrals,
    notes,
    textMessageOptIn,
    maxNeighborMatches,
    emailAddress,
    geocode
  };
}

export const participantRegistrationResponse = (open, success, result = {}, error = undefined, errorDetail = undefined) => {
  return {
    type: Types.PARTICIPANT_REGISTRATION_RESPONSE,
    payload: {
      open,
      success,
      result = {},
      error = null,
      errorDetail = null
    }
  };
}

export const participantRegistrationResponseClear = () => {
  type: Types.PARTICIPANT_REGISTRATION_DEFAULT_STATE
}
