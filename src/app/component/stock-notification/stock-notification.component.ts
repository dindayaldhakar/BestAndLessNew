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
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'cx-stock-notification',
  templateUrl: './stock-notification.component.html',
  styleUrls: ['./stock-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomStockNotificationComponent extends StockNotificationComponent implements OnInit, OnDestroy {
  
  closeResult!: string;
  addPaymentForm!: FormGroup;
  form = {   
    email: '',
    password: ''
  };
  constructor(
    currentProductService: CurrentProductService,
    globalMessageService: GlobalMessageService,
    translationService: TranslationService,
    interestsService: UserInterestsService,
    modalService: ModalService,
    notificationPrefService: UserNotificationPreferenceService,
    userIdService: UserIdService,
    private bsModalService: NgbModal,
    private formBuilder: FormBuilder
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
    this.addPaymentForm = this.formBuilder.group({
      jobId: ['', [Validators.required, Validators.maxLength(9)]],
      grossAmount:  ['', [Validators.required, Validators.max(10000), Validators.min(-10000)]]
    });
  }
  get f() { return this.addPaymentForm.controls; }
  
  notifiMe(content: any) {
    this.bsModalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
  onSubmit(form: NgForm){
    console.log(form);

  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
