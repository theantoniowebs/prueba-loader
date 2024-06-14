import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fin',
  templateUrl: './fin.page.html',
  styleUrls: ['./fin.page.scss'],
})
export class FinPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  inicio(){
    this.navCtrl.navigateForward('/home'); 
  }
}
