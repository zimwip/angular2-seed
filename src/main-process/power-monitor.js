// electron
const electron = require('electron');
// Module to control application life.
const app = electron.app;
const log = require('../../logger')
var mainWindows;

app.on('browser-window-created', function (event, win) {
  mainWindows = win;
})

app.on('ready', () => {
// adding power monitor function
electron.powerMonitor.on('suspend', function() {
  log.info('The system is going to sleep');
  if (mainWindow) mainWindow.webContents.send('sleep');
});
electron.powerMonitor.on('resume', function() {
  log.info('The system is going to resume');
  if (mainWindow) mainWindow.webContents.send('resume');
});
electron.powerMonitor.on('on-ac', function() {
  log.info('The system is going to ac mode');
  if (mainWindow) mainWindow.webContents.send('on-ac');
});
electron.powerMonitor.on('on-battery', function() {
  log.info('The system is going to battery mode');
  if (mainWindow) mainWindow.webContents.send('on-battery');
});
});
