const NOTIFICATION_TITLE = 'Title'
const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.'
const CLICK_MESSAGE = 'Notification clicked!'

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
    .onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE
  

function showNotification() {
    console.log(111);
    new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
    .onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE
    var notice = new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY });
    notice.onclick= () => document.getElementById("output").innerText = CLICK_MESSAGE
    notice.show();
}
window.onload = () => {
document.getElementById("notification").onclick = () => { 
    alert(11111111)
    showNotification();
}
}
