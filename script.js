function authenticate() {
    var name = document.getElementById("name").value;
    var aadharNo = document.getElementById("aadharNo").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    // Simulate OTP generation and send it to the user (replace with actual logic)
    var otp = generateOTP();
    alert("OTP sent to registered mobile number: " + otp);
    // Store details in session storage for later use
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("aadharNo", aadharNo);
    sessionStorage.setItem("mobileNumber", mobileNumber);
    sessionStorage.setItem("generatedOTP", otp);
    document.getElementById("detailsForm").style.display = "none";
    document.getElementById("otpVerificationForm").style.display = "block";
}

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function verifyOTP() {
    var otp = document.getElementById("otp").value;
    var storedOTP = sessionStorage.getItem("generatedOTP");
    if (otp === storedOTP) {
        document.getElementById("otpVerificationForm").style.display = "none";
        document.getElementById("votingForm").style.display = "block";
    } else {
        alert("Error: Incorrect OTP. Please try again.");
    }
}

function castVote() {
    var aadharNo = sessionStorage.getItem("aadharNo");
    var hasVoted = localStorage.getItem(aadharNo);
    if (hasVoted) {
        alert("Error: You have already casted your vote.");
    } else {
        var candidate = document.getElementById("candidate").value;
        // Simulate vote casting (replace with actual logic)
        alert("Vote casted successfully!");
        localStorage.setItem(aadharNo, true);
        document.getElementById("votingForm").style.display = "none";
        document.getElementById("returnHome").style.display = "block";
    }
}

function returnToHome() {
    window.location.href = "index.html";
}
