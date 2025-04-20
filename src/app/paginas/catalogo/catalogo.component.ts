import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PropiedadesService } from '../../services/propiedad.service';
import { Propiedad } from '../../models/propiedad';


@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule],
 
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent  {
  propiedades: Propiedad[] = [];
  propiedadesService: PropiedadesService = inject(PropiedadesService)

  // constructor(private propiedadesService: PropiedadesService) {}

  ngOnInit(): void {
    this.propiedadesService.getPropiedades().subscribe(data => {
      this.propiedades = data;
      console.log(data)
    });
  }
}