import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesSoldesComponent } from './articles-soldes/articles-soldes.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NouveautesComponent } from './nouveautes/nouveautes.component';
import { TendancesComponent } from './tendances/tendances.component';
import { HomeComponent } from './home/home.component';
import { FemmesComponent } from './femmes/femmes.component';
import { HommesComponent } from './hommes/hommes.component';
import { EnfantsComponent } from './enfants/enfants.component';
import { AccessoiresComponent } from './accessoires/accessoires.component';
import { DetailsComponent } from './details/details.component';
import { PanierComponent } from './panier/panier.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AdminComponent } from './admin/admin.component';
import { AjoutproduitComponent } from './ajoutproduit/ajoutproduit.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'connexion',component:ConnexionComponent},  
  {path:'tendances', component:TendancesComponent},
  {path:'nouveautes', component:NouveautesComponent},
  {path:'articles-soldes', component:ArticlesSoldesComponent},
  { path: 'femmes', component: FemmesComponent },
  { path: 'hommes', component: HommesComponent },
  { path: 'enfants', component: EnfantsComponent },
  { path: 'accessoires', component: AccessoiresComponent },
  { path: 'details/:productName', component: DetailsComponent },
  { path: 'votre panier', component: PanierComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'assets/*', redirectTo: '' },
  { path: 'admin',component:AdminComponent},
  { path: 'ajoutproduit',component:AjoutproduitComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
