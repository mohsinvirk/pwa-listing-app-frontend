importScripts("https://www.gstatic.com/firebasejs/5.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.2.0/firebase-messaging.js");

var config = {
  apiKey: "AIzaSyB5NABy3RXBOf14ZJpngxx7CfhZF3EEvKE",
  authDomain: "olxapp-1e846.firebaseapp.com",
  databaseURL: "https://olxapp-1e846.firebaseio.com",
  projectId: "olxapp-1e846",
  storageBucket: "",
  messagingSenderId: "552385731622"
};
firebase.initializeApp(config);

let messaging = firebase.messaging();

// Listner for Push Notification
self.addEventListener("push", function(event) {
  console.log("Received a push message", event);

  var notification = event.data.json().notification;
  console.log(notification);
  var title = notification.title || "Yay a message.";
  var body = notification.body || "We have received a push message.";
  var icon = "/images/icon-192x192.png";
  // var tag = 'simple-push-demo-notification-tag';

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon
      // tag: tag
    })
  );
});

// on Notification Click do whatever you want...
self.addEventListener("notificationclick", function(event) {
  console.log("On notification click: ", event.notification);
  // Android doesn’t close the notification when you click on it
  // See: http://crbug.com/463146
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(
    clients
      .matchAll({
        type: "window"
      })
      .then(function(clientList) {
        for (var i = 0; i < clientList.length; i++) {
          var client = clientList[i];
          if (client.url === "/" && "focus" in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow("/");
        }
      })
  );
});
