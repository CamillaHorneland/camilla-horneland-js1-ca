const resultContainer = document.querySelector(".result");

const url = "http://makeup-api.herokuapp.com/api/v1/products/1048.json";


async function getMakeup() {
    try {
        const response = await fetch(url);
        
        const result = await response.json ();

        console.log(result);

          resultContainer.innerHTML += 
              `<h2 class="name">${result.name}</h2>
                <div class="img" style="background-image: url('${result.api_featured_image}')"</div>
                <div class="info">
                    <p >${result.description}</p>
                    <h4>${result.product_type}</h4>
                   <h4>${result.price} $</h4>
                </div>`;
        }

    catch (error) {
      console.log(error);
      resultContainer.innerHTML = message("error", error);
   }

}
getMakeup();
