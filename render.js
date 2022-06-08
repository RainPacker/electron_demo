const NOTIFICATION_TITLE = 'Title'
const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.'
const CLICK_MESSAGE = 'Notification clicked!'
// const  remote   = require("electron");
// console.log(remote);
// console.warn(remote);
const { shell} = require("electron");

  

function showNotification() {
    console.log(111);
    
new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY,icon:"logo.png" })
.onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE
    // .onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE
    // var notice = new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY });
    // notice.onclick= () => document.getElementById("output").innerText = CLICK_MESSAGE
    // notice.show();
}
window.onload = () => {
document.getElementById("notification").onclick = () => { 
    alert(11111111)
    showNotification();
    }
    document.getElementById("fileOpen").onclick = () => {
        shell.openPath("read -9.xlsx").then(res => { 
            console.log(res);
        })
    }
}


