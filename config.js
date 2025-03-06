// 🚨 Hardcoded secret for testing GitHub Secret Scanning & Push Protection
const EC_PRIVATE_KEY = `-----BEGIN EC PRIVATE KEY-----
MHcCAQEEINrApDsCWYzh1vtWS+ISvCjVe0/f5FeY6eaCjsn8CfKboAoGCCqGSM49
AwEHoUQDQgAETp8Zi5QzHrZPv+sLGviW7lBLX1sTWkis8KWQ8IcB0R6CIsedfcud
gIkVsyjCYRkqNqnvL1EYwRuEOxBnveVonw==
-----END EC PRIVATE KEY-----`;

// 🔐 Function attempting to use the key
function encryptData() {
    console.log("Encrypting data with EC Private Key:", EC_PRIVATE_KEY);
}

// 🔑 Dummy function to simulate API key usage
function makePayment() {
    console.log("Using API key:", AUTH_TOKEN);
}

// Call functions
encryptData();
makePayment();
