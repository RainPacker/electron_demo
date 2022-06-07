const dialog = require('electron').dialog;
const menus = {
    label: "设置",
    accelerator: 'CmdOrCtrl+D',
    submenu: [
        {  label: "设置报告路径",
        click: () => { 
            console.log('click');
            dialog.showMessageBox({
                message: 'ok',
                type: 'info',
                title: '设置报告路径'
             })
            }
        },
        {
        label: 'Toggle Developer Tools',
        accelerator: (function() {
          if (process.platform == 'darwin')
            return 'Alt+Command+I';
          else
            return 'Ctrl+Shift+I';
        })(),
            click: function (item, focusedWindow) {
            console.log(item, focusedWindow);
          if (focusedWindow)
            focusedWindow.toggleDevTools();
        }
      },
      
    ]
}

module.exports = menus