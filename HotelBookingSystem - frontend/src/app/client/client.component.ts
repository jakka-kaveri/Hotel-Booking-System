import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  title="sample app"
  paymentHandler: any = null;
 
  success: boolean = false;
  
  failure:boolean = false;
  price:any;

 
  constructor(private checkout: CheckoutService,private authService: SocialAuthService) {}
 
  ngOnInit() {
    this.invokeStripe();
    if (localStorage.getItem('price') != null) {
      this.price = localStorage.getItem('price');
    }

  }
 
  makePayment() {
    var amount = this.price;
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Mb2TuSB73RjjV4cXhXPxfGRlPX6RiWuC6x3xvupgnr7hQre2z2ujRacb9PhIDbuBw7S8idgfgOHHw5LRcB6wpCX00lOWL7Kei',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        //paymentstripe(stripeToken);
        alert('Your payment is sucessfully done!');
        window.location.replace("/success");
      },
    });
 
    
    // const paymentstripe = (stripeToken: any) => {
    //   this.checkout.makePayment(stripeToken).subscribe((data: any) => {
    //      console.log(data);
    //     if (data.data === "success") {
    //       this.success = true
    //     }
    //     else {
    //       this.failure = true
    //     }
    //   });
    // };
 
    paymentHandler.open({
      name: 'HOoBO',
      description: 'Hotel Booking App',
      amount: amount ,
     
    });
  }
  signOut(): void {
    this.authService.signOut();
    
    window.location.replace("/login");
  }
 
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51Mb2TuSB73RjjV4cXhXPxfGRlPX6RiWuC6x3xvupgnr7hQre2z2ujRacb9PhIDbuBw7S8idgfgOHHw5LRcB6wpCX00lOWL7Kei'
          ,
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };
 
      window.document.body.appendChild(script);
    }
  }
}