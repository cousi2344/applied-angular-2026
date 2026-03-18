import { Component, signal } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';

export type CounterIncrementOptions = 1 | 3 | 5;

@Component({
  selector: 'app-home-pages-prefs',
  imports: [PageLayout],
  template: `<app-ui-page title="Preferences">
    <button
      class="btn"
      [disabled]="counterIncrementValue() === 1"
      (click)="updateCounterIncrementValue(1)"
    >
      1
    </button>
    <button
      class="btn"
      [disabled]="counterIncrementValue() === 3"
      (click)="updateCounterIncrementValue(3)"
    >
      3
    </button>
    <button
      class="btn"
      [disabled]="counterIncrementValue() === 5"
      (click)="updateCounterIncrementValue(5)"
    >
      5
    </button>
  </app-ui-page>`,
  styles: ``,
})
export class PrefsPage {
  counterIncrementValue = signal(1);

  updateCounterIncrementValue(value: CounterIncrementOptions) {
    this.counterIncrementValue.set(value);
  }
}
