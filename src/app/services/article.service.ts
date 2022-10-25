import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) { }


  addArticle(article: any): Observable<any> {
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(article);
    console.log(body);
    return this.httpClient.post('https://first-ionic-app-abf7e-default-rtdb.firebaseio.com/articles.json', body,{headers});
  }

  getArticles(): Observable<any>{
    return this.httpClient.get<any>(`https://first-ionic-app-abf7e-default-rtdb.firebaseio.com/articles.json`);
  }
}
