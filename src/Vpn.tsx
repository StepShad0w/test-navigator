import { isAndroid, isIOS } from 'react-device-detect';
export const openDeviceVPNSettings = () => {
    const ua = navigator.userAgent;
    // const isAndroid = /android/i.test(ua);

    if (isAndroid) {
        if (isAndroid) {
            // Перевірка на Android і відкриття налаштувань VPN через intent
            window.location.href = 'intent:#Intent;action=android.settings.VPN_SETTINGS;end';
        } else if (isIOS) {
            // Відкриття загальних налаштувань iOS
            window.location.href = 'app-settings:';
            alert('Будь ласка, перейдіть у Налаштування > Загальні > VPN, щоб налаштувати VPN.');
        }
    } else if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) {
        // Відкрити загальні налаштування iOS (не існує прямої URL-схеми для VPN)
        window.location.href = 'app-settings:';
        alert('Будь ласка, перейдіть у Налаштування > Загальні > VPN, щоб налаштувати VPN.');
    } else if (/Windows Phone/i.test(ua)) {
        // Відкрити налаштування VPN на Windows Phone
        window.location.href = 'ms-settings:network-vpn';
    } else if (/Windows/i.test(ua)) {
        // Відкрити налаштування VPN на Windows
        window.location.href = 'ms-settings:network-vpn';
    } else if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(ua)) {
        // Відкрити налаштування мережі на macOS, найближче до VPN
        window.location.href = 'x-apple.systempreferences:com.apple.preference.network';
    } else if (/Linux/i.test(ua) && /arm/i.test(ua)) {
        // Для Linux з ARM архітектурою надати інструкції
        alert('Будь ласка, відкрийте налаштування VPN вручну у вашій системі.');
    } else {
        alert('Налаштування не можуть бути відкриті на цьому пристрої');
    }
};
