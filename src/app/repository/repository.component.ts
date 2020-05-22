import { Component, OnInit } from '@angular/core';
// Importando HTTP Client
import { HttpClient } from '@angular/common/http';

// Fazendo a tipagem dos dados referentes ao repositório
type Repo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
};

// Array de usuários (Ana e Bea)
type UserRepos = {
  username: string;
  repos: Repo[];
}

// Criando uma interface. Dentro dela declarado mesmo modo que está no arquivo json
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})

export class RepositoryComponent implements OnInit {

  // Nomeando o objeto como um todo
  userRepos: UserRepos[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit()  {
    this.update();
  }

  // Chamando git
  update() {
    this.http.get<Repo[]>('https://api.github.com/users/anabalan/repos')
    .subscribe(data => {
      this.userRepos.push({
        // definindo o username
        username: "anabalan",
        repos: data
      })
    });

    this.http.get<Repo[]>('https://api.github.com/users/BeaCastro/repos')
    .subscribe(data => {
      this.userRepos.push({
        // definindo o username
        username: "BeaCastro",
        repos: data
      })
    });
  }

}

// type Props = {
//   nome: string;
//   sobrenome: string;
//   idade: number;
//   isSolteiro: boolean;
// }

// function pessoa({ nome, ...todooresto }) {
//   console.log(nome);
//   console.log(todooresto);
// }

// function leRepositorios(repositories) {
//   console.log(...repositories)
// }

// leRepositorios([{name: "repo1"}, {name: "repo2"}, {name: "repo3"}])



