import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../hotel';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent  implements OnInit {
 
  constructor(private wishListServ: WishlistService,private router: Router) {}
  wishList: Hotel[] = [];
  userName = localStorage.getItem('userName');

  ngOnInit(): void {
    this.getWishList();
  }

  getWishList() {
    this.wishList = this.wishListServ.getWishList();
    console.log(this.wishList);
  }
  removeFromWishList(id: any) {
    this.wishListServ.removeFromWishList(id);
    this.getWishList();
  }
  navigateToDetails(id: number) {
    this.router.navigateByUrl(`hotel-details/${id}`);
  }
}
