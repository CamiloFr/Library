const { app, BrowserWindow } = require('electron');
const ipc = require('electron').ipcMain;

// Mantén una referencia global del objeto window, si no lo haces, la ventana 
// se cerrará automáticamente cuando el objeto JavaScript sea eliminado por el recolector de basura.
let win

function createWindow () {
  // Crea la ventana del navegador.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('public/index.html')

  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

function secondwindow(data){
  console.log(data);
  winpdf = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  winpdf.webContents.openDevTools();
  winpdf.loadFile('src/assets/window/html/window.html');
  winpdf.webContents.on('did-finish-load', () => {
    let dir = path.join(__dirname, data);
    data.push(dir);
    win2.webContents.send('finish', data);
  })
}

ipc.on('another', (e, m) => {
  alert(m);
  console.log(m);
  secondwindow(m);
});