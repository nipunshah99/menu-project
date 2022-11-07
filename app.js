const sectionCenter = document.querySelector(".section-center");


// Load item
window.addEventListener("DOMContentLoaded", function(){
  displayMenuItem(menu);

});

// filter items

function displayMenuItem (menuItem){
  let displayMenu = menuItem.map(function(item){
    
    return `
    <article class="menu-item">
      <img src=${item.img} class="photo" alt="menu item">
      <div class="item-info">
          <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
          ${item.desc}
          </p>
      </div>
    </article>
    `;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}