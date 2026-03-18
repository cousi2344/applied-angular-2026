import { Component, computed, input, Signal } from '@angular/core';

export type FizzBuzzStatus = 'Fizz' | 'Buzz' | 'FizzBuzz' | undefined;

@Component({
  selector: 'app-counter-fizzbuzz',
  imports: [],
  template: `
    <div>
      @switch (status()) {
        @case ('FizzBuzz') {
          <span>FizzBuzz</span>
        }
        @case ('Fizz') {
          <span>Fizz</span>
        }
        @case ('Buzz') {
          <span>Buzz</span>
        }
      }
    </div>
  `,
  styles: ``,
})
export class Fizzbuzz {
  value = input.required<number>();

  status: Signal<FizzBuzzStatus> = computed(() => {
    const val = this.value();

    const fizz = val > 0 && val % 3 === 0;
    const buzz = val > 0 && val % 5 === 0;

    if (fizz && buzz) {
      return 'FizzBuzz';
    } else if (fizz) {
      return 'Fizz';
    } else if (buzz) {
      return 'Buzz';
    } else {
      return undefined;
    }
  });
}
