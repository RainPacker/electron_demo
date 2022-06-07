// const remote = require('electron').remote;

const remote = require('@electron/remote')
console.log(remote);
console.warn(remote);

// New way.
// var app = require('electron').remote.app
// var app = require('electron').remote.require('app')
// var BrowserWindow = require('electron').remote.BrowserWindow
// console.log("app",app);
// console.log(global);
//  console.log('remote', remote);
//       const Menu = remote.Menu;
//       const MenuItem = remote.MenuItem;

//       var menu = new Menu();
//       menu.append(new MenuItem({ label: 'MenuItem1', click: function () { console.log('item 1 clicked'); } }));
//       menu.append(new MenuItem({ type: 'separator' }));
// menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }));
//       const { remote } = require("electron");
// 通过remote模块调用主进程的menu模块
const Menu = remote.Menu;
 
//  配置右键菜单，按角色来配置
const contextTemplate = [
    { label: "复制", role: "copy" },
    { label: "粘贴", role: "paste" },
    { label: "剪切", role: "cut" }
];
var menuBuilder = Menu.buildFromTemplate(contextTemplate);


      window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        menuBuilder.popup(remote.getCurrentWindow());
      }, false);

  
// In renderer process (web page).
// const ipcRenderer = require('electron').ipcRenderer;
// console.log(ipcRenderer.sendSync('synchronous-message', 'ping')); // prints "pong"

// ipcRenderer.on('asynchronous-reply', function(event, arg) {
//   console.log('reply',arg); // prints "pong"
// });
// ipcRenderer.send('asynchronous-message', 'ping');
