import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// Servir la carpeta 'public' como contenido estático (HTML, CSS, JS del frontend)
app.use(express.static('public'));
// Base de datos temporal en memoria
let todos = [
  {
    id: 1,
    title: 'Aprender Node.js y Express',
    completed: false,
    createdAt: new Date().toISOString()
  }
];
let nextId = 2;

// 1. OBTENER TODAS LAS TAREAS (GET /todos)
app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

// 2. OBTENER UNA TAREA POR SU ID (GET /todos/:id)
app.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const todo = todos.find(t => t.id === id);

  if (!todo) {
    // 404: Not Found si no existe una tarea con ese ID
    return res.status(404).json({ error: `No se encontró la tarea con ID ${id}` });
  }

  res.status(200).json(todo);
});

// 3. CREAR UNA NUEVA TAREA (POST /todos)
app.post('/todos', (req, res) => {
  const { title } = req.body;

  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'El campo "title" es obligatorio.' });
  }

  const newTodo = {
    id: nextId++,
    title: title.trim(),
    completed: false,
    createdAt: new Date().toISOString()
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// 4. ACTUALIZAR UNA TAREA (PUT /todos/:id)
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const todoIndex = todos.findIndex(t => t.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({ error: `No se encontró la tarea con ID ${id}` });
  }

  const { title, completed } = req.body;

  // Actualizamos el título si viene en la petición
  if (title !== undefined) {
    if (typeof title !== 'string' || title.trim() === '') {
      return res.status(400).json({ error: 'El título no puede estar vacío.' });
    }
    todos[todoIndex].title = title.trim();
  }

  // Actualizamos el estado completado si viene en la petición
  if (completed !== undefined) {
    if (typeof completed !== 'boolean') {
      return res.status(400).json({ error: 'El campo "completed" debe ser true o false.' });
    }
    todos[todoIndex].completed = completed;
  }

  res.status(200).json(todos[todoIndex]);
});

// 5. ELIMINAR UNA TAREA (DELETE /todos/:id)
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const todoIndex = todos.findIndex(t => t.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({ error: `No se encontró la tarea con ID ${id}` });
  }

  // Eliminamos la tarea del array
  const deletedTodo = todos.splice(todoIndex, 1)[0];

  res.status(200).json({
    message: 'Tarea eliminada exitosamente',
    deleted: deletedTodo
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});