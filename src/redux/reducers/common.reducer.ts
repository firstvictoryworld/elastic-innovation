import { COMMON_ACTIONS } from '../action-types';

export interface CommonState {
  isDarkMode: boolean;
}

const initialState: CommonState = {
  isDarkMode: false,
};

const commonReducer = (state: CommonState = initialState, action: any) => {
  const { type } = action;

  switch (type) {
    case COMMON_ACTIONS.SET_MODE:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };

    default:
      return state;
  }
};

export default commonReducer;
