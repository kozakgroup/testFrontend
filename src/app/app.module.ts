import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

import { BigItemComponent } from './components/big-item/big-item.component';
import { SmallItemComponent } from './components/small-item/small-item.component';

import { InvestBlockComponent } from './shared/item/invest-block/invest-block.component';
import { ButtonBlockComponent } from './shared/item/button-block/button-block.component';

import { MillionPipe } from './shared/million.pipe';

import { ItemsService} from './items.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    ContentComponent,
    BigItemComponent,
    SmallItemComponent,
    InvestBlockComponent,
    ButtonBlockComponent,
    MillionPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
