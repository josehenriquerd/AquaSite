import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/Header.component';
import { FooterComponent } from './Footer/Footer.component';
import { FraseComponent } from './frase/frase.component';
import { BodyComponent } from './Body/Body.component';
import { ContatoComponent } from './Contato/Contato.component';
import { ServicosComponent } from './Servicos/Servicos.component';
import { SobreNosComponent } from './SobreNos/SobreNos.component';
import { LojaComponent } from './Loja/Loja.component';

@NgModule({
  declarations: [		
    AppComponent,
      HeaderComponent,
      FooterComponent,
      FraseComponent,
      BodyComponent,
      ContatoComponent,
      ServicosComponent,
      SobreNosComponent,
      LojaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
