import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ChatComponent } from './modules/chat/chat.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { AsideComponent } from './modules/aside/aside.component';
import { RoomsService } from './service/rooms.service';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './modules/chat/components/message/message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './pages/auth/auth.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  //Здесь хранятся названия отдельных компонентов,каналы,директив которые используются
  //Нельзя объявлять один и тот же класс компонента в разных модулях
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    ChatComponent,
    MessageComponent,
    AuthComponent,
    MainComponent,],
  //Здесь испортируются различные необходимы модули
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  //Здесь хранятся сервисы,их можно будет использовать во всем приложении
  providers: [RoomsService],
  //Здесь описывается тот компонент, который будет вставлен в DOM 
  bootstrap: [AppComponent]
})
export class AppModule { }
