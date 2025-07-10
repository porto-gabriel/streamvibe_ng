import { Component } from '@angular/core';

@Component({
  selector: 'app-filmes',
  imports: [],
  templateUrl: './filmes.html',
  styleUrl: './filmes.css'
})
export class Filmes {
  filme1 = {
    nome:"Inseption",
    imagem: "/origem.png",
    sinopse: "Filme de um cara que sonha"
  }

  filme2 = {
    nome: "Oppenheimer",
    imagem: "/oppenheimer.jpg",
    sinopse: "Criador da bomba atômica"
  }

  filme3 = {
    nome: "Bingo",
    imagem: "oppenheimer.jpg",
    sinopse: "Filme sobre um ator mediano, que cria um programa televisivo "

  }
}
