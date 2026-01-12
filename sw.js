// sw.js - The "Brain" that runs in the background
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// This listens for commands from your index.html
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
        const options = {
            body: event.data.body,
            icon: 'https://cdn-icons-png.flaticon.com/512/628/628283.png',
            vibrate: [200, 100, 200],
            badge: 'https://cdn-icons-png.flaticon.com/512/628/628283.png'
        };
        
        event.waitUntil(
            self.registration.showNotification(event.data.title, options)
        );
    }
});