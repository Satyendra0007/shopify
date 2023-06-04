
let index = 0
let list
const arangeOnPage = (list) => {
    document.getElementById('productList').innerHTML = " "
    for (element of list) {
        document.getElementById('productList').innerHTML +=
            `
        <div class="card mb-3 itemhover" role="button" style="max-width: 800px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0,   0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); " onclick = getIndex('${element.id}') >
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${element.thumbnail}" class="img-fluid rounded-start h-100" alt="image">
                </div>
                <div class="col-md-5">
                    <div class="card-body mx-2">
                        <h5 class="card-title">${element.title}</h5>
                        <span class="badge text-bg-success">${element.rating} &#9734;</span>
                        <p class="card-text "> Brand ${element.brand}</p>
                        <p class="card-text">${element.description}.</p> 
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card-body mx-2">
                        <p class="card-text fs-5"> Rs : ${element.price}</p>
                        <p class="card-text text-success"> In Stock : ${element.stock}</p>
                        
                    </div>
                </div>
            </div>
        </div>
        
    `
    }
}


fetch('https://dummyjson.com/products/')
    .then((response) => {
        return response.json()
    }).then((data) => {
        try {
            list = data.products
            arangeOnPage(list)
        } catch (error) {

        }
    })


let getIndex = (id) => {
    index = id - 1
    document.getElementById('items').hidden = true;
    document.getElementById('showdetail').hidden = false;
    showDetails();
}

const showDetails = () => {
    let div = document.getElementById("info")
    div.children[0].innerHTML = `${list[index].title}`
    div.children[1].innerHTML = `${list[index].rating} &#9734;`
    div.children[2].innerHTML = `Rs : ${list[index].price}`
    div.children[3].innerHTML = `In Stock : ${list[index].stock}`
    div.children[4].innerHTML = `Brand : ${list[index].brand}`
    div.children[5].innerHTML = `${list[index].description}`
    document.getElementById('img01').src = `${list[index].thumbnail}`
    document.getElementById('img1').src = `${list[index].images[0]}`
    document.getElementById('img2').src = `${list[index].images[1]}`
    document.getElementById('img3').src = `${list[index].images[2]}`

}

const restore = () => {
    document.getElementById('items').hidden = false;
    document.getElementById('showdetail').hidden = true;
}

