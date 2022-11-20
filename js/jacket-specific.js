// Jacket specific page

const queryString = document.location.search;
console.log(queryString);

const queryParams = new URLSearchParams(queryString);
console.log(queryParams);

const productName = queryParams.get("productName");
console.log(productName);

const productGender = queryParams.get("gender");
console.log(productGender);

const productId = queryParams.get("id");
console.log(productId);

const urlSpecificProduct = `https://tronrudsveiseverksted.no/rainy-days/wp-json/wc/store/products/${productId}`;
const urlSpecificProductImages = `https://tronrudsveiseverksted.no/rainy-days/wp-json/wc/store/products/${productId}`;
const jacketsCont = document.querySelector(".jacket-specific-display");

const urlAllProducts = `https://tronrudsveiseverksted.no/rainy-days/wp-json/wc/store/products`;
const alsoSeenJacketCont = document.querySelector(".jacket-specific-also-seen");

console.log(urlSpecificProduct);

const jacketTitleCont = document.querySelector(".jacket-specific-title");
const priceCont = document.querySelector(".price-jacket-specific");
const stockAndPriceCont = document.querySelector(".price-section-jacket-specific");
const inStockCont = document.querySelector(".stock-jacket-specific");

const introNavCont = document.querySelector(".main-intro__orientation");

async function productCall() {
    try {
        const response = await fetch(urlSpecificProduct);
        const data = await response.json();
        const products = data;
        console.log(products);

        let jacketId = "";
        if (products.id) {
            jacketId = products.id;
        } else {
            jacketId = "";
        }
        console.log(jacketId);

        let jacketTitle = "";
        if (products.name) {
            jacketTitle = products.name;
        } else {
            jacketTitle = "";
        }
        console.log(jacketTitle);

        let price = "";
        if (products.prices.price) {
            price = products.prices.price;
        } else {
            price = "";
        }

        let currency = "";
        if (products.prices.currency_prefix) {
            currency = products.prices.currency_prefix;
        } else {
            currency = "";
        }

        let stock = "";
        if (products.is_in_stock === true) {
            stock = products.is_in_stock;
        } else {
            stock = false;
        }

        jacketTitleCont.innerHTML = jacketTitle;

        if (stock === true) {
            stockAndPriceCont.innerHTML =   `<div class="price-jacket-specific">${currency}${price}</div>
                                                <img src="images/green-dot-stor.svg" alt="In stock" class="green-dot-jacket-specific" />
                                            <div class="stock-jacket-specific">In stock</div>`
        } else {
            stockAndPriceCont.innerHTML =   `div class="price-jacket-specific">${jacketTitle}</div>
                                                <img src="images/red-dot.jpg" alt="Out of stock" class="red-dot-jacket-specific" />
                                            <div class="stock-jacket-specific">Out of stock</div>`
        }

        let genderCategory = "";
        if (products.categories[0].name) {
            genderCategory = products.categories[0].name;
        } else {
            genderCategory = "Unknown category.";
        }

        introNavCont.innerHTML = `You are here: <a href="index.html" class="rainy-days-nav" title="Home">Rainy Days</a> -> <a href="${genderCategory}.html" class="rainy-days-nav" title="${genderCategory}">${genderCategory}</a> -> <a href="jacket-specific.html?productName=${jacketTitle}&id=${jacketId}" title="${jacketTitle}" class="rainy-days-nav">${jacketTitle}</a>`;
    }
    catch (error) {
        console.log(error);
        jacketsCont.innerHTML = "An error occured while loading.";
    }
};

productCall();

async function productImageCall() {
    try {
        const response = await fetch(urlSpecificProduct);
        const data = await response.json();
        const products = data;

        const productImages = products.images;
        console.log(productImages);

        for (let i = 0; i < productImages.length; i++) {

            let productImageUrl = "";
            if (productImages[i].src) {
                productImageUrl = productImages[i].src;
            } else {
                productImageUrl = "Unknown or N/A.";
            }

            jacketsCont.innerHTML +=    `<div class="jacket-specific-box">
                                            <img src="${productImageUrl}" Alt="${productName}" class="jacket-specific-image" />
                                        </div>`
        };  
    }
    catch (error) {
        console.log(error);
        jacketsCont.innerHTML = "An error occured while loading.";
    }
};

productImageCall();

async function productAlsoSeenCall() {
    try {
        const response = await fetch(urlAllProducts);
        const data = await response.json();
        const products = data;
        console.log(products);

        for (let i = 0; i < products.length; i++) {
            
            let genderCategory = "";
            if (products[i].categories[0].name) {
                genderCategory = products[i].categories[0].name;
            } else {
                genderCategory = "Unknown category.";
            }

            let jacketName = "";
            if (products[i].name) {
                jacketName = products[i].name;
            } else {
                jacketName = "Unknown category.";
            }

            let jacketIdAlsoSeen = "";
            if (products[i].id) {
                jacketIdAlsoSeen = products[i].id;
            } else {
                jacketIdAlsoSeen = "Unknown category.";
            }

            let jacketImageUrl = "";
            if (products[i].images[0].src) {
                jacketImageUrl = products[i].images[0].src;
            } else {
                jacketImageUrl = "Unknown category.";
            }

            if (productGender === "Women") {
                if (products[i].categories[0].name === "Women" && products[i].id != productId) {
                    alsoSeenJacketCont.innerHTML +=     `<div class="jacket-specific-box">
                                                            <a href="jacket-specific.html?productName=${jacketName}&id=${jacketIdAlsoSeen}&gender=${genderCategory}" title="${jacketName}" >
                                                                <img src="${jacketImageUrl}" Alt="${jacketName}" class="jacket-specific-image" />
                                                            </a>
                                                        </div>`
                }
            }
 
            if (productGender === "Men") {
                if (products[i].categories[0].name === "Men" && products[i].id != productId) {
                    alsoSeenJacketCont.innerHTML +=     `<div class="jacket-specific-box">
                                                            <a href="jacket-specific.html?productName=${jacketName}&id=${jacketIdAlsoSeen}&gender=${genderCategory}" title="${jacketName}" >
                                                                <img src="${jacketImageUrl}" Alt="${jacketName}" class="jacket-specific-image" />
                                                            </a>
                                                        </div>`
                }
            }
        }
    }
    catch (error) {
        console.log(error);
    }
};

productAlsoSeenCall();