import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { ChatContentComponent } from './views/chat-content/chat-content.component';
import { EmptyScreenComponent } from './views/empty-screen/empty-screen.component';


// import { ToastrModule } from 'ngx-toastr';

// Angular Material 
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    ChatContentComponent,
    EmptyScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    MatIconModule,
    MatMenuModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    // ToastrModule.forRoot({
    //   timeOut: 10000,
    //   positionClass: 'toast-top-center',
    //   enableHtml: true,
    //   closeButton: true,
    //   tapToDismiss: true,
    //   progressBar: true,
    //   disableTimeOut: false
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
