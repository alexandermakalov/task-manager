import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as productActions from './task-list.actions';

@Injectable()
export class TaskListEffects {

  constructor(private actions$: Actions) { }

  
}
