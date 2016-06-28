// electron
const electron = require('electron');
// Module to control application life.
const app = electron.app;
const Menu = electron.Menu;
const Tray = electron.Tray;
const ipcMain = electron.ipcMain;
const path = require('path')
const log = require('../../logger');

let trayMenu;

app.on('ready', () => {
  // tray menu icon
  const iconPath = path.join(__dirname, 'favicon.ico')
  trayMenu = new Tray(iconPath);
  const contextMenu = Menu.buildFromTemplate([{
    label: 'Sound machine',
    enabled: false
  }, {
    label: 'Settings',
    click: function() {
      log.info("click on setting");
    }
  }, {
    label: 'Quit',
    click: function() {
      app.emit('window-all-closed');
    }
  }]);
  trayMenu.setToolTip('This is my application.');
  trayMenu.setContextMenu(contextMenu);
});

app.on('window-all-closed', function () {
  if (trayMenu) trayMenu.destroy()
})
