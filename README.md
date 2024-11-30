# 🚢 Battleship Game

Un juego clásico de Batalla Naval implementado con React y Tailwind CSS.

## 🎮 Características

- Interfaz de usuario moderna y responsive
- Colocación intuitiva de barcos
- Modo de juego contra la computadora
- Animaciones suaves y feedback visual
- Diseño completamente adaptable

## 🛠️ Tecnologías Utilizadas

- React
- JavaScript
- Tailwind CSS
- Lucide React (para íconos)
- Vite (como bundler)

## 📋 Reglas del Juego

1. **Fase de Preparación:**
   - Coloca tus 5 barcos en el tablero
   - Usa el botón de rotación para cambiar la orientación
   - Los barcos disponibles son:
     - Carrier (5 casillas)
     - Battleship (4 casillas)
     - Cruiser (3 casillas)
     - Submarine (3 casillas)
     - Destroyer (2 casillas)

2. **Fase de Juego:**
   - Alterna turnos con la computadora
   - Haz clic en el tablero enemigo para atacar
   - 💥 Rojo indica un impacto
   - ⚪ Gris indica agua
   - Gana el primero en hundir todos los barcos enemigos

## 🚀 Cómo Ejecutar el Proyecto

1. Clona el repositorio:
```bash
git clone [URL-del-repositorio]
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre el navegador en `http://localhost:5173`

## 🏗️ Estructura del Proyecto

```
src/
├── components/         # Componentes React
│   ├── Board.jsx      # Tablero de juego
│   ├── Cell.jsx       # Celda individual
│   ├── GameStatus.jsx # Estado del juego
│   └── PlacementGuide.jsx # Guía de colocación
├── utils/             # Utilidades
│   └── boardUtils.js  # Lógica del tablero
└── App.jsx            # Componente principal
```

## 🎯 Próximas Mejoras

- [ ] Añadir efectos de sonido
- [ ] Implementar modo multijugador
- [ ] Añadir diferentes niveles de dificultad
- [ ] Guardar estadísticas del jugador
- [ ] Añadir animaciones de hundimiento

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.