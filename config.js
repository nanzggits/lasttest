// 🚨 Hardcoded secrets for testing GitHub Secret Scanning & Push Protection
const STRIPE_LIVE_KEY = "sk_live_51L3g1tXbP3r5onD8DtgqZLHHYX5v9C8F3F2kJDbtOn";

// Import required module
const https = require("https");

// Function to make a test API request using the secret
function makePayment() {
    const options = {
        hostname: "api.stripe.com",
        path: "/v1/charges",
        method: "GET",
        headers: {
            "Authorization": `Bearer ${STRIPE_LIVE_KEY}`
        }
    };

    const req = https.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
    });

    req.on("error", (e) => {
        console.error(`Problem with request: ${e.message}`);
    });

    req.end();
}

// Call function to trigger API request
makePayment();
