{
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
}
