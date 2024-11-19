export interface Tarea {
    _id?: string;           // ID único generado por MongoDB (opcional al crear)
    titulo: string;         // Título de la tarea
    descripcion: string;    // Descripción breve de la tarea
    completada: boolean;    // Estado de la tarea (completada o no)
    prioridad: string;      // Prioridad de la tarea ('alta', 'media', 'baja')
  }