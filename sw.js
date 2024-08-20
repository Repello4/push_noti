self.addEventListener('push', (event) => {
    self.registration.sendNotification('Hello World', {
        body: 'This is a test notification',
        
    });
});
