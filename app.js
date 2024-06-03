const $img = document.querySelector('#img');
const $text = document.querySelector('#text');
const $cards = document.querySelector('#cards');

const praducts = (data) =>{
    data.forEach(element => {
        $text.innerHTML +=
        `
        <b>${element.name}</b>
        <span>${element.body}</span>
        <a href="mailto:${element.email}">${element.email}</a>
        `
        $cards.appendChild(node);
    });
}

fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => praducts(data))