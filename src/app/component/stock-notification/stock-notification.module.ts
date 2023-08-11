import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomStockNotificationComponent } from './stock-notification.component';
import {
  CmsConfig,
  I18nModule,
  provideDefaultConfig,
  UrlModule,
} from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { SpinnerModule } from '@spartacus/storefront';

@NgModule({
  declarations: [CustomStockNotificationComponent],
  imports: [CommonModule, RouterModule, I18nModule, SpinnerModule, UrlModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        StockNotificationComponent: {
          component: CustomStockNotificationComponent,
        },
      },
    }),
  ],
  exports: [CustomStockNotificationComponent],
})
export class CustomStockNotificationModule {}
