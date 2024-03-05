import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FooterComponent } from './pages/footer/footer.component';
import { ReciepeCardComponent } from './pages/reciepe-card/reciepe-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
// import { MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { CreateReciepeFormComponent } from './pages/create-reciepe-form/create-reciepe-form.component';
import { UpdateReciepeFormComponent } from './pages/update-reciepe-form/update-reciepe-form.component';
import { AuthComponent } from './pages/auth/auth.component';
import { provideHttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ReciepeCardComponent,
    HomePageComponent,
    CreateReciepeFormComponent,
    UpdateReciepeFormComponent,
    AuthComponent
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule, 
    MatIconModule,
    MatFormFieldModule,
    MatCardModule, 
    MatButtonModule,
    FormsModule,
    MatRadioModule,
    MatInputModule,
   
  ],
  providers: [
    provideAnimationsAsync(),provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
