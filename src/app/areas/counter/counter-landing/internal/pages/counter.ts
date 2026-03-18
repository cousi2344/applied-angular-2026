import { Component, signal } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { Fizzbuzz } from '../fizzbuzz';

@Component({
  selector: 'app-home-pages-counter',
  imports: [PageLayout, Fizzbuzz],
  template: `<app-ui-page title="Counter">
    <div>
      <button (click)="decrement()" class="btn btn-circle btn-warning">-</button>
      <span class="text-3xl p-4">{{ counterValue() }}</span>
      <button (click)="increment()" class="btn btn-circle btn-primary">+</button>
    </div>
    <div class="p-8">
      <button class="btn btn-primary" (click)="reset()">Reset</button>
    </div>
    <div class="p-8">
      <app-counter-fizzbuzz [value]="counterValue()"></app-counter-fizzbuzz>
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class CounterPage {
  counterValue = signal(0);

  increment() {
    this.counterValue.update((x) => x + 1);
  }

  decrement() {
    this.counterValue.update((x) => x - 1);
  }

  reset() {
    this.counterValue.set(0);
  }
}
