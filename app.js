let generatedOTP = Math.floor(1000 + Math.random() * 9000);
document.getElementById("generatedOTP").innerText = generatedOTP;

document.getElementById("verifyBtn").addEventListener("click", function() {
    let userOTP = document.getElementById("otpInput").value;
    let message = document.getElementById("message");

    if (userOTP == generatedOTP) {
        message.innerText = "✅ OTP Verified";
        message.className = "valid";
    } else {
        message.innerText = "❌ Invalid OTP";
        message.className = "invalid";
    }
});

document.getElementById("resendBtn").addEventListener("click", function() { 
    generatedOTP = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("generatedOTP").innerText = generatedOTP;
    document.getElementById("message").innerText = "🔄 New OTP Generated!";
    document.getElementById("message").className = ""; 
    // This line is use to reset the text color of the last msg 
});
