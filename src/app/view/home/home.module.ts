import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { BenfitsComponent } from './benfits/benfits.component';
import { FeaturesComponent } from './features/features.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    BenfitsComponent,
    FeaturesComponent,
    SubscribeComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    HomeRoutingModule,

  ]
})
export class HomeModule { }
