import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searching: boolean = false;
  p: number = 1;
  title = 'app works!';
  item: FirebaseListObservable<any>;
  constructor(db: AngularFireDatabase) {
    this.item = db.list('/');
  }
  onSearchChange(searchValue : string ) {
    console.log(searchValue.length);
    if(searchValue){
      this.searching= true;
      console.log("search :"+this.searching);
    }else{
      this.searching= false;
      console.log("search :"+this.searching);

    }}

}
