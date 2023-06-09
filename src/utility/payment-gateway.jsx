import logo from "../components/navbar/logo.png";
import { toast } from "react-toastify";

const paymentGateway = async (amount) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  const options = {
    key: "rzp_test_OQzZny6NbR8gus",
    amount: amount,
    currency: "USD",
    name: "Elegance Book Store",
    description: "Payment for your order",
    image: logo,
    handler: function (response) {
      toast.success("Order placed");
    },
    prefill: {
      name: "Toufiq Choudhari",
      email: "toufiq.choudhari@example.com",
      contact: "9359550208",
    },
    theme: {
      color: "#3d53f6",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

const loadScript = async (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export { paymentGateway };
