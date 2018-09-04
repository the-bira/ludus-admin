import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalidadeComponent } from './components/modalidade/modalidade.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: "modalidade",
        component: ModalidadeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
