// 🚨 Hardcoded secret for testing GitHub Secret Scanning

// ✅ Supported secret (Example: AWS Access Key) → This should be blocked by push protection
const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLP";

// Dummy function to simulate API usage
function makePayment() {
    console.log("Using API key:", AUTH_TOKEN);
}

makePayment();
