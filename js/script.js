const resultContainer = document.querySelector(".result");

const url = "https://api.disneyapi.dev/characters";

async function getApi () {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    const result = json.data;

    result.forEach(function (result) {
        resultContainer.innerHTML += `<div class="result"> 
                                           <h3>${result.name}</h3>
                                          <div class="details-image" 
                                    style="background-image: url('${result.imageUrl}')</div>
                                           <p>${result.films}</p>
                                      </div>`;
    });
}

getApi();