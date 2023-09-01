import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      Script
      <div>
        <p>PetMates Customer Support Handbook

Welcome to PetMates, where we care for your furry friends! As part of our commitment to providing excellent customer support, we have compiled answers to the most common queries we receive via email. If you can't find the information you need here, don't hesitate to contact us at customersupport@petmates.com.
</p>
        
<h3>1. Order Status:</h3>
<p>
• Q: "Where is my order?"
• A: You can track your order status by logging into your PetMates account and navigating to the "Order History" section. There, you'll find the latest updates on your order's shipping and delivery progress.
  </p>
<h3>2. Shipping and Delivery:</h3>
<p>
• Q: "When will my order be delivered?"
• A: Delivery times vary depending on your location and the shipping method selected during checkout. You can find estimated delivery times on the product page or during checkout. Once your order is shipped, you'll receive a confirmation email with tracking details.
• Q: "Do you offer international shipping?"
• A: Yes, we offer international shipping. Shipping fees and delivery times will vary depending on the destination country.
• Q: "Can I change my shipping address?"
• A: If your order hasn't been shipped yet, you can update your shipping address by contacting our customer support team at least 24 hours before the scheduled shipment date.
  </p>
<h3>3. Returns and Refunds:</h3>
<p>
• Q: "How can I return an item?"
• A: To initiate a return, log into your PetMates account, go to "Order History," and click on "Request Return" next to the relevant order. Follow the instructions provided to complete the return process.
• Q: "What is your refund policy?"
• A: We offer a 30-day money-back guarantee on most products. If you're not satisfied with your purchase, you can initiate a return within 30 days of receiving your order. Please note that certain items, such as personalized products or perishable goods, may not be eligible for return.
  </p>
<h3>4. Product Information:</h3>
<p>
• Q: "Can you provide more details about a specific product?"
• A: Of course! For detailed product information, including specifications, size, and care instructions, refer to the product page on our website. If you need further assistance, reach out to our customer support team.
  </p>
<h3>5. Account Management:</h3>
<p>
• Q: "How do I reset my password?"
• A: To reset your password, click on the "Forgot Password" link on the login page. You'll receive an email with instructions on how to reset your password securely.
• Q: "How can I update my account information?"
• A: Log into your PetMates account and go to the "Account Settings" section. There, you can update your personal details, shipping address, and communication preferences.
  </p>
<h3>6. Pet Health and Safety:</h3>
<p>
• Q: "Do you offer veterinarian advice?"
• A: While we're passionate about pets, we're not licensed veterinarians. If you have concerns about your pet's health, please consult a qualified veterinarian for professional advice.
  </p>
<h3>7. Promotions and Discounts:</h3>
<p>
• Q: "How can I redeem a coupon code?"
• A: During checkout, you'll find a field to enter your coupon code. Simply type or paste the code and click "Apply" to see the discount applied to your order total.
  </p>
<h3>8. Customer Support Hours:</h3>
<p>
• Q: "What are your customer support hours?"
• A: Our customer support team is available from Monday to Friday, 9:00 AM to 6:00 PM (EST). We do our best to respond to all inquiries within 24 hours.
Thank you for choosing PetMates for all your pet's needs! We hope this handbook helps you find quick answers to your queries. If you need further assistance, please don't hesitate to reach out to our friendly customer support team. Happy pet parenting!</p></p>
    </div>
  )
}

export default App
