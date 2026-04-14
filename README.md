# 🎬 Series Explorer

Aplicación web de cine sirve para ver información sobre películas, series y actores usando la API de The Movie Database (TMDB).


# 📋 Requisitos

Antes de ejecutar esto necesitas tener instalado:

- Node.js  
- npm  

Puedes comprobarlo con:

```bash
node -v
npm -v
```
# 📦 Instalación

Clonas el proyecto e instalas dependencias:
```bash
npm install
```
# ▶️ Ejecutar el proyecto

Para arrancarlo en local:
```bash
npm run dev
```
Y ya te saldrá la URL en consola para abrirlo en el navegador.

# 🔑 Variables de entorno

Para que funcione la API de TMDB necesitas una key.

Pasos:

Crearte una cuenta en TMDB
Sacar tu API Key
Crear un archivo .env en la raíz del proyecto

Y dentro poner:
```bash
VITE_TMDB_API_KEY=tu_api_key_aqui
```

# 🔐 Login falso (JSON)

Para el login he simulado el inicio de sesión usando un archivo database.json.

Ahí están los usuarios guardados y se hace una comprobación simple para validar el login.


# 📁 Estructura del proyecto

Más o menos lo tengo organizado así:
```
src/
│
├── componentes/   → componentes reutilizables
│
├── pages/         → páginas principales (index, login)
│   ├── index/
│   └── login/
│
├── services/      → llamadas a la API
│
├── view/          → vistas principales de la app
│   ├── actores/
│   ├── info/
│   ├── peliculas/
│   ├── principal/
│   └── serie/
│
├── App.jsx
├── main.jsx
└── App.css
```
# 🧭 Cómo está organizado

- pages → pantallas principales como login o inicio
- view → donde están las vistas de cada sección (pelis, series, actores…)
- services → aquí están las llamadas a la API
- componentes → cosas reutilizables como tarjetas, etc.
- App.jsx → donde se maneja todo


# 🎥 Qué se puede hacer en la app
- Ver películas
- Ver series
- Ver actores
- Entrar a detalles de cada contenido
- Navegar por categorías

Todo eso se alimenta directamente de TMDB.

# 🌍 API

Uso la API de The Movie Database (TMDB) para sacar toda la info:

- Películas
- Series
- Actores
- Popularidad
- Series en emisión

Link:
https://developer.themoviedb.org/docs/getting-started
