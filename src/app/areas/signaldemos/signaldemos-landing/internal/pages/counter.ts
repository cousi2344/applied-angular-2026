import { Component, computed, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { counterStore } from '../counter-store';

@Component({
  selector: 'app-demos-pages-counter',
  imports: [PageLayout],
  template: `<app-ui-page title="Counter">
    <div>
      <button
        [disabled]="counterStore.shouldDisableDecrement()"
        (click)="decrement()"
        class="btn btn-circle btn-warning"
      >
        -
      </button>
      <span class="text-3xl p-4">{{ current() }}</span>
      <button (click)="increment()" class="btn btn-circle btn-success">+</button>
    </div>
    <div class="p-8">
      <button
        [disabled]="counterStore.shouldDisableReset()"
        (click)="reset()"
        class="btn btn-md btn-primary"
      >
        Reset
      </button>
    </div>
    <div class="p-8">
      <span>{{ emoji() }}</span>
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class CounterPage {
  counterStore = inject(counterStore);
  current = this.counterStore.current;

  title = inject(Title);

  emoji = computed(() => '💾'.repeat(this.counterStore.current()));

  constructor() {
    effect(() => {
      this.title.setTitle(this.emoji());
    });
  }

  increment() {
    this.counterStore.increment();
  }

  decrement() {
    this.counterStore.decrement();
  }

  reset() {
    this.counterStore.reset();
  }
}
