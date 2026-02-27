const contactForm = document.getElementById('contactForm');
const popup = document.getElementById('custom-popup');
const popupTitle = document.getElementById('popup-title');
const popupDesc = document.getElementById('popup-desc');
const popupIcon = document.getElementById('popup-icon');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const firstName = document.getElementById('fistname').value.trim();
        const lastName = document.getElementById('lastname').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!firstName || !lastName || !phone || !subject || !message) {
            showPopup("Gagal!", "Mohon lengkapi semua data formulir.", "❌");
        } else {
            showPopup("Berhasil!", "Pesan Anda telah terkirim. Terima kasih!", "✅");
            contactForm.reset();
        }
    });
}

function showPopup(title, desc, icon) {
    if (popup) {
        popupTitle.innerText = title;
        popupDesc.innerText = desc;
        popupIcon.innerText = icon;
        
        popup.classList.remove('hidden');
        popup.classList.add('flex');
    }
}

function closePopup() {
    if (popup) {
        
        popup.classList.add('hidden');
        popup.classList.remove('flex');
    }
}

window.onclick = function(event) {
    if (event.target == popup) {
        closePopup();
    }
}
