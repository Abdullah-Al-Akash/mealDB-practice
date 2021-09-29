const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn')



searchBtn.addEventListener('click', function () {
        document.getElementById('singleItem').innerText = '';
        const searchText = searchInput.value;

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
                .then(res => res.json())
                .then(data => displayItems(data.meals))
})

const displayItems = (items) => {
        const ItemsContainer = document.getElementById('meal-container');
        ItemsContainer.textContent = '';
        items.forEach(item => {
                const div = document.createElement('div');
                div.innerHTML = `
                <div onclick={singleItem(${item.idMeal})} class="col">
                        <div class="card h-100">
                                <img src="${item.strMealThumb}" class="card-img-top" alt="...">
                                <div class="card-body">
                                        <h5 class="card-title">${item.strMeal}</h5>
                                        <p class="card-text">${item.strInstructions.slice(0, 200)}</p>
                                </div>
                        </div>
                </div>
                `;
                ItemsContainer.appendChild(div);

        })
}

const singleItem = id => {
        console.log(id);
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then(res => res.json())
                .then(data => displaySingleItem(data.meals[0]))
}
const displaySingleItem = (item) => {
        const singleItem = document.getElementById('singleItem');
        singleItem.textContent = '';

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card mx-auto mb-5 mt-5" style="width: 18rem;">
                <img src="${item.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${item.strMeal}</h5>
                <p class="card-text">${item.strInstructions.slice(0, 350)}</p>
                <a href="${item.strYoutube}" class="btn btn-success">How to Make</a>
                </div>
        </div>
        `;
        singleItem.appendChild(div);
}