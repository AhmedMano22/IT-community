import { Component } from '@angular/core';
import { UserProfile } from 'src/app/core/interfaces/user';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  public  path="assets/images/default.jpg";
 // User: any;
   notifications = [
    {
      username: 'ahmed saeed',
      image: 'assets/images/user/avatar-01.png',
      content: 'This is the content of the first notify.'
    },
    {
      username: 'ali hassan',
      image: 'assets/images/user/avatar-02.png',
      content: 'This is the content of the second notify.'
    },
    {
      username: 'hamada oksha',
      image: 'assets/images/user/avatar-03.png',
      content: 'This is the content of the second notify.'
    },
    {
      username: 'mina saad',
      image: 'assets/images/user/avatar-04.png',
      content: 'This is the content of the second notify.'
    },
    {
      username: 'hassan ahmed',
      image: 'assets/images/user/avatar-05.png',
      content: 'This is the content of the second notify.'
    },

  ];
  User = {
    firstName: 'Ahmed',
    lastName: 'Saeed',
    image: "assets/images/default.jpg"
  };
public totalItems = 0
  constructor(private cartSer:CartService) {

  }
  ngOnInit() {
    this.cartSer.getproduct().subscribe((res:any)=>{
      this.totalItems = res.length
    })
  }

}
