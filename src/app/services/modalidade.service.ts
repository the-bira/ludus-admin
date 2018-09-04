import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Modalidade } from '../entities/modalidade';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalidadeService {

  private modalidade;

  constructor(private db: DatabaseService) { }

  load():void{
    this.modalidade = this.db.dbo.getCollection('modalidades');
    if(!this.modalidade)
      this.modalidade = this.db.dbo.addCollection('modalidades');

    console.log(this.modalidade);
  }

  all():Observable<Modalidade[]>{
    return of(this.modalidade.data);
  }

  insert(modalidade: Modalidade):void{
    this.modalidade.insert(modalidade);
  }

  update(modalidade:Modalidade):void{
    this.modalidade.update(modalidade);
  }

  find(modalidade:Modalidade):any{
    return this.modalidade.find(modalidade);
  }

  remove(modalidade:Modalidade):void{
    this.modalidade.remove(modalidade);
  }
}
