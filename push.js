var push = require('web-push');

var vapidKeys = {
    publicKey: 'BIOtk6FPLlCCQjTlKzmYL6j8M-WtNBc8GHieh5mlnjK-kvBIw3V7DPi__sEX0f1Ok8b1LN3sgGiZSdkF9T5rdmE',
    privateKey: 'ecNQ9LkMWLP3vpq9VwVyiWiDQ8j9hzzg3NyLK03oSeE'
  }
push.setVapidDetails('mailto:test@test.com', vapidKeys.publicKey, vapidKeys.privateKey);


let sub = {
}
push.sendNotification(sub, 'hello');
