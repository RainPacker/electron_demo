const { app, BrowserWindow, Menu,Notification,ipcMain, dialog } = require('electron');
const path = require("path")
const menuItem = require('./menu');
console.log(menuItem);

const NOTIFICATION_TITLE = 'APP started'
const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.'
const CLICK_MESSAGE = 'Notification clicked!'

function showNotification(msg) {
    console.log(111);
    var notice = new Notification({ title: NOTIFICATION_TITLE, body: msg });
    notice.onclick= () => document.getElementById("output").innerText = CLICK_MESSAGE
    notice.show();
}




const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, './preload.js')
    }
  })

  win.loadFile('index.html')
}
setApplicationMenus = () => { 
  const menus = [];
  menus.push(menuItem)
  var menu = Menu.buildFromTemplate(menus);
  
  Menu.setApplicationMenu(menu);
}
app.whenReady().then(() => {
    createWindow()
     app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
     })
  showNotification("应用启动成功");
  setApplicationMenus();
  ipcMain.on("asynchronous-message", function (event, args) {
    console.log(arg);  // prints "ping"
    // 异步消息
    event.sender.send('asynchronous-reply', 'pong');
  })
  // 弹窗
console.log(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }))
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

