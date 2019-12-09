import { EmptyScreenComponent } from './views/empty-screen/empty-screen.component';
import { ChatContentComponent } from './views/chat-content/chat-content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'chat',
    pathMatch: 'full'
  },
  {
    path: 'chat',
    component: EmptyScreenComponent,
    data: {
      title: 'Empty Chat'
    }
  },
  {
    path: 'chat/:id',
    component: ChatContentComponent,
    data: {
      title: 'Chat'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
