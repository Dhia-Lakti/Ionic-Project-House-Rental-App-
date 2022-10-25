import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  users = [];
  user: any;
  name = '';
  mail = '';
  phone = '';
  userType = '';
  password = '';

  errorMsg = false;

  constructor(
    public modalCtrl: ModalController,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  async register() {

    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
      for (const user of Object.values(this.users)) {
        if (user.mail == this.mail) {
          this.errorMsg = true;
          console.log('enter');
          break;
        }
      }
      if(this.errorMsg === false) {
        this.user = {
          name : this.name,
          mail : this.mail,
          phone : this.phone,
          userType : this.userType,
          password : this.password
        };
        this.userService.addUser(this.user).subscribe(dataa => {
          console.log(dataa);
        });
      }
    });
  }

  async dismiss() {
    return await this.modalCtrl.dismiss();
  }

}
