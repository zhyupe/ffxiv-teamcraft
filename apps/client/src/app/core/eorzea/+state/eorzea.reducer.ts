import { EorzeaAction } from './eorzea.actions';

export interface EorzeaState {
  zoneId?: number;
  weatherId?: number;
  loaded: boolean; // has the Eorzea list been loaded
}

export const eorzeaInitialState: EorzeaState = {
  loaded: false
};

export function eorzeaReducer(
  state: EorzeaState = eorzeaInitialState,
  action: EorzeaAction
): EorzeaState {
  switch (action.type) {
  }
  return state;
}
