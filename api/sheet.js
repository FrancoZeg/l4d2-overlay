export default async function handler(req, res) {
  // Permitir peticiones desde cualquier origen (CORS)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=2, stale-while-revalidate=5');

  const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQJQy1OUVvPakT0LNbCQA0itVGZQhKT8t8wbKJq6gCBJ2K1y9lcoTSllpO1rQRW0eyiDxhW0GVsmdsa/pub?gid=0&single=true&output=csv';

  try {
    const response = await fetch(GOOGLE_SHEET_CSV_URL);
    if (!response.ok) throw new Error('No se pudo obtener la hoja de Google');

    const text = await response.text();
    const lineas = text.replace(/\r/g, '').split('\n');
    const datos = {};

    lineas.forEach(linea => {
      if (!linea.trim()) return;
      const partes = linea.split(',').map(p => p.trim().replace(/^"|"$/g, ''));

      // Maneja el formato con número de fila (ej: "1", "equipo1_nombre", "SURVIVORS")
      if (partes.length >= 3 && !isNaN(partes[0])) {
        const clave = partes[1].toLowerCase();
        const valor = partes[2];
        datos[clave] = valor;
      } else if (partes.length >= 2) {
        const clave = partes[0].toLowerCase();
        const valor = partes[1];
        datos[clave] = valor;
      }
    });

    // Retorna JSON limpio
    res.status(200).json({ success: true, data: datos });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}