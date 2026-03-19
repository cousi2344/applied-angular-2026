import { Component, input } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';

@Component({
  selector: 'app-resources-pages-detail',
  imports: [PageLayout],
  template: `<app-ui-page title="details"> </app-ui-page>`,
  styles: ``,
})
export class DetailPage {
  id = input.required<string>();
}
