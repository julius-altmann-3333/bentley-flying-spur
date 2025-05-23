const modal = document.getElementById('payment-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.modal-close');

const paymentForms = {
  visa: {
    title: "Visa Payment",
    html: `...`
  },
  mastercard: {
    title: "MasterCard Payment",
    html: `...`
  },
  amex: {
    title: "American Express Payment",
    html: `...`
  },
  paypal: {
    title: "Pay with PayPal",
    html: `...`
  },
  bitcoin: {
    title: "Bitcoin Payment",
    html: `...`
  }
};

document.querySelectorAll('.payment-icons img').forEach(icon => {
  icon.addEventListener('click', () => {
    const method = icon.getAttribute('data-method');
    const data = paymentForms[method];

    modalBody.innerHTML = `
      <h3 style="margin-top:0; color:#a78a59;">${data.title}</h3>
      ${data.html}
    `;
    modal.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});
