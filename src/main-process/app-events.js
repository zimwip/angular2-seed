// electron
const electron = require('electron');
// Module to control application life.
const app = electron.app;
const ipcMain = electron.ipcMain;
const log = require('../../logger');
const fs = require('fs') // To read the directory listing

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', () => {
  // Attach events
  ipcMain.on('listDir', function(event, arg) {
    log.info("listDir", arg);
    fs.readdir(arg[0], function(err, files) {
      event.sender.send('listDirSuccess', files)
    })
  });
});
