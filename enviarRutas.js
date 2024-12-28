import { create } from 'venom-bot';
import { fileURLToPath } from 'url';
import path from 'path';

create({
    session: 'session-name', // Nombre de la sesión
    headless: false, // Mostrar el navegador
    useChrome: true, // Usar Chrome instalado localmente
  })
  .then((client) => {
    sendFile(client);
  })
  .catch((error) => {
    console.error('Error al inicializar Venom:', error);
  });

async function sendFile(client) {
  try {
    
    // Obtener la ruta del directorio actual
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    // Ruta al archivo
    const filePath = path.join(__dirname, 'rutasAEnviar', 'a.pdf');

    // Verificar la ruta
    console.log("Ruta del archivo:", filePath);

    // Número de WhatsApp al que deseas enviar el archivogit 
    const phoneNumber = '5491134510884'; // Formato internacional: país + área + número
    const formattedNumber = `${phoneNumber}@c.us`;

    // Enviar el archivo
    await client
      .sendFile(
        formattedNumber, // Número de destino
        filePath,        // Ruta al archivo
        'a.pdf',         // Nombre del archivo en WhatsApp
        'Aquí tienes el archivo PDF solicitado.' // Mensaje opcional
      )
      .then(() => {
        console.log('Archivo enviado con éxito');
      })
      .catch((error) => {
        console.error('Error al enviar el archivo:', error);
      });
  } catch (error) {
    console.error('Error general:', error);
  }
}
