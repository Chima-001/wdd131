const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const currentYear = new Date().getFullYear();
const selectProduct = document.querySelector('#productName');
const countReviewSpan = document.querySelector('#countReview');
const form = document.querySelector('form');

document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

if (selectProduct) {
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        selectProduct.appendChild(option);
    });
}

if (countReviewSpan) {
    let countReview = Number(localStorage.getItem('countReview')) || 0;
    countReview += 1;
    localStorage.setItem('countReview', countReview);
    countReviewSpan.textContent = countReview;
}


document.querySelectorAll('input[name="rating"]').forEach(input => {

    input.addEventListener('invalid', () => {
        input.setCustomValidity('Please select a star rating before submitting.')
    });

    input.addEventListener('change', () => {
        input.setCustomValidity('');
    });
});
