import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '../hotel';
import { HotelBookingSystemService } from '../hotel-booking-system.service';
import { ToastService } from '../toast.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  searchText:any;
  hotel: Hotel[] = [];
  id:any;
  userName = localStorage.getItem('userName');
  hotl: Hotel = new Hotel();
 

   constructor(
     private hotelSer: HotelBookingSystemService,
     private router: Router,
     private route: ActivatedRoute,
     private wishListServ: WishlistService,
     private toast: ToastService,
     private authService: SocialAuthService
   ) {}
   ngOnInit(): void {
    this.getAllHotels();
  }
  getAllHotels() {
    return this.hotelSer.getAllHotels().subscribe((data: any) => {
      this.hotel = data;
      console.log(data);
    });

}
navigateToDetails(id: number) {
  this.router.navigateByUrl(`hotel-details/${id}`);
}
getUserbyId() {
  return this.hotelSer.getUserByID(this.id).subscribe((data: any) => {
    this.hotl = data;
    console.log(data);
  });
}
addToWishList(id: any) {
  this.hotelSer.getHotelByID(id).subscribe((data: any) => {
    this.hotl = data;
    this.wishListServ.addHotelToWishList(this.hotl);
  });
}
navigateToWishlist(id: number) {
  this.addToWishList(id);
  //this.router.navigateByUrl(`wishlist/${id}`);
  this.toast.userWishlist();
}
signOut(): void {
  this.authService.signOut();
  
  window.location.replace("/login");
}




}
