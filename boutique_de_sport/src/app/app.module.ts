import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMenuModule } from 'primeng/tabmenu';
import { CarouselModule as NgxBootstrapCarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselModule as PrimeNGCarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProductService } from './service/productservice';
import { TendancesComponent } from './tendances/tendances.component';
import { NouveautesComponent } from './nouveautes/nouveautes.component';
import { ArticlesSoldesComponent } from './articles-soldes/articles-soldes.component';
import {HttpClientModule}from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DataViewModule } from 'primeng/dataview';
import { FemmesComponent } from './femmes/femmes.component';
import { HommesComponent } from './hommes/hommes.component';
import { EnfantsComponent } from './enfants/enfants.component';
import { AccessoiresComponent } from './accessoires/accessoires.component';
import { DetailsComponent } from './details/details.component';
import { RatingModule } from 'primeng/rating';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { CartService } from './service/cartservice';
import { PanierComponent } from './panier/panier.component';
import { TableModule } from 'primeng/table';
import { AuthService } from './service/authservice';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { InscriptionComponent } from './inscription/inscription.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './service/adminguard';
import { AjoutproduitComponent } from './ajoutproduit/ajoutproduit.component'; 
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    TendancesComponent,
    NouveautesComponent,
    ArticlesSoldesComponent,
    HomeComponent,
    FemmesComponent,
    HommesComponent,
    EnfantsComponent,
    AccessoiresComponent,
    DetailsComponent,
    PanierComponent,
    InscriptionComponent,
    AdminComponent,
    AjoutproduitComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxBootstrapCarouselModule,
    PrimeNGCarouselModule,
    TabMenuModule,
    TagModule,
    ButtonModule,
    HttpClientModule,
    CommonModule,
    DataViewModule,
    RatingModule,
    MultiSelectModule,
    InputNumberModule,
    ReactiveFormsModule,
    BadgeModule,
    TableModule,
    MessagesModule,
    MessageModule,
    DialogModule
  ],
  providers: [ProductService,CartService,AuthService,AdminGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
