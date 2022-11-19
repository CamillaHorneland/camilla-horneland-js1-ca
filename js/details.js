const detailsContainer = document.querySelector(".details");
const title = document.querySelector("title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "http://makeup-api.herokuapp.com/api/v1/products/" + id + ".json";

console.log(url);

async function detailMakeup() {
    try {
        const response = await fetch(url);
        
        const result = await response.json ();

        console.log(result);

        detailsContainer.innerHTML = "";

          detailsContainer.innerHTML += 
              `<h2 class="name">${result.name}</h2>
                <div class="img" style="background-image: url('${result.api_featured_image}')"</div>
                <div class="info">
                    <p >${result.description}</p>
                    <h4>${result.product_type}</h4>
                   <h4>${result.price} $</h4>
                </div>`;
                document.title = result.name;
        }

    catch (error) {
      console.log(error);
      detailsContainer.innerHTML = message("error", error);
   }

}

detailMakeup();




