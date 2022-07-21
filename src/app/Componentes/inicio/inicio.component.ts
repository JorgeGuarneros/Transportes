import { Component, OnInit } from '@angular/core';
import {Transporte, TransporteService} from '../../SERVICES/transporte.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //variables
 ListarTransporte: Transporte[]=[];

  constructor(private transporteservice:TransporteService, private router:Router) { }

  ngOnInit(): void {
    this.listarTransporte();
  }


  listarTransporte(){
    this.transporteservice.getTransporte().subscribe(
      res=>{
        console.log(res)
        this.ListarTransporte=<any>res;
      },
      err => console.log(err)
    );
  }

  eliminar(id:string){
    this.transporteservice.deleteTransporte(id).subscribe(
      res=>{
        console.log('transporte eliminado');
        this.listarTransporte();
      },    
      err=>console.log(err)
      );
  }

  modificar(id:string){
    this.router.navigate(['/edit/'+id]);
  }

}
