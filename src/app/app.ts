import { Component } from '@angular/core';
import { Header } from './componentes/header/header';
import { Footer } from './componentes/footer/footer';
import { Filmes } from './componentes/filmes/filmes';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Filmes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'streamvibe';
}
