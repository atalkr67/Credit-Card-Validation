import { SimpleChanges } from '@angular/core';
import { Component, OnInit, Input, ViewChild, SimpleChange } from '@angular/core';
import { CarddetailsComponent } from '../carddetails/carddetails.component'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cardImage = '/assets/images/22.jpeg';
  stickerImage = '/assets/images/chip.png';
  cardTypeImages = {
    amex: '/assets/images/amex.png',
    dinersclub:'/assets/images/dinersclub.png',
    discover:'/assets/images/discover.png',
    jcb:'/assets/images/jcb.png',
    mastercard:'/assets/images/mastercard.png',
    troy:'/assets/images/troy.png',
    unionpay:'/assets/images/unionpay.png',
    visa:'/assets/images/visa.png'
  }

  showChild: boolean = false;
  cardNumberOnImage: any = '';
  cardNumberIndex: any = 0;
  
@Input() public cardNumInput: any;
@Input() public cardNamInput: any;
@Input() public cardNumberClicked: any;
@Input() public cardNameClicked: any;
@Input() public cardExpClicked: any;
@Input() public selectedExpMonth: any;
@Input() public selectedExpYear: any;
@Input() public flipped: any;
@Input() public cardCVVNum: any;
@Input() public cardTypeImg: any;
   


  constructor() { }

  // ngOnChanges(changes: SimpleChanges){
  //   if(changes && changes.flipped && changes.flipped.currentValue){
  //     setTimeout(()=> {
  //       (this.showChild = true);
  //     },400)
  //   }
  //   if(changes && changes.flipped && !changes.flipped.currentValue){
     
  //       this.showChild = false;
  //   }
  //   console.log("simple change",changes)
  // }

  ngOnChanges(changes: SimpleChanges){
    if(changes && changes.cardNumInput && changes.cardNumInput.currentValue){
      this.cardNumberOnImage = '';
      let currentValueLen = changes.cardNumInput.currentValue.length;
      for(let i = 0; i<currentValueLen; i++){
        this.cardNumberOnImage = this.cardNumberOnImage + changes.cardNumInput.currentValue[i];
        if((i == 3 || i == 7 || i == 11)){
          this.cardNumberOnImage = this.cardNumberOnImage + " ";
        }
      }
    }

    // if(changes && changes.cardNumInput && changes.cardNumInput.currentValue){
    //   let currentValueLen = changes.cardNumInput.currentValue.length;
    //   let previousValueLen = changes.cardNumInput.previousValue.length;
    //   if(currentValueLen > previousValueLen){
    //     this.cardNumberOnImage = this.cardNumberOnImage + changes.cardNumInput.currentValue[this.cardNumberIndex];
    //     this.cardNumberIndex++;
    //     if(this.cardNumberIndex == 4 || this.cardNumberIndex == 8 || this.cardNumberIndex == 12){
    //       this.cardNumberOnImage = this.cardNumberOnImage + " ";
    //     }
    //   } else {
        
    //   }
    // }
  }

  ngOnInit(): void {}

}
