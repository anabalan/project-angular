import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RepositoryComponent } from './repository/repository.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';


const routes: Routes = [
  // Adicionado as rotas dos componentes criados
  {path: '', component: IndexComponent},
  {path: 'repository', component: RepositoryComponent},
  {path: 'bitcoin', component: BitcoinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
