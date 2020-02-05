import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Inputmask } from 'node_modules/inputmask/';
import { PaymentDetailService } from './../../shared/payment-detail.service';

import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-payment-detail',
    templateUrl: './payment-detail.component.html',
    styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

    constructor(
        private service: PaymentDetailService,
        private toastr: ToastrService) { }

    ngOnInit() {
        // Inputmask().mask(document.querySelectorAll('input'));
        this.resetForm();
    }
    resetForm(form?: NgForm) {
        if (form != null) {
            form.resetForm();
        }
        this.service.formData = {
            PMId: 0,
            CardOwnerName: '',
            CardNumber: '',
            ExpirationDate: '',
            CVV: '',
        };
    }
    onSubmit(form: NgForm) {
        if (this.service.formData.PMId === 0) {
            this.insertRecord(form);
        } else {
            this.updateRecord(form);
        }
    }

    insertRecord(form: NgForm) {
        this.service.postPaymentDetail().subscribe(
            res => {
                this.resetForm(form);
                this.toastr.success('Submited successfully', 'Payment Detail Register');
                this.service.refreshList();
            },
            err => {
                console.log(err);
                this.toastr.error('Deu erro man!', 'Error');
            }
        );
    }

    updateRecord(form: NgForm) {
        this.service.putPaymentDetail().subscribe(
            res => {
                this.resetForm(form);
                this.toastr.success('Updated successfully', 'Payment Detail Update');
                this.service.refreshList();
            },
            err => {
                console.log(err);
                this.toastr.error('Deu erro man!', 'Error');
            }
        );
    }


}
