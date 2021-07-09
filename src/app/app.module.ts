import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbThemeModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbCardModule, NbInputModule, NbListModule, NbSearchModule,NbSpinnerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';
import { UserAddComponent } from './user-add/user-add.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    UserAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot(),
    RouterModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbSidebarModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbListModule,
    NbSearchModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
