const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const Razorpay = require("razorpay");

console.log("KEY:", process.env.RAZORPAY_KEY_ID); // should print your key, not undefined

const rz = new Razorpay({
  key_id: "rzp_test_SpK8zl78AdsEAr",
  key_secret: "drOrqmryzFtTJc6Y8uW3DXEe",
});

rz.orders
  .create({
    amount: 50000,
    currency: "INR",
    receipt: "test_receipt_1",
  })
  .then((order) => console.log("✅ Success:", order.id))
  .catch((err) => console.error("❌ Failed:", err));
