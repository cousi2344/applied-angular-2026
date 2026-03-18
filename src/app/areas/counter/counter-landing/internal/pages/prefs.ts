import { Component, inject, signal } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { CounterIncrementOption, counterStore } from '../counter-store';

@Component({
  selector: 'app-home-pages-prefs',
  imports: [PageLayout],
  template: `<app-ui-page title="Preferences">
    <button
      class="btn"
      [disabled]="counterStore.incrementOption() === 1"
      (click)="counterStore.setIncrementOption(1)"
    >
      1
    </button>
    <button
      class="btn"
      [disabled]="counterStore.incrementOption() === 3"
      (click)="counterStore.setIncrementOption(3)"
    >
      3
    </button>
    <button
      class="btn"
      [disabled]="counterStore.incrementOption() === 5"
      (click)="counterStore.setIncrementOption(5)"
    >
      5
    </button>
  </app-ui-page>`,
  styles: ``,
})
export class PrefsPage {
  counterStore = inject(counterStore);

  counterIncrementValue = signal(1);

  updateCounterIncrementValue(value: CounterIncrementOption) {
    this.counterIncrementValue.set(value);
  }
}
