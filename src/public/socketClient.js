const socketClient = io()

let productsList = document.querySelector('#productsList');

socketClient.on('productsList', (products) => {
    console.log(products)
    productsList.innerHTML = ''

    products.forEach((product) => {
        let productDiv = document.createElement('div')
        productDiv.innerHTML = `
        <h2>${product.title}</h2>
        <h3>${product.description}</h3>
        <p>Precio: $${product.price}</p>
        `
        productsList.appendChild(productDiv)
    })
})
