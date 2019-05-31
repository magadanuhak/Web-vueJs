class Card{
       create(img, name, opsArray, price, id){
        let options = [];
        if(opsArray.length) {
            opsArray.forEach(function (el) {
                options.push(`<p>${el}</p>`);
            });
        }
        let optionsHTML = options.join('');
        let cardBody = document.createElement('div');
        cardBody.id = id;
        cardBody.classList.add("card");
        cardBody.innerHTML = `
            <div class="card-image">
              <img src="img/${img}">
            </div>
            <div class="card-content">
              <div class="card-title">${name}</div>
              ${optionsHTML}
              <span class="price cwhite badge red ">${price} Lei</span>
            </div>
          `;
        let parent = document.querySelector(`.${id}_card`);
        parent.appendChild(cardBody);
        computer.updatePrice(price);
    }
}
