import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ChatComponent } from './modules/chat/chat.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { AsideComponent } from './modules/aside/aside.component';
import { RoomsService } from './service/rooms.service';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './modules/chat/components/message/message.component';
import { AuthComponent } from './pages/auth/auth.component';
import { MainComponent } from './pages/main/main.component';
import {MatIconModule} from '@angular/material/icon';
//Material UI Components
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';

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
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatDividerModule
  ],
  //Здесь хранятся сервисы,их можно будет использовать во всем приложении
  providers: [RoomsService],
  //Здесь описывается тот компонент, который будет вставлен в DOM 
  bootstrap: [AppComponent]
})
export class AppModule { }
