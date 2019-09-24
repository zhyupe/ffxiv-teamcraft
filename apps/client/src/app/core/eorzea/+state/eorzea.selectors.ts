import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EorzeaState } from './eorzea.reducer';

// Lookup the 'Notifications' feature state managed by NgRx
const getEorzeaState = createFeatureSelector<EorzeaState>(
  'eorzea'
);

const getLoaded = createSelector(
  getEorzeaState,
  (state: EorzeaState) => state.loaded
);

export const eorzeaQuery = {
  getLoaded
};
