/*
 * CREATED BY
 *
 * Jesus 'Pokoi' Villar
 * © pokoidev 2019 (pokoidev.com)
 *
 * Creative Commons License:
 * Attribution 4.0 International (CC BY 4.0)
 *
 */
 
//Guardamos una referencia a los objetos
//app, para manejar los eventos de la aplicación
//BrowserWindow, para crear y manejar ventanas
const { app, BrowserWindow } = require('electron')

// Referencia global del objeto window, para evitar que la ventana
// se cierre automáticamente cuando el objeto JavaScript sea eliminado por el recolector de basura.
let win


function createWindow () {
  // Crea la ventana del navegador.
  win = new BrowserWindow({
    width    : 800,
    height   : 600,
    webPreferences:{nodeIntegration : true},
    minHeight: 650,
    minWidth : 600,
    frame    : false
  })

  // y carga el archivo codeeditor.html de la aplicación.
  win.loadURL(`file://${__dirname}/codeeditor.html`);

  // Abre las herramientas de desarrollo (DevTools).
  win.webContents.openDevTools();

  // Emitido cuando la ventana es cerrada.
  win.on('closed', () => {
    // Elimina la referencia al objeto window
    win = null
  })
}

// Este método será llamado cuando Electron haya terminado
// la inicialización y la app esté lista.
// Algunas APIs pueden usarse sólo después de que este evento ocurra.
app.on('ready', createWindow)

// Cuando todas las ventanas se cierran nos interesa cerrar la app
app.on('window-all-closed', () => {
  // En todos aquellos SO distintos de macOS (Windows y Linux)
  // ya que en macOS las aplicaciones permanecen abiertas
  // hasta que el usuario salga explicitamente con Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Para poder invocar funciones desde el proceso de renderización
// tenemos que exportarlas
exports.openEsnetWindow = (path) => {
  auxWin = new BrowserWindow({
    width    : 800,
    height   : 600,
    webPreferences:{nodeIntegration : true},
    minHeight: 650,
    minWidth : 600
  });
  auxWin.loadURL("https://esnet.esne.es/ESNE_A01/usr_login.aspx");
}

exports.openGithubWindow = () => {
  auxWin = new BrowserWindow({
    width    : 800,
    height   : 600,
    webPreferences:{nodeIntegration : true},
    minHeight: 650,
    minWidth : 600
  });
  auxWin.loadURL("https://github.com/");
}

exports.openWindow = (path) => {
  auxWin = new BrowserWindow({
    width    : 800,
    height   : 600,
    webPreferences:{nodeIntegration : true},
    minHeight: 650,
    minWidth : 600
  });
  auxWin.loadURL(path);
}
