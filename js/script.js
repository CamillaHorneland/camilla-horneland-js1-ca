const resultContainer = document.querySelector(".result");

const url = "http://makeup-api.herokuapp.com/api/v1/products.json";


async function getMakeup() {
    try {
        const response = await fetch(url);
        
        const result = await response.json ();

        console.log(result);


        for(let i = 0; i < result.length; i++) {

            if(i===15) {
            break }        
   
          resultContainer.innerHTML += 
              `<div class="data">
                <h3>${result[i].name}</h3>
                <div class="img" style="background-image: url('${result[i].api_featured_image}')"</div>
                <h4>${result[i].product_type}</h4>
                 <h4>${result[i].price} $</h4>
                <div class="btn"><a href="details.html" title="Details"><h5>Details</h5></a></div>
              </div>`;
        }

    }catch (error) {
      console.log(error);
      resultContainer.innerHTML = message("error", error);
   }
}

getMakeup();


   
  


