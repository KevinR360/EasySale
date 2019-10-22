export function changePositionRequest(position) {
  return {
    type: '@filter/CHANGE_POSITION_REQUEST',
    payload: { position },
  };
}

export function changePositionSuccess(position) {
  return {
    type: '@filter/CHANGE_POSITION_SUCCESS',
    payload: { position },
  };
}
