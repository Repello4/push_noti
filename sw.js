self.addEventListener('push', (event) => {

    var options = {
        body: 'This is a test notification',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore', title: 'Explore'
            }
        ]

    };
    event.waitUntil(self.registration.showNotification('Hello World', options));
});
