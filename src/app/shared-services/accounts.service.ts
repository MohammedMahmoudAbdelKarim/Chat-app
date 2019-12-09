import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  accounts: Observable<any[]>;
  friend = new BehaviorSubject({});
  oneAccount = this.friend.asObservable();
  account: any;
  constructor(private db: AngularFireDatabase) {
    this.accounts = db.list('/').valueChanges();
  }

  getAccount(account) {
    console.log(account);
    this.account = account;
    // this.oneAccount = product;
    // this.friend.next(this.oneAccount);
    // console.log(this.oneAccount);
    // return this.db.object('account/' + id);
  }
}
