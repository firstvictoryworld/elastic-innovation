import { combineReducers } from '@reduxjs/toolkit';

import commonReducer, { CommonState } from './common.reducer';

export interface RootState {
  commonReducer: CommonState;
}

const rootReducer = combineReducers<RootState>({
  commonReducer,
});

export default rootReducer;
