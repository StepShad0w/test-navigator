export const openDeviceVPNSettings = () => {
    const ua = navigator.userAgent;
  
    if (/android/i.test(ua)) {
      // Відкрити налаштування VPN на Android
      window.location.href = 'intent:#Intent;action=android.settings.VPN_SETTINGS;end';
    } else if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) {
      // Відкрити загальні налаштування на iOS
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
    } else if (/Linux/i.test(ua)) {
      // Для Linux, надати інструкції
      window.location.href = 'intent:#Intent;action=android.settings.VPN_SETTINGS;end';
      alert('Будь ласка, відкрийте налаштування VPN вручну у вашій системі.');
    } else {
      alert('Налаштування не можуть бути відкриті на цьому пристрої.');
    }
  };