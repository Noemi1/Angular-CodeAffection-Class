import { PaymentDetailComponent } from './../payment-detail/payment-detail.component';
import { Component, OnInit } from '@angular/core';

import { PaymentDetailService } from './../../shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.css']
})
export class PaymentDetailListComponent implements OnInit {

  constructor(
    private service: PaymentDetailService,
    private toastr: ToastrService) { }

  selected: PaymentDetail;

  ngOnInit() {
    this.service.refreshList();
    console.log(this.service);
  }
  populateForm(pd: PaymentDetail) {
    this.service.formData = pd;
  }

  onSelect(pd: PaymentDetail) {
    this.selected = pd;
    return pd;
  }

  onDelete(pd: PaymentDetail) {
    if (confirm('Tem certeza que deseja deletar o registro?')) {
      this.service.deletePaymentDetail(pd.PMId).subscribe(
        res => {
          this.service.refreshList();
          this.service.formData = {
            PMId: 0,
            CardOwnerName: '',
            CardNumber: '',
            ExpirationDate: '',
            CVV: '',
          };
        },
        err => {
          console.log(err);
          this.toastr.error('Delete unsuccessfully', 'Please select one row to delete');
        }
      );
    }
  }
}
