import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { TermcondComponent } from './termcond/termcond.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { UserCRUDComponent } from './user-crud/user-crud.component';

import { UpdateUserComponent } from './update-user/update-user.component';
import { HotelCRUDComponent } from './hotel-crud/hotel-crud.component';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { LocationCRUDComponent } from './location-crud/location-crud.component';
import { CreateLocationComponent } from './create-location/create-location.component';
import { BookingCRUDComponent } from './booking-crud/booking-crud.component';

import { LocationPipe } from './location.pipe';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { UpdateLocationComponent } from './update-location/update-location.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { PaymentComponent } from './payment/payment.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MessageComponent } from './message/message.component';
import { ClientComponent } from './client/client.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ToastrModule} from 'ngx-toastr';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
 
} from '@abacritt/angularx-social-login';
import { SuccessComponent } from './success/success.component';
import { UserDetailsComponent } from './user-details/user-details.component';
const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'termcond', component: TermcondComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'user', component: UserComponent},
  { path: '', component: HomeComponent},
  { path: 'user-crud', component: UserCRUDComponent},
  
  { path: 'update_user/:id', component: UpdateUserComponent},
  { path: 'hotel-crud', component: HotelCRUDComponent},
  { path: 'create-hotel', component: CreateHotelComponent},
  { path: 'location-crud', component: LocationCRUDComponent},
  { path: 'create-hotel', component: CreateHotelComponent},
  { path: 'create-location', component: CreateLocationComponent},
 
  { path: 'booking-crud', component: BookingCRUDComponent},
  { path: 'booking-page/:id', component:  BookingPageComponent},
  { path: 'update-hotel/:id', component:  UpdateHotelComponent },
  { path: 'update-location/:id', component:  UpdateLocationComponent },
  { path: 'hotel-details/:id', component:  HotelDetailsComponent },
  { path: 'contactus', component: ContactUsComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'message', component: MessageComponent},
  { path: 'client', component: ClientComponent},
  { path: 'wishlist/:id',component: WishlistComponent},
  { path: 'success', component: SuccessComponent},
  { path: 'user-Details', component: UserDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    TermcondComponent,
    FooterComponent,
    UserComponent,
    HomeComponent,
    UserCRUDComponent,
 
    UpdateUserComponent,
    HotelCRUDComponent,
    CreateHotelComponent,
    LocationCRUDComponent,
    CreateLocationComponent,
    BookingCRUDComponent,
   
    LocationPipe,
    BookingPageComponent,
    UpdateLocationComponent,
    UpdateHotelComponent,
    PaymentComponent,
    HotelDetailsComponent,
    ContactUsComponent,
    AboutUsComponent,
    MessageComponent,
    ClientComponent,
    WishlistComponent,
    SuccessComponent,
    UserDetailsComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgImageSliderModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SocialLoginModule

  ],
  providers: [ {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '530534374081-h3bu7aouid1qh6vpjni6s8emodt6tgls.apps.googleusercontent.com'
          )
        }
       
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }


