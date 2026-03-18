import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';

export type CounterIncrementOption = 1 | 3 | 5;

type CounterState = {
  incrementOption: CounterIncrementOption;
  currentCount: number;
};

export const counterStore = signalStore(
  withState<CounterState>({ incrementOption: 1, currentCount: 0 }),
  withComputed((store) => {
    return {
      shouldDisableDecrement: computed(() => {
        const current = store.currentCount();
        const option = store.incrementOption();
        return current - option < 0;
      }),
      shouldDisableReset: computed(() => {
        const current = store.currentCount();
        return current === 0;
      }),
    };
  }),
  withMethods((store) => {
    return {
      setIncrementOption: (option: CounterIncrementOption) =>
        patchState(store, { incrementOption: option }),
      increment: () =>
        patchState(store, { currentCount: store.currentCount() + store.incrementOption() }),
      decrement: () =>
        patchState(store, { currentCount: store.currentCount() - store.incrementOption() }),
      reset: () => patchState(store, { currentCount: 0 }),
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
