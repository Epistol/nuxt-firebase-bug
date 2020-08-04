
importScripts(
  'https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyDjx2_u0kZwqQrDfaW_LwKBgFlzI6FsVdo","authDomain":"triplan-io.firebaseapp.com","databaseURL":"https:\u002F\u002Ftriplan-io.firebaseio.com","projectId":"triplan-io","storageBucket":"triplan-io.appspot.com","messagingSenderId":"893952973599","appId":"1:893952973599:web:c8543264963b7eaa74ae2a","measurementId":"G-E9HGZ2Y0EG"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

// Setup event listeners for actions provided in the config:
self.addEventListener('notificationclick', function(e) {
  const actions = [{"action":"\u003CrandomName\u003E","url":"\u003CrandomUrl\u003E"}]
  const action = actions.find(x => x.id === e.action.action)
  const notification = e.notification

  if (!action) return

  if (action.url) {
    clients.openWindow(action.url)
    notification.close()
  }
})
