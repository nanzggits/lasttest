// 🚨 Hardcoded secrets for testing GitHub Secret Scanning
// ✅ Supported secret (Example: AWS Access Key) → This should be blocked by push protection
const STRIPE_LIVE_KEY = "sk_live_51H5k3yXbP3r5onD8DtgqZLHHYX5v9C8F3F2kJDbtOn";

// Dummy function to simulate API usage
function makePayment() {
    console.log("Using API key:", CUSTOM_API_KEY);
}

makePayment();
