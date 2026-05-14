require("dotenv").config();
const Razorpay = require("razorpay");
console.log("working");
const razorpayInstance = new Razorpay({
  key_id: "rzp_test_SpK8zl78AdsEAr",
  key_secret: "drOrqmryzFtTJc6Y8uW3DXEe",
});

module.exports = razorpayInstance;
