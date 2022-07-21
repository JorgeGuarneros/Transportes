import { Component, OnInit } from '@angular/core';
import {Transporte, TransporteService} from '../../SERVICES/transporte.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  transporte: Transporte={
    id_transporte: '',
    transporte: '',
    placas: ''
  };

  constructor(private transporteservice:TransporteService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    this.transporteservice.addTransporte(this.transporte).subscribe();
    this.router.navigate(['/inicio']);
  }

}
