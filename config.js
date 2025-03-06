// 🚨 AWS Integration - Starter File (No Secrets)
// Instructions: Add AWS credentials below to test GitHub Push Protection

const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLP";
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKTY";

// 🔥 Function simulating an AWS S3 request
function listS3Buckets() {
    console.log("Listing S3 buckets with Access Key:", AWS_ACCESS_KEY_ID);
}

// Call function
listS3Buckets();
