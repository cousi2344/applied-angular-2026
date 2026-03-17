import { Component, inject } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { counterStore } from '../counter-store';

@Component({
  selector: 'app-demos-pages-counter-prefs',
  imports: [PageLayout],
  template: `<app-ui-page title="counter-prefs">
    <button
      (click)="counterStore.setOption(1)"
      [disabled]="counterStore.option() === 1"
      class="btn join-item"
    >
      1
    </button>
    <button
      (click)="counterStore.setOption(3)"
      [disabled]="counterStore.option() === 3"
      class="btn join-item"
    >
      3
    </button>
    <button
      (click)="counterStore.setOption(5)"
      [disabled]="counterStore.option() === 5"
      class="btn join-item"
    >
      5
    </button>
  </app-ui-page>`,
  styles: ``,
})
export class PrefsPage {
  counterStore = inject(counterStore);
}
