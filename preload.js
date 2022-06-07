const remote = require('electron').remote;
const remote2 = require('electron')
console.log(remote2);
// New way.
// var app = require('electron').remote.app
// var app = require('electron').remote.require('app')
// var BrowserWindow = require('electron').remote.BrowserWindow
// console.log("app",app);
console.log(global);
 console.log('remote', remote);
      const Menu = remote.Menu;
      const MenuItem = remote.MenuItem;

      var menu = new Menu();
      menu.append(new MenuItem({ label: 'MenuItem1', click: function () { console.log('item 1 clicked'); } }));
      menu.append(new MenuItem({ type: 'separator' }));
      menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }));

      window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        menu.popup(remote.getCurrentWindow());
      }, false);

  
// In renderer process (web page).
// const ipcRenderer = require('electron').ipcRenderer;
// console.log(ipcRenderer.sendSync('synchronous-message', 'ping')); // prints "pong"

// ipcRenderer.on('asynchronous-reply', function(event, arg) {
//   console.log('reply',arg); // prints "pong"
// });
// ipcRenderer.send('asynchronous-message', 'ping');
