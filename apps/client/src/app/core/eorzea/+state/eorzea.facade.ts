import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { EorzeaState } from './eorzea.reducer';
import { eorzeaQuery } from './eorzea.selectors';

@Injectable()
export class EorzeaFacade {
  loaded$ = this.store.select(eorzeaQuery.getLoaded);

  constructor(private store: Store<{ eorzea: EorzeaState }>) {
  }
}
