import { Component, OnInit } from '@angular/core';
import { menuController } from '@ionic/core';
import { ModalController } from '@ionic/angular';
import { AddBuildingPage } from '../add-building/add-building.page';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  articles= [
    // {
    //   buildingType: 's+1',
    //   location: 'ariana',
    //   price: '400',
    //   description: 'nice',
    //   image: 'https://www.aveliving.com/AVE/media/Property_Images/Florham%20Park/hero/flor-apt-living-(2)-hero.jpg?ext=.jpg'
    // }
  ];
  usedArticles = [];

  constructor(
    public modalCtrl: ModalController,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.getArticles();
  }

  pushLog() {
    console.log('cancel');
    menuController.close();
  }

  async addBuilding() {
    const modal = await this.modalCtrl.create({
      component: AddBuildingPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'login-modal',
    });

    return await modal.present();
    // console.group('login');
  }

  async getArticles() {
    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
      console.log(this.articles);
      for (const article of Object.values(this.articles)) {
        this.usedArticles.push(article);
    }
    console.log(this.usedArticles);
  });
  }


}
