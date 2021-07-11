console.log('service worker work');

// 监听通知关闭
self.addEventListener('notificationclose', event => {
    const notification = event.notification;
    console.log('已关闭: ' + notification.title);
});

// 监听通知点击
self.addEventListener('notificationclick', event => {
    const notification = event.notification;
    notification.close();
    const data = notification.data || {};
    const tag = notification.tag;
    const action = event.action;
    switch (tag) {
        case 'openQqGroup':
            const idkey = data.idkey;
            event.waitUntil(
                self.clients.openWindow(
                    'https://shang.qq.com/wpa/qunwpa?idkey=' + idkey
                )
            );
            break;
        case 'epicFreeGames':
            const { urlSlug: slug } = data;
            event.waitUntil(
                self.clients.openWindow(
                    'https://www.epicgames.com/store/zh-CN/product/' + slug
                )
            );
            break;
        default:
            // 无 tag
            event.waitUntil(
                clients.matchAll({ type: 'window' }).then(clientList => {
                    clientList.forEach(client => {
                        if (client.url == '/' && 'focus' in client)
                            return client.focus();
                    });
                    if (clients.openWindow) return clients.openWindow('/');
                })
            );
            break;
    }
});

self.addEventListener('push', event => {
    if (!(self.Notification && self.Notification.permission === 'granted')) {
        return;
    }
    let data = {};
    if (event.data) {
        data = event.data.json();
    }
    const title = data.title || 'MIKUTOOLS';
    // 其实就是把 data 和 options 合并了
    const options = {
        body: '',
        icon: '/icon.png',
        ...data
    };

    event.waitUntil(self.registration.showNotification(title, options));
});
