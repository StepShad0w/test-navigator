export const openDeviceVPNSettings = () => {
    const ua = navigator.userAgent;

    if (/android/i.test(ua)) {
        // Open Android VPN settings
        window.location.href =
            'intent:#Intent;action=android.settings.VPN_SETTINGS;end';
    } else if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) {
        // Inform user about iOS limitation
        alert('Please go to Settings > General > VPN on your iOS device to configure VPN settings.');
    } else if (/Windows Phone/i.test(ua)) {
        // Open Windows Phone settings
        window.location.href = 'ms-settings:network-vpn';
    } else if (/Windows/i.test(ua)) {
        // Open Windows VPN settings
        window.location.href = 'ms-settings:network-vpn';
    } else if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(ua)) {
        // Open macOS Network settings, closest to VPN
        window.location.href =
            'x-apple.systempreferences:com.apple.preference.network';
    } else if (/Linux/i.test(ua)) {
        // For Linux, provide instructions
        alert('Please open the VPN settings manually in your system.');
    } else {
        alert('Settings cannot be opened on this device.');
    }
};
