import { AccountsService } from './../../shared-services/accounts.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatContentComponent implements OnInit {

  // Variables 
  account: any;
  id: any = '';
  constructor(private accountService: AccountsService, private route: ActivatedRoute, private db: AngularFireDatabase) {
    this.route.queryParams.subscribe(value => {
      console.log(value.id);
      db.object('account' + value.id).valueChanges().subscribe(data => {
        console.log(data);
        this.account = data;
      });
    });
  }

  ngOnInit() {
  }

  // Send Message 
  sendMessage(msg) {
    console.log(msg.value);
    msg.value = '';
  }

  // Mute 
  mute(account) {
    console.log(account);
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: account.name + ' chat is muted !',
      showConfirmButton: false,
      timer: 1500
    });
  }

  // Delete 
  delete(account) {
    console.log(account);
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this conversation ?!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#007bff;',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete !'
    }).then((result) => {
      if (result.value) {
        this.db.object('account' + account.id).remove();
        Swal.fire(
          'Deleted !',
          'Conversation is deleted.',
          'success'
        )
      }
    })
  }
  // Archive 
  archive(account) {
    console.log(account);
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: account.name + ' chat is archived !',
      showConfirmButton: false,
      timer: 1500
    });
  }

}


