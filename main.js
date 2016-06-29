'use strict';

const path = require('path')
const glob = require('glob')
// electron
const electron = require('electron');
// Module to control application life.
const app = electron.app;
const Menu = electron.Menu;
const ipcMain = electron.ipcMain;

const log = require('./logger')

// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

// Allows for live-reload while developing the app
require('electron-reload')(__dirname + '/dist');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// Require each JS file in the main-process dir
function loadMain () {
  var files = glob.sync(path.join(__dirname, 'src/main-process/**/*.js'));
  files.forEach(function (file) {
    log.info('load ',file);
    require(file);
  })
};

loadMain();

let createWindow = () => {

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + '/shield-large.png',
    frame: true
  });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/dist/index.html');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

};



let applicationClose = () => {
  log.info('Stopping application');
  let mainWindows = BrowserWindow.getAllWindows();
  for (var i = 0; i < mainWindows.length; i++)
  {
    mainWindows[i].webContents.send('application-stop');
  }
  app.quit();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', () => {
  log.info('Starting application');
  createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    applicationClose();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow();
});
