const menuItems = document.querySelectorAll('.menu a[href^="#"]')

console.log(menuItems)

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    event.preventDefault(); // previne o padrão.
    const element = event.target;
    const id = element.getAttribute('href'); // pega o valor de href
    const to = document.querySelector(id).offsetTop;  // pega a quantidade de px do topo até o id

    window.scroll({
        top: to - 100,
        behavior: "smooth", // suave

    })

}