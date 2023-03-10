import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelBookingSystemService } from '../hotel-booking-system.service';
import { Payment } from '../payment';
import { ToastService } from '../toast.service';
import { User } from '../user';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
   user: User= new User();
  price=localStorage.getItem('price');
  userid=localStorage.getItem('userId');
payment: Payment= new Payment();

    userName=localStorage.getItem('userName');
    userEmail=localStorage.getItem('userEmail');
    userPhno=localStorage.getItem('userPhno');
    userAddress=localStorage.getItem('userAddress');

  constructor(private hotelSer: HotelBookingSystemService,
    private router: Router,
    private route: ActivatedRoute,
    private wishListServ: WishlistService,
    private toast: ToastService,
    private authService: SocialAuthService){}



    // navigateToClient(){
    //   this.router.navigateByUrl('/client')
    // }
    signOut(): void {
      this.authService.signOut();
      
      window.location.replace("/login");
    }
    onSubmit(){
      this.toast.userConfirmation();
      this.router.navigateByUrl('/client')
      this.createPayment();
    }

    createPayment() {
      this.userid == this.user.userId ;
      this.hotelSer.createPayment(this.payment).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => console.log(error)
      );
      
    }
  


}


