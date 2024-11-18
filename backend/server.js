const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/tareasDB')
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error('Error al conectar a MongoDB', err));
const TareaSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  completada: Boolean,
  prioridad: String
});
const Tarea = mongoose.model('Tarea', TareaSchema);
app.get('/api/tareas', async (req, res) => {
  const tareas = await Tarea.find();
  res.json(tareas);
});
app.post('/api/tareas', async (req, res) => {
  const nuevaTarea = new Tarea(req.body);
  await nuevaTarea.save();
  res.json(nuevaTarea);
});
app.delete('/api/tareas/:id', async (req, res) => {
  await Tarea.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Tarea eliminada' });
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
