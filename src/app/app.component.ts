import {Component, EventEmitter} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searching: boolean = false;
  p: number = 1;
  modalActions = new EventEmitter<string|MaterializeAction>();
  item: FirebaseListObservable<any>;
  constructor(db: AngularFireDatabase) {
    this.item = db.list('/');
  }
  onSearchChange(searchValue : string ) {
    console.log(searchValue.length);
    if(searchValue){
      this.searching= true;
    }else{
      this.searching= false;
    }}
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }
}
