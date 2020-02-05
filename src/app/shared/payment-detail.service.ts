import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  formData: PaymentDetail;

  readonly rootURL = 'http://localhost:61051/api'; // Ao colocar o vs pra debugar, atualize a url
  list: PaymentDetail[];

  constructor(private http: HttpClient) { }

  postPaymentDetail() {
    return this.http.post(this.rootURL + '/PaymentDetail', this.formData);
  }

  putPaymentDetail() {
    return this.http.put(this.rootURL + '/PaymentDetail/' + this.formData.PMId, this.formData);
  }

  deletePaymentDetail(id) {
    return this.http.delete(this.rootURL + '/PaymentDetail/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + '/PaymentDetail').toPromise()
      .then(res => this.list = res as PaymentDetail[]);
  }
}
