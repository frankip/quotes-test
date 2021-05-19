import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote: Quote[] = [
    new Quote(1, 'The way to get started is to quit talking and begin doing.', '-Walt Disney', new Date(2001, 19, 10), 1, 1),
    new Quote(2, 'Your time is limited, so do not waste it living others life. Do not be trapped by dogma which is living with the results of other peoples thinking.', 'Steve Jobs', new Date(2000, 30, 10), 1, 1),
    new Quote(3, 'If life were predictable it would cease to be life, and be without flavor.', 'If life were predictable it would cease to be life, and be without flavor.', new Date(2000, 18, 2), 1, 1)
  ];



  addNewQuote(quote: Quote) {
    let quoteLength = this.quote.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }

  toggleDetail(index: string | number) {
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  upVote(index: { like: number; }) {
    index.like++;
    // console.log(index)
  }
  downVote(index: { dislike: number; }) {
    index.dislike++;
  }

  deleteQuote(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete) {
        this.quote.splice(index, 1)
      }
    }
  }



  ngOnInit() {
  }


}