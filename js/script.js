const resultContainer = document.querySelector(".result");

const url = "http://makeup-api.herokuapp.com/api/v1/products.json";


async function getMakeup() {
    try {
        const response = await fetch(url);
        
        const result = await response.json ();

        console.log(result);

        resultContainer.innerHTML = "";
        
        for(let i = 0; i < result.length; i++) {

            if(i===15) {
             break }   
             
          resultContainer.innerHTML += 
              `<div class="data">
                  <a href="details.html?id=${result[i].id}">
                  <h3>${result[i].name}</h3>
                  <div class="img" style="background-image: url('${result[i].api_featured_image}')"</div>
                  <h4>${result[i].product_type}</h4>
                  <h4>${result[i].price} $</h4></a>
             </div>`;
     }

    }catch (error) {
      console.log(error);
      resultContainer.innerHTML = message("error", error);
   }
}

getMakeup();


   
  


