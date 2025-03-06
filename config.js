// 🚨 AWS Integration - Starter File (No Secrets)
// Instructions: Add AWS credentials below to test GitHub Push Protection

const AWS_ACCESS_KEY_ID = ""; // TODO: Add AWS Key Here
const AWS_SECRET_ACCESS_KEY = ""; // TODO: Add AWS Secret Here

// 🔥 Function simulating an AWS S3 request
function listS3Buckets() {
    console.log("Listing S3 buckets with Access Key:", AWS_ACCESS_KEY_ID);
}

// Call function
listS3Buckets();
