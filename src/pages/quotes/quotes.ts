import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  constructor (private navParams: NavParams) {}
    quoteGroup: {category: string, quotes: Quote[], icon: string}[];

    ngOnInit() {
      this.quoteGroup = this.navParams.data;
    }

}
