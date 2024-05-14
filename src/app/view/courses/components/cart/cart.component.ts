import { Component } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItem = [
    {
      productImg: "assets/images/cart/3.png",
      productName: "Long Top",
      price: 21,
      total: 12456
    },
    {
      productImg: "assets/images/cart/2.png",
      productName: "Man's Jacket",
      price: 50,
      total: 12456
    },
    {
      productImg: "assets/images/cart/1.png",
      productName: "Women Skirt",
      price: 11,
      total: 12456
    },
  ]
public courses!:any[];
public garndtotal:number = 0;
public totalafterdiscount:number = 0;
  constructor(private cartSer:CartService){}
  ngOnInit() {
    this.cartSer.getproduct().subscribe((res:any)=>{
      console.log("corses list in cart",res);
      this.courses = res;
     this.garndtotal= this.cartSer.gettotalprice();
     this.totalafterdiscount = this.garndtotal - 10
    })
  }
}
