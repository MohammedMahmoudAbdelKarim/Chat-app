import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AccountsService } from './shared-services/accounts.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Variables
  items: any;
  name: any;
  msgVal = '';
  accounts: any = [];
  constructor(private accountService: AccountsService, public db: AngularFireDatabase, afAuth: AngularFireAuth) {
    this.accountService.accounts.subscribe(accounts => {
      this.accounts = accounts;
      console.log(this.accounts);
    });
    this.items = db.list('/message').query.limitToLast(5);

  }
  ngOnInit() {
  }

  singleAccount(account) {
    this.accountService.getAccount(account);
  }
}
