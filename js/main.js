if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost') window.location.href = window.location.href.replace('http:', 'https:');

setTimeout(() => {
    if (document.querySelector('.index_page.hide')) {
        const flag = confirm('检测到页面加载时间过长，是否清除缓存刷新页面？');
        if (flag) {
            window.location.reload();
            window.caches.keys().then(cacheNames => {
                cacheNames.forEach(cacheName => {
                    caches.delete(cacheName);
                });
            });
        }
    }
}, 4000);

if (localStorage.getItem('miku_vuex') === '') {
    localStorage.removeItem('miku_vuex');
    localStorage.removeItem('mikudb');
}

const ua = navigator.userAgent.toLowerCase();
function isQQAPP() {
    const isIosQQ = /(iPhone|iPad|iPod|iOS)/i.test(ua) && /\sQQ/i.test(ua);
    const isAndroidQQ =
        /(Android)/i.test(ua) &&
        /MQQBrowser/i.test(ua) &&
        /\sQQ/i.test(ua.split('MQQBrowser'));
    return isIosQQ || isAndroidQQ;
}

const isWeixinBrowser = /micromessenger/i.test(ua);
if (isQQAPP() || isWeixinBrowser) {
    alert('注意：部分功能无法在 QQ 或微信浏览器内使用，请使用外部浏览器打开本工具');
}

if (document.documentElement.getAttribute('data-darkreader-mode')) {
    alert('注意：检测到您启用了 Dark Reader 插件，请在插件中忽略本站，否则可能无法正常使用本工具');
}
