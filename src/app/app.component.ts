import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareasComponent } from './components/tareas/tareas.component';
import { NgIf } from '@angular/common';
import {Tarea} from './models/tarea.model'
import { TareaService } from './services/tarea.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TareasComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  tareas: Tarea[] = [];
  title = 'todo-angular';
  constructor(private tareaService: TareaService) {}
  ngOnInit(): void {
    this.obtenerTareas();
  }

  obtenerTareas(): void {
    this.tareaService.obtenerTareas().subscribe((tareas) => {
      this.tareas = tareas; // Asignar las tareas recibidas
    });
  }
}
