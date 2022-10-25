/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable no-var */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.page.html',
  styleUrls: ['./add-building.page.scss'],
})
export class AddBuildingPage implements OnInit {

  options: any;
  article: any;
  buildingType = '';
  location = '';
  price = '';
  description = '';
  image = 'https://www.aveliving.com/AVE/media/Property_Images/Florham%20Park/hero/flor-apt-living-(2)-hero.jpg?ext=.jpg';

  constructor(
    public modalCtrl: ModalController,
    private imagePicker: ImagePicker,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
  }

  // async login() {
  //   const modal = await this.modalCtrl.create({
  //     component: AddBuildingPage,
  //     animated: true,
  //     mode: 'ios',
  //     backdropDismiss: false,
  //     cssClass: 'login-modal',
  //   });

  //   return await modal.present();
  //   // console.group('login');
  // }
  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  async getImage() {
    this.options = {
      width: 200,
      quality: 30,
      outputType: 1
    };
    this.imagePicker.getPictures(this.options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }

  async addArticle() {
    this.article = {
      buildingType: this.buildingType,
      location: this.location,
      price: this.price,
      description: this.description,
      image: this.image
    };
    this.articleService.addArticle(this.article).subscribe(data => {
      console.log(data);
    });
    this.dismiss();
  }

}
