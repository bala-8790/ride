function calculateFare() {
    const distanceInput = document.getElementById('distance');
    const fareResult = document.getElementById('fare-result');
    
    const distance = parseFloat(distanceInput.value);
    const baseFare = 30;
    const perKmRate = 15;

    if (distance > 0) {
        const total = baseFare + (distance * perKmRate);
        fareResult.innerText = `₹ ${total.toFixed(2)}`;
    } else {
        fareResult.innerText = `₹ 0.00`;
    }
}

function sendWhatsAppBooking() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const pickup = document.getElementById('pickup').value;
    const drop = document.getElementById('drop').value;

    if (!name || !phone || !pickup || !drop) {
        alert("Please fill in all details before booking.");
        return;
    }

    const message = 
`*Lakshmi Srinivasa Auto Service*
-------------------------------
*New Ride Request*
*Name:* ${name}
*Phone:* ${phone}
*Pickup:* ${pickup}
*Drop:* ${drop}`;

    const whatsappNumber = "8106301162";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
}
