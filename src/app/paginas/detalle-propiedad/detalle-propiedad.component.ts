import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PropiedadesService } from '../../services/propiedad.service';
import { Propiedad } from '../../models/propiedad';

@Component({
  selector: 'app-detalle-propiedad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-propiedad.component.html',
  styleUrls: ['./detalle-propiedad.component.css']
})
export class DetallePropiedadComponent implements OnInit {
  propiedad?: Propiedad;
  propiedadesService = inject(PropiedadesService);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.propiedadesService.getPropiedades().subscribe(data => {
      this.propiedad = data.find(p => p.id === id);
    });
  }
}
