// 🚨 Hardcoded secrets for testing GitHub Secret Scanning
// ✅ Supported secret (Example: AWS Access Key) → This should be blocked by push protection
const STRIPE_LIVE_KEY = "sk_live_51HXXXXXX6DtgqZXXLHHYX5XXXXX2nBUP9C8";


// Dummy function to simulate API usage
function makePayment() {
    console.log("Using API key:", CUSTOM_API_KEY);
}

makePayment();
