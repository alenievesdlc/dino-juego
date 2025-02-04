# 🦖 Dino Jump - Juego en JavaScript

Dino Jump es un juego simple inspirado en el clásico juego del dinosaurio de Google Chrome. Fue desarrollado en HTML, CSS y JavaScript, con un servidor en Node.js y Express para almacenar puntuaciones.

## 🚀 Características
- Jugabilidad sencilla: presiona **ESPACIO** para hacer saltar al dinosaurio.
- Obstáculos que aparecen aleatoriamente.
- Registro de puntuaciones a través de una API.
- Pruebas de carga realizadas con **Apache JMeter**.

## 🛠️ Instalación y Ejecución
### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/alenievesdlc/dino-juego.git
cd dino-juego
```

### 2️⃣ Instalar dependencias
Asegúrate de tener **Node.js** instalado y ejecuta:
```bash
npm install
```

### 3️⃣ Ejecutar el servidor
```bash
node server.js
```
El servidor estará corriendo en `http://localhost:3001`.

### 4️⃣ Jugar el juego
Abre el archivo `index.html` en tu navegador y comienza a jugar. 🚀

## 📡 API - Guardado de Puntuaciones
El servidor permite registrar y obtener puntuaciones.

### 🔹 Guardar puntuación (POST)
```bash
POST /save-score
Content-Type: application/json
{
    "score": 100
}
```

### 🔹 Obtener puntuaciones (GET)
```bash
GET /scores
```

## 📊 Pruebas de Carga con JMeter
Se utilizó **Apache JMeter** para probar la resistencia del servidor bajo carga, simulando múltiples usuarios enviando puntuaciones.

### 🔹 Configuración en JMeter
1. Agregar **Concurrency Thread Group**.
2. Configurar:
   - `Target Concurrency`: 10-50 usuarios.
   - `Ramp-Up Time`: 5 segundos.
   - `Hold Target Rate`: 30 segundos.
3. Agregar un `HTTP Request` apuntando a `/save-score`.
4. Analizar los resultados en `View Results Tree`.

## 📜 Licencia
Este proyecto es de código abierto y puedes modificarlo libremente.

---
🔗 **Repositorio en GitHub:** [https://github.com/alenievesdlc/dino-juego](https://github.com/alenievesdlc/dino-juego)


