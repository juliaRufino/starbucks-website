function imgSlider(image) {
    document.querySelector('.starbucks').src = image;
}

function changeColorCircle(color) {
    const circle = document.querySelector('.circle');
    circle.style.backgroundColor = color;
}

function changeColorStarbucks(color) {
    const span = document.querySelector('span');
    span.style.color = color;
}

function changeColorButton(color) {
    const button = document.querySelector('.content .textBox a');
    button.style.backgroundColor = color;
}