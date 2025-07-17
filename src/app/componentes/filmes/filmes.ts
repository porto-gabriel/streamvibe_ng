import { Component } from '@angular/core';

@Component({
  selector: 'app-filmes',
  imports: [],
  templateUrl: './filmes.html',
  styleUrl: './filmes.css'
})
export class Filmes {

  alternarFavorito() {
    this.filme1.favorito = !this.filme1.favorito  // Alterna o estado atual do "favorito". Ele recebe o valor contrario do atual vide a !
  }

  // Dados mockados 
  filme1 = {
    nome:"Inseption",
    imagem: "/origem.png",
    sinopse: "Filme de um cara que sonha",
    genero: "drama",
    favorito: false
  }

  // filme2 = {
  //   nome: "Oppenheimer",
  //   imagem: "/oppenheimer.jpg",
  //   sinopse: "Criador da bomba atômica"
  // }

  // filme3 = {
  //   nome: "Bingo",
  //   imagem: "oppenheimer.jpg",
  //   sinopse: "Filme sobre um ator mediano, que cria um programa televisivo "

  }
//}
