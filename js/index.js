// Home page

const urlAllProducts = `https://tronrudsveiseverksted.no/rainy-days/wp-json/wc/store/products`;
const messageCont = document.querySelector(".message");

const carouselCont = document.querySelector(".carousel-section");
const carouselProductDetailsCont = document.querySelector(".carousel-product-details-div");

async function productsCall() {
    try {
        const response = await fetch(urlAllProducts);
        const data = await response.json();
        const products = data;
        console.log(products);
        
        for (let i = 0; i < products.length; i++) {

            let productImageUrl = "";
            if (products[i].images[0].src) {
                productImageUrl = products[i].images[0].src;
            } else {
                productImageUrl = "Unknown or N/A.";
            }

            let price = "";
            if (products[i].prices.price) {
                price = products[i].prices.price;
            } else {
                price = "Unknown or N/A.";
            }

            let currency = "";
            if (products[i].prices.currency_prefix) {
                currency = products[i].prices.currency_prefix;
            } else {
                currency = "Unknown or N/A.";
            }

            let jacketId = "";
            if (products[i].id) {
                jacketId = products[i].id;
                console.log(jacketId);
            } else {
                jacketId = "Unknown or N/A.";
            }

            let jacketName = "";
            if (products[i].name) {
                jacketName = products[i].name;
            } else {
                jacketName = "Unknown or N/A.";
            }

            let genderCategory = "";
            if (products[i].categories[0].name) {
                genderCategory = products[i].categories[0].name;
            } else {
                genderCategory = "Unknown category.";
            }

            if (i === 0 || i === 4) {
                carouselCont.innerHTML += `  <div class="carousel-item non-highlighted-carousel-item-outer">
                                                <a href="jacket-specific.html?productName=${jacketName}&id=${jacketId}&gender=${genderCategory}" title="${jacketName}" >
                                                    <img src="${productImageUrl}" Alt="${jacketName}" class="carousel-jacket-image" />
                                                </a>
                                            </div>`
            }

            if (i === 1 || i === 3) {
                carouselCont.innerHTML += `  <div class="carousel-item non-highlighted-carousel-item-inner">
                                                <a href="jacket-specific.html?productName=${jacketName}&id=${jacketId}&gender=${genderCategory}" title="${jacketName}" >
                                                    <img src="${productImageUrl}" Alt="${jacketName}" class="carousel-jacket-image" />
                                                </a>
                                            </div>`
            }

            if (i === 2) {
                carouselCont.innerHTML += `  <div class="carousel-item highlighted-carousel-item">
                                                <a href="jacket-specific.html?productName=${jacketName}&id=${jacketId}&gender=${genderCategory}" title="${jacketName}" >
                                                    <img src="${productImageUrl}" Alt="${jacketName}" class="highlighted-carousel-jacket-image" />
                                                </a>
                                            </div>`
                carouselProductDetailsCont.innerHTML = ` <div class="carousel-in-stock-div">
                                                            <img src="images/Green dot.svg" />
                                                            <a>In stock</a>
                                                        </div>
                                                        <div class="carousel-review-div">
                                                            <img src="images/star-empty.svg" />
                                                            <img src="images/Star.svg" />
                                                            <img src="images/Star.svg" />
                                                            <img src="images/Star.svg" />
                                                            <img src="images/Star.svg" />
                                                        </div>
                                                        <div class="carousel-product-description-div">
                                                            <p>${jacketName}</p>
                                                            <p>${currency}${price}</p>
                                                        </div>
                                                        <div class="carousel-buy-button-div">
                                                            <a href="jacket-specific.html?productName=${jacketName}&id=${jacketId}&gender=${genderCategory}" title="${jacketName}" >
                                                                <img src="images/buy-button.svg"  alt="Buy ${jacketName}"/>
                                                            </a>
                                                        </div>
                                                        <div class="carousel-navigation">
                                                            <img src="images/carousel navigation.svg" alt="Jacket carousel navigation"/>
                                                        </div>`
            }
                                        
            if (i > 4) {
                break;
            }
        }
    }
    catch (error) {
        console.log(error);
    }
};

productsCall();