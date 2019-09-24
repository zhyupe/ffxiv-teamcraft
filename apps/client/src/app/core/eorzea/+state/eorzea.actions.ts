import { Action } from '@ngrx/store';

export enum EorzeaActionTypes {
  LoadEorzea = '[Eorzea] Load Eorzea'
}

export class LoadEorzea implements Action {
  readonly type = EorzeaActionTypes.LoadEorzea;
}

export type EorzeaAction =
  | LoadEorzea;
