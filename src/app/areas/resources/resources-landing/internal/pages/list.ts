import { httpResource } from '@angular/common/http';
import { Component } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { ResourceApiItemModel } from '../types';
import { Card } from '../../widgets/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resources-pages-list',
  imports: [PageLayout, Card, RouterLink],
  template: `<app-ui-page title="Developer Resource List">
    <!-- <pre>{{ linksResource.value() | json }}</pre> -->
    @if (linksResource.isLoading()) {
      <span class="loading loading-spinner">Loading</span>
    } @else {
      <div class="grid grid-cols-4 gap-4">
        @for (link of linksResource.value(); track link.id) {
          <app-resources-widgets-card [title]="link.title">
            <div class="justify-end card-actions">
              <a class="btn btn-primary" [href]="link.url" target="_blank">Buy Now</a>
              <a class="btn btn-primary" [routerLink]="[link.id]">Details</a>
            </div>
          </app-resources-widgets-card>
        } @empty {
          <div class="alert alert-error">No resources found.</div>
        }
      </div>
    }
  </app-ui-page>`,
  styles: ``,
})
export class ListPage {
  linksResource = httpResource<ResourceApiItemModel[]>(
    () => 'https://ang.hypertheory-labs.com/api/resources',
  );
}
