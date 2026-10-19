# 🎮 Overlay Competitivo L4D2 - Guía para el Streamer

¡Bienvenido a la transmisión! Este overlay está sincronizado en tiempo real con el panel de control de la organización, por lo que los puntajes, nombres de equipos y estados del mapa se actualizarán automáticamente sin que tengas que modificar nada en OBS.

---

## ⚙️ Configuración en OBS Studio

Para agregar el overlay a tu escena de transmisión, sigue estos pasos:

1. Abre **OBS Studio** y sitúate en tu escena principal de juego.
2. En el panel de **Fuentes**, haz clic en el botón **`+`** y selecciona **Navegador** (*Browser*).
3. Asignale un nombre (por ejemplo: `Overlay Torneo`) y haz clic en **Aceptar**.
4. Configura los parámetros en la ventana de propiedades:
   * **URL:** Pega el enlace web provisto por la organización (`https://tu-proyecto.vercel.app`).
   * **Ancho (*Width*):** `1920`
   * **Alto (*Height*):** `1080`
   * *(Opcional)* Marca la casilla **"Actualizar el navegador cuando la escena se vuelva activa"**.
5. Haz clic en **Aceptar**.

---

## 📐 Ubicación de Capas
* Asegúrate de arrastrar la fuente del overlay en el panel de fuentes para que quede **ubicada por encima** de la captura del juego (`Captura de juego`). De esta forma, las barras superiores se superpondrán correctamente de manera transparente.

---

## 🔄 Funcionamiento en Vivo
* El overlay consulta los datos de forma autónoma. Durante la competencia, la organización se encargará de actualizar los marcadores y el progreso del mapa de manera remota. ¡Disfruta la transmisión!
