'use strict';

const electron = require('electron');
// Module to control application life.
const app = electron.app;
const Menu = electron.Menu;
const Tray = electron.Tray;
const ipcMain = electron.ipcMain;

const fs = require('fs') // To read the directory listing

ipcMain.on('close-main-window', function (event, args) {
  app.quit();
});

ipcMain.on('listDir', function(event, arg) {
  console.log("listDir", arg);
  fs.readdir(arg[0], function(err, files) {
    event.sender.send('listDirSuccess', files)
  })
})

let menuTemplate = require('./menuTemplate');
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

// Allows for live-reload while developing the app
require('electron-reload')(__dirname + '/dist');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow, menu, trayMenu;

let createWindow = () => {
    // tray menu icon
  trayMenu = new Tray(__dirname + '/dist/favicon.ico')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'radio'},
    {label: 'Item2', type: 'radio'},
    {label: 'Item3', type: 'radio', checked: true},
    {label: 'Item4', type: 'radio'}
  ]);
  trayMenu.setToolTip('This is my application.')
  trayMenu.setContextMenu(contextMenu)
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + '/shield-large.png',
    frame: true});

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/dist/index.html');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    toggleFileTasks(false);
    toggleNewWindowTask(true);

    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  if (!menu) setMenu();

  toggleFileTasks(true);
  toggleNewWindowTask(false);
}

let toggleFileTasks = isEnabled => {
  // The 'File' menu should only be available if there is an open window
  menu.items
    .find(item => item.label === 'File')
    .submenu.items
    .forEach(subItem => subItem.enabled = isEnabled);
}

let toggleNewWindowTask = isEnabled => {
  // The 'New Window' task in the main menu and dock menu
  // should only be available if there are no open windows
  let newWindowMenu = menu.items
    .find(item => item.label === 'Window')
    .submenu.items
    .find(subItem => subItem.label === 'New');

  newWindowMenu.enabled = isEnabled;
}

let setMenu = () => {
  // Set custom click handlers for menu tasks
  let fileMenu = menuTemplate
    .find(item => item.label === 'File');

  fileMenu.submenu
    .find(item => item.label === 'Open')
    .click = () => mainWindow.webContents.send('open-file')

  fileMenu.submenu
    .find(item => item.label === 'Save As...')
    .click = () => mainWindow.webContents.send('save-file')

  menuTemplate
    .find(item => item.label === 'Window')
    .submenu
    .find(subItem => subItem.label === 'New')
    .click = () => createWindow()

  menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow();
});
