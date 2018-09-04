import { Injectable } from '@angular/core';
import { DB } from '../database';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  public dbo;

  constructor() { 

    DB.loadDatabase({},function(err){
      if(err){
        console.log('database err');
      }else{
        console.log('database loaded');
      }
    });

    this.dbo = DB;

  }
}
