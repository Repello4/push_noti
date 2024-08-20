var push = require('web-push');

var vapidKeys = {
    publicKey: 'BIOtk6FPLlCCQjTlKzmYL6j8M-WtNBc8GHieh5mlnjK-kvBIw3V7DPi__sEX0f1Ok8b1LN3sgGiZSdkF9T5rdmE',
    privateKey: 'ecNQ9LkMWLP3vpq9VwVyiWiDQ8j9hzzg3NyLK03oSeE'
  }
push.setVapidDetails('mailto:test@test.com', vapidKeys.publicKey, vapidKeys.privateKey);


let sub = {
    "endpoint":"https://fcm.googleapis.com/fcm/send/cHavOaj1yLg:APA91bErGIkg-EIzxf3ndnd6CZVk1VRwFlMT8PsbUQi7HmYCzTgI8Qb8OHg_76mYluPr44Q-Oj_RdSI-Lr_4DtIF7bBumgOFrF60_fMnww1XvSuqQkzWUYw8Vld-uVPZdqEwcokEBZXy",
    "expirationTime":null,
    "keys":{
        "p256dh":"BEqvdwYAcycXObLbcZslzaeavE-HcdBjz0q2m_Pt_w9W8dQcE-cREWPxJhh3y2Gt2nrgf1VkTjEJomSmDc-zQ-A",
        "auth":"V_X8xLo6PdbtSXTejnthyg"
    }
}

push.sendNotification(sub, 'hello');
