// Men

const urlAllProducts = `https://tronrudsveiseverksted.no/rainy-days/wp-json/wc/store/products`;
const jacketsCont = document.querySelector(".main-jackets");

async function productsCall() {
    try {
        const response = await fetch(urlAllProducts);
        const data = await response.json();
        const products = data;
        console.log(products);
        
        for (let i = 0; i < products.length; i++) {
            
            let product = products[i];
            
            let price = "";
            if (products[i].prices.price) {
                price = products[i].prices.price;
            } else {
                price = "Unknown or N/A.";
            }

            let jacketName = "";
            if (products[i].name) {
                jacketName = products[i].name;
            } else {
                jacketName = "Unknown or N/A.";
            }

            let jacketId = "";
            if (products[i].id) {
                jacketId = products[i].id;
                console.log(jacketId);
            } else {
                jacketId = "Unknown or N/A.";
            }

            console.log(products[i].images[0].src);

            let productImageUrl = "";
            if (products[i].images[0].src) {
                productImageUrl = products[i].images[0].src;
            } else {
                productImageUrl = "Unknown or N/A.";
            }

            let genderCategory = "";
            if (products[i].categories[0].name) {
                genderCategory = products[i].categories[0].name;
            } else {
                genderCategory = "Unknown category.";
            }

            if (products[i].categories[0].name === "Men") {
            jacketsCont.innerHTML += `<div class="jacket-box">
                                        <div class="jacket-box-display">
                                            <a href="jacket-specific.html?productName=${jacketName}&id=${jacketId}&gender=${genderCategory}" title="${jacketName}" >
                                                <img src="${productImageUrl}" Alt="${jacketName}" class="jacket-box-image" />
                                            </a>
                                        </div>
                                        <div class="jacket-box-description">
                                            <p>${jacketName}</p>
                                            <p>${products[i].prices.currency_prefix}${price}</p>
                                        </div>
                                    </div>`
            };  
        }
    }
    catch (error) {
        console.log(error);
        jacketsCont.innerHTML = "An error occured while loading.";
    }
};

productsCall();