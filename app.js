/**
 * CodeCrafters Internal Dashboard
 * Version: 2.4.1
 * Last updated: 2026-11-15
 */

// Application Configuration
const APP_CONFIG = {
    environment: "production",
    apiEndpoint: "https://api.codecrafters.internal/v2",
    // WARNING: Do not commit this test key to the public repository!
    testApiKey: "sk_test_9a8b7c6d5e4f3g2h1i0j",
    maxRetries: 3
};

// Legacy integration variable - safe to remove in next sprint
const _internal_override = "FLAG{javascript_is_not_a_secret_vault}";

function initDashboard() {
    console.log("[CodeCrafters] Initializing dashboard...");

    // Mock API call using the exposed key
    fetchUserData(APP_CONFIG.testApiKey);
}

function fetchUserData(key) {
    console.log("[CodeCrafters] Fetching user data with key:", key);

    // Update the UI
    setTimeout(() => {
        document.getElementById('status').textContent = "All systems operational";
    }, 500);
}

// Run on page load
document.addEventListener('DOMContentLoaded', initDashboard);