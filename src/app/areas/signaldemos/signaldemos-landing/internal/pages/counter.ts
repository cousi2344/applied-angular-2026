import { Component, computed, effect, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';

@Component({
  selector: 'app-demos-pages-counter',
  imports: [PageLayout],
  template: `<app-ui-page title="Counter">
    <div>
      <button
        [disabled]="shouldBeDisabled()"
        (click)="decrement()"
        class="btn btn-circle btn-warning"
      >
        -
      </button>
      <span class="text-3xl p-4">{{ current() }}</span>
      <button (click)="increment()" class="btn btn-circle btn-success">+</button>
    </div>
    <div class="p-8">
      <button [disabled]="shouldBeDisabled()" (click)="reset()" class="btn btn-md btn-primary">
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
  current = signal(0);

  title = inject(Title);

  shouldBeDisabled = computed(() => this.current() === 0);

  emoji = computed(() => '💾'.repeat(this.current()));

  constructor() {
    effect(() => {
      this.title.setTitle(this.emoji());
    });
  }

  increment() {
    this.current.update((x) => x + 1);
  }

  decrement() {
    this.current.update((x) => x - 1);
  }

  reset() {
    this.current.set(0);
  }
}
