// 🚨 Hardcoded secrets for testing GitHub Secret Scanning
// ✅ Supported secret (Example: AWS Access Key) → This should be blocked by push protection
const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

// Dummy function to simulate API usage
function makePayment() {
    console.log("Using API key:", CUSTOM_API_KEY);
}

makePayment();
