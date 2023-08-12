import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  GlobalMessageService,  
  TranslationService,
  UserIdService,
  UserInterestsService,
  UserNotificationPreferenceService,
} from '@spartacus/core';
import { CurrentProductService, ModalService, StockNotificationComponent } from '@spartacus/storefront';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CustomStockNotificationDialogComponent } from './stock-notification-dialog/stock-notification-dialog.component';

@Component({
  selector: 'cx-stock-notification',
  templateUrl: './stock-notification.component.html',
  styleUrls: ['./stock-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomStockNotificationComponent extends StockNotificationComponent implements OnInit, OnDestroy {
  
  closeResult!: string;
  constructor(
    currentProductService: CurrentProductService,
    globalMessageService: GlobalMessageService,
    translationService: TranslationService,
    interestsService: UserInterestsService,
    modalService: ModalService,
    notificationPrefService: UserNotificationPreferenceService,
    userIdService: UserIdService,
    private bsModalService: NgbModal
  ) {
    super(currentProductService,
       globalMessageService,
       translationService,
       interestsService,
       modalService,
       notificationPrefService,
       userIdService)
  }

  ngOnInit() {
    super.ngOnInit();
    
  }
  
  notifiMe() {
    this.bsModalService.open(CustomStockNotificationDialogComponent,
      {
        centered: true,
        size: 'md',
      })
    //   .result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
