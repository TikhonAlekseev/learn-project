import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { AsideComponent } from './modules/aside/aside.component';
import { ChatComponent } from './modules/chat/chat.component';
import { RoomsService } from './service/rooms.service';
import { MessageComponent } from './modules/chat/components/message/message.component';
import { FormsModule } from '@angular/forms'
@NgModule({
  //Здесь хранятся названия отдельных компонентов,каналы,директив которые используются
  //Нельзя объявлять один и тот же класс компонента в разных модулях
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    ChatComponent,
    MessageComponent,
  ],
  //Здесь испортируются различные необходимы модули
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //Здесь хранятся сервисы,их можно будет использовать во всем приложении
  providers: [RoomsService],
  //Здесь описывается тот компонент, который будет вставлен в DOM 
  bootstrap: [AppComponent]
})
export class AppModule { }
