const { app, BrowserWindow, Menu } = require('electron');

function criarJanela() {
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({
    width: 1200,
    height: 820,
    title: 'Controle de Comissões',
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true }
  });
  win.loadFile('index.html');
}

app.whenReady().then(criarJanela);
app.on('window-all-closed', () => app.quit());
