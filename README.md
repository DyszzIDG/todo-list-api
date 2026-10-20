# 📝 Todo List API & Web App

Una aplicación Fullstack para gestionar tareas (Todo List), desarrollada con **Node.js**, **Express** y **JavaScript Vanilla**.

Incluye una **API REST** con operaciones CRUD completas y una interfaz web interactiva conectada a los endpoints en tiempo real.

---

## 🌐 Demo en Vivo

Puedes probar la aplicación en funcionamiento directamente desde tu navegador:

👉 **[Ver Aplicación en Vivo (Render)](https://todo-list-api-me1s.onrender.com/)**

[![Deploy to Render](https://img.shields.io/badge/Render-Deployed%20Live-brightgreen?style=for-the-badge&logo=render)](https://todo-list-api-me1s.onrender.com/)

---

## 🚀 Características

- **API RESTful** con operaciones CRUD completas.
- **Validaciones** en las peticiones entrantes con códigos de estado HTTP semánticos (`200`, `201`, `400`, `404`).
- **Frontend integrado** servido estáticamente con HTML5, CSS3 moderno y Vanilla JS.
- **Preparado para la nube:** Configurado para leer `process.env.PORT` al desplegar.

---

## 🛠️ Tecnologías Utilizadas

- **Backend:** Node.js, Express.js (ES Modules).
- **Frontend:** HTML5, CSS3, JavaScript (Async/Await, Fetch API).
- **Herramientas:** Git, npm.

---

## 📁 Estructura del Proyecto

```text
todo-list-api/
├── public/
│   └── index.html       # Frontend (interfaz web y llamadas a la API)
├── src/
│   └── index.js         # Servidor Express, middlewares y rutas del backend
├── .gitignore           # Archivos ignorados por Git (ej. node_modules)
├── package.json         # Configuración del proyecto, scripts y dependencias
└── README.md            # Documentación del proyecto
```

---

## ⚙️ Instalación y Uso Local

### Prerrequisitos

Tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/dyszzidg/todo-list-api.git
   cd todo-list-api
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor en modo desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**
   Accede a [http://localhost:3000](http://localhost:3000)

---

## 📡 Documentación de la API (Endpoints)

| Método | Endpoint | Descripción | Cuerpo de la petición (JSON) | Código de éxito |
| :--- | :--- | :--- | :--- | :--- |
| `GET` | `/todos` | Obtener todas las tareas | Ninguno | `200 OK` |
| `GET` | `/todos/:id` | Obtener una tarea por su ID | Ninguno | `200 OK` |
| `POST` | `/todos` | Crear una nueva tarea | `{"title": "Texto de la tarea"}` | `201 Created` |
| `PUT` | `/todos/:id` | Modificar título o estado | `{"completed": true}` o `{"title": "Nuevo"}` | `200 OK` |
| `DELETE` | `/todos/:id` | Eliminar una tarea | Ninguno | `200 OK` |

---

## 👤 Autor

Desarrollado por **[dyszzidg](https://github.com/dyszzidg)**.
