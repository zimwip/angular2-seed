// electron
const electron = require('electron');
// Module to control application life.
const app = electron.app;
const log = require('../../logger')
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
// adding power monitor function
electron.powerMonitor.on('suspend', function() {
  log.info('The system is going to sleep');
  let mainWindows = BrowserWindow.getAllWindows();
  for (var i = 0; i < mainWindows.length; i++)
  {
    mainWindows[i].webContents.send('sleep');
  }
});
electron.powerMonitor.on('resume', function() {
  log.info('The system is going to resume');
  let mainWindows = BrowserWindow.getAllWindows();
  for (var i = 0; i < mainWindows.length; i++)
  {
    mainWindows[i].webContents.send('resume');
  }
});
electron.powerMonitor.on('on-ac', function() {
  log.info('The system is going to ac mode');
  let mainWindows = BrowserWindow.getAllWindows();
  for (var i = 0; i < mainWindows.length; i++)
  {
    mainWindows[i].webContents.send('on-ac');
  }
});
electron.powerMonitor.on('on-battery', function() {
  log.info('The system is going to battery mode');
  let mainWindows = BrowserWindow.getAllWindows();
  for (var i = 0; i < mainWindows.length; i++)
  {
    mainWindows[i].webContents.send('on-battery');
  }
});
});
