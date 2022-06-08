const { app, BrowserWindow, Menu, Notification, ipcMain, dialog } = require('electron');
const path = require("path")
const menuItem = require('./menu');
console.log(menuItem);
console.info(app.getPath("appData"));

const NOTIFICATION_TITLE = 'APP started'
const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.'
const CLICK_MESSAGE = 'Notification clicked!'

function showNotification(msg) {
    console.log(111);
    new Notification({ title: NOTIFICATION_TITLE, body: msg });
    // var notice = new Notification({ title: NOTIFICATION_TITLE, body: msg });
    // notice.onclick= () => document.getElementById("output").innerText = CLICK_MESSAGE
    // notice.show();
}




let createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.once("ready-to-show", () => { 
    win.show();
  })
  require('@electron/remote/main').initialize()
  require('@electron/remote/main').enable(win.webContents)
  win.loadFile('index.html')
}
setApplicationMenus = () => { 
  const menus = [];
  menus.push(menuItem)
  var menu = Menu.buildFromTemplate(menus);
  
  Menu.setApplicationMenu(menu);
}
// app.on("ready", () => {
  
// })
initIpcMain = () => { 
   ipcMain.on("asynchronous-message", function (event, args) {
    console.log('getMessage',args);  // prints "ping"
    // 异步消息
    event.sender.send('asynchronous-reply', 'pong');
  })
  ipcMain.on('synchronous-message', function(event, arg) {
  console.log("同步消息",arg);  // prints "ping"
  event.returnValue = 'pong';
});
}
app.whenReady().then(() => {
  setApplicationMenus();
  initIpcMain()
    createWindow()
     app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
     })
  showNotification("应用启动成功");


  // 弹窗
// console.log(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }))
})

app.on('window-all-closed', () => {
  win = null;
  if (process.platform !== 'darwin') app.quit()
})
app.on('closed', () => {
   win = null;
})

