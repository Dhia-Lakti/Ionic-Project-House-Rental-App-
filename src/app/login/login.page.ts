import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  users = [];
  mail= '';
  password = '';
  NoerrorMsg = false;

  constructor(
    public modalCtrl: ModalController,
    private userService: UserService
  ) { }

  ngOnInit() {
  }
  async login() {

    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
      for (const user of Object.values(this.users)) {
        if (user.mail == this.mail && user.password == this.password) {
          console.log('enter');
          this.NoerrorMsg = true;
        }
  }
});
if(this.NoerrorMsg) {
const modal = await this.modalCtrl.create({
  component: TabsPage,
  animated: true,
  mode: 'ios',
  backdropDismiss: false,
  cssClass: 'login-modal',
});
return await modal.present();
}
}

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}
