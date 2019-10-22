import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  position: null,
};

export default function filter(state = INITIAL_STATE, action) {
  // eslint-disable-next-line consistent-return
  return produce(state, draft => {
    switch (action.type) {
      case '@filter/CHANGE_POSITION_SUCCESS': {
        draft.position = action.payload.position;
        draft.loading = false;
        break;
      }

      case '@filter/CHANGE_POSITION_REQUEST': {
        draft.loading = true;
        break;
      }

      default:
        return state;
    }
  });
}
