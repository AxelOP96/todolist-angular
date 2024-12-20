import { Component, OnInit } from '@angular/core';
import { TareaService} from '../../services/tarea.service';
import { RouterOutlet } from '@angular/router';
import { Tarea } from '../../models/tarea.model';
import { FormsModule } from '@angular/forms'; // Para NgModel
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent implements OnInit{
  tareas: Tarea[] = [];
  nuevaTarea: Tarea = { titulo: '', descripcion: '', completada: false, prioridad: '' };

  constructor(private tareaService: TareaService) {}

  ngOnInit(): void {
    this.obtenerTareas();
  }

  obtenerTareas(): void {
    this.tareaService.obtenerTareas().subscribe((tareas) => (this.tareas = tareas));
  }
  agregarTarea(): void {
    this.tareaService.crearTarea(this.nuevaTarea).subscribe(() => {
      this.obtenerTareas();
      this.nuevaTarea = { titulo: '', descripcion: '', completada: false, prioridad: '' };
    });
  }

  eliminarTarea(id: string): void {
    this.tareaService.eliminarTarea(id).subscribe(() => this.obtenerTareas());
  }
}
