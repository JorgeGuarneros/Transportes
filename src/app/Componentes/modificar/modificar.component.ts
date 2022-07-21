import { Component, OnInit } from '@angular/core';
import {TransporteService, Transporte} from '../../SERVICES/transporte.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  transporte: Transporte={
    id_transporte: '',
    transporte: '',
    placas: ''
  };

  constructor(private transporteservice:TransporteService,
              private router:Router,
              private activeroute:ActivatedRoute){}

  ngOnInit(): void {
    const id_init = this.activeroute.snapshot.paramMap.get('id');
    console.log('id de entrada: '+id_init);

    if(id_init){
      this.transporteservice.getUnTransporte(id_init).subscribe(
        res=>{
          this.transporte=res[0];
          console.log(res[0]);
        },
        err=>console.log(err)
      );
    }
  }

  modificar(){
    this.transporteservice.editTransporte(this.transporte.id_transporte, this.transporte).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );
    this.router.navigate(['/inicio']);
  }
}

/*var id="1";
  this.activeroute.params.subscribe(params=>{
  id=params['id'];
  this.transporteservice.editTransporte(id).subscribe(result=>{
    this.prueba.findIndex(result)
  })
})*/
  /* var id="1";
  this.activeroute.params.subscribe(params=>{
    id=params['id'];
    this.transporteservice.editTransporte(id).subscribe()
  });*/
