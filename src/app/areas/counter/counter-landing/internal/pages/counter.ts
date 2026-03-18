import { Component, inject } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { Fizzbuzz } from '../fizzbuzz';
import { counterStore } from '../counter-store';

@Component({
  selector: 'app-home-pages-counter',
  imports: [PageLayout, Fizzbuzz],
  template: `<app-ui-page title="Counter">
    <div>
      <button
        class="btn btn-circle btn-warning"
        [disabled]="counterStore.shouldDisableDecrement()"
        (click)="counterStore.decrement()"
      >
        -
      </button>
      <span class="text-3xl p-4">{{ currentCount() }}</span>
      <button class="btn btn-circle btn-primary" (click)="counterStore.increment()">+</button>
    </div>
    <div class="p-8">
      <button
        class="btn btn-primary"
        [disabled]="counterStore.shouldDisableReset()"
        (click)="counterStore.reset()"
      >
        Reset
      </button>
    </div>
    <div class="p-8">
      <app-counter-fizzbuzz [value]="currentCount()"></app-counter-fizzbuzz>
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class CounterPage {
  counterStore = inject(counterStore);
  currentCount = this.counterStore.currentCount;
}
