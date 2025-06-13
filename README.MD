list-app-ForIT
Aplicación full‑stack de gestión de tareas (todo‑list) desarrollada con las tecnologías más modernas:
Backend: Node.js + Express + TypeScript
Base de datos en memoria: Array de tareas con CRUD completo (GET, POST, PUT, DELETE)
Variables de entorno: dotenv
Frontend: React + Vite + TypeScript + Tailwind CSS 4.1.10
Gestión de datos: Axios + React Query v5
Validación de formularios: React Hook Form + Zod
📂 Estructura del repositorio

list-app-ForIT/ 
├── backend/ 
│ ├── src/ 
│ │ ├── index.ts 
│ │ └── routes/ 
│ │   └── tasks.ts 
│ ├── .env.example
│ ├── .gitignore 
│ ├── package.json 
│ ├── tsconfig.json 
│ └── tsconfig.node.json 
└── frontend/ 
  ├── src/ 
  │ ├── api/ 
  │ │ ├── axiosClient.ts 
  │ │ └── tasksApi.ts 
  │ ├── components/ 
    │ │ ├── TaskForm.tsx 
    │ │ ├── TaskItem.tsx 
    │ │ └── TaskList.tsx 
    │ ├── hooks/ 
    │ │ └── useTasks.ts 
    │ ├── schemas/ 
    │ │ └── taskSchema.ts 
    │ ├── types.ts 
    │ ├── App.tsx 
    │ ├── index.css 
    │ └── main.tsx 
├── tailwind.config.cjs 
├── vite.config.ts 
├── package.json 
└── tsconfig.app.json 

🚀 Configuración y ejecución
Backend
Entra en la carpeta backend:
cd backend 
Instala dependencias:
npm install 
Crea un archivo de variables de entorno backend/.env copiando el ejemplo:
cp .env.example .env 
Ajusta PORT si lo deseas.
Arranca en modo desarrollo (auto‑reload con ts-node-dev):
npm run dev 
Para producción:
npm run build npm start 
Endpoints del API
RutaMétodoDescripciónGET /api/tasksGETLista todas las tareasPOST /api/tasksPOSTCrea una tarea (body: { title, description })PUT /api/tasks/:idPUTActualiza campos de una tareaDELETE /api/tasks/:idDELETEElimina una tareaGET /api/helloGETRuta de prueba 
Frontend
Entra en la carpeta frontend:
cd frontend 
Instala dependencias:
npm install 
Variables de entorno (opcional):
# Crea un .env para cambiar la URL del API touch .env echo "VITE_API_BASE_URL=http://localhost:4000" > .env 
Arranca el servidor de desarrollo:
npm run dev 
Abre en el navegador http://localhost:5173/
🎁 Bonus opcionales
Validación avanzada con React Hook Form + Zod
Estructura de carpetas y nomenclatura basada en convenciones de monorepo
Tailwind CSS v4.1.10 sin PostCSS ni Autoprefixer manual
React Query v5 para caché y sincronización automática
📝 Licencia
MIT © Dante Nicolás Caballero
