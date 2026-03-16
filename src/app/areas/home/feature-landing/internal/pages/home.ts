import { Component, signal } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';

@Component({
  selector: 'ht-home-home',
  imports: [PageLayout],
  template: `
    <app-ui-page title="Angular">
      <p>Welcome to the Angular Starter Project!</p>
      <button (click)="decrement()" class="btn btn-warning btn-circle">-</button>
      <span class="text-3xl p-4">{{ current() }}</span>
      <button (click)="increment()" class="btn btn-primary btn-circle">+</button>
    </app-ui-page>
  `,
  styles: ``,
})
export class HomePage {
  protected readonly current = signal(0);

  decrement() {
    this.current.update((x) => x - 1);
  }

  increment() {
    this.current.update((x) => x + 1);
  }
}
