import { Component, OnInit } from '@angular/core';
import { ModalidadeService } from '../../services/modalidade.service';
import { Modalidade } from '../../entities/modalidade';


@Component({
  selector: 'app-modalidade',
  templateUrl: './modalidade.component.html',
  styleUrls: ['./modalidade.component.scss']
})
export class ModalidadeComponent implements OnInit {

  modalidades: Modalidade[];
  md: Modalidade = {
    descricao: ""
  };


  constructor(private mdService: ModalidadeService) { }

  ngOnInit() {

    this.mdService.load();
    this.showAll();

  }

  private create(modalidade: Modalidade):void{
    this.mdService.insert(modalidade);
  }

  private update(modalidade: Modalidade): void{

    this.mdService.update(modalidade);
  }

  edit(modalidade: Modalidade):void{
    this.md = modalidade;
  }

  save(modalidade:Modalidade){
    var moda = this.mdService.find(modalidade);
    console.log("Aimberê o viado")
    if(!moda){
      this.create(modalidade);
      console.log('tamos aqui')
    }else{
      this.update(modalidade);
      console.log("eitcha");
    }
    console.log("terminou essa disgraça");
    console.log(this.md);
    this.md = new Modalidade();
  }

  delete(modalidade:Modalidade):void{
    console.log("Como vem pra cá?");
    if(confirm("Você tem certeza que deseja deletar?")){
      this.mdService.remove(modalidade);
    }
  }


  showAll(){
    this.mdService.all()
      .subscribe(modalidades => this.modalidades = modalidades);
      
  }
}
