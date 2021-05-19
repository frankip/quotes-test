import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-detail/quote-detail.component';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';

import { StrikethroughDirective } from './strikethrough.directive';
import { VoteComponent } from './vote/vote.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    
    DateCountPipe,
    QuoteFormComponent,

    StrikethroughDirective,
    VoteComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QuoteDetailsComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
