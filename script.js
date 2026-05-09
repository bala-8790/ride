function sendWhatsAppBooking() {

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const pickup = document.getElementById('pickup').value;
    const drop = document.getElementById('drop').value;

    const message =
`New Auto Booking

Name: ${name}
Phone: ${phone}
Pickup: ${pickup}
Drop: ${drop}`;

    // Replace with your dad's WhatsApp number
    const whatsappNumber = "918106301162";

    const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
}
