import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {DetailFilterPipe} from './filter.pipe'
import {EnvironmentService} from './Environment.service'


@NgModule({
  imports: [BrowserModule,FormsModule ,HttpModule ],
  declarations: [AppComponent,DetailFilterPipe ],
  bootstrap: [AppComponent ]
})
export class AppModule { }
