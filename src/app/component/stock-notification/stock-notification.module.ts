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
import { CustomStockNotificationDialogComponent } from './stock-notification-dialog/stock-notification-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomStockNotificationComponent, CustomStockNotificationDialogComponent],
  imports: [CommonModule, RouterModule, I18nModule, SpinnerModule, UrlModule, FormsModule,
    ReactiveFormsModule ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        StockNotificationComponent: {
          component: CustomStockNotificationComponent,
        },
      },
    }),
  ],
  exports: [CustomStockNotificationComponent, CustomStockNotificationDialogComponent],
})
export class CustomStockNotificationModule {}
