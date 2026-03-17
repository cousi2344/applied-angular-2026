import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';

export type CounterOption = 1 | 3 | 5;

type CounterState = {
  option: CounterOption;
  current: number;
};

export const counterStore = signalStore(
  withState<CounterState>({ option: 1, current: 0 }),
  withComputed((store) => {
    return {
      shouldDisableDecrement: computed(() => {
        const current = store.current();
        const option = store.option();
        return current - option < 0;
      }),
      shouldDisableReset: computed(() => {
        const current = store.current();
        return current === 0;
      }),
    };
  }),
  withMethods((store) => {
    return {
      setOption: (option: CounterOption) => patchState(store, { option: option }),
      increment: () => patchState(store, { current: store.current() + store.option() }),
      decrement: () => patchState(store, { current: store.current() - store.option() }),
      reset: () => patchState(store, { current: 0 }),
    };
  }),
  withHooks({
    onInit() {
      console.log('Created a counter store');
    },
    onDestroy() {
      console.log('Destroyed a a counter store');
    },
  }),
);
