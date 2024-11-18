// console.log('i have it')

function loadButton(){
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(response => response.json())
        .then(data => displayButton(data.categories))
}


// {id: 1, category: 'Cat', category_icon: 'https://i.ibb.co.com/N7dM2K1/cat.png'}

function displayButton(categories){
    categories.forEach(element => {
        const divContainer = document.getElementById('btn-container');
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <button class="p-6 w-[280px] flex gap-4 justify-center items-center font-bold border border-gray-500 rounded-xl">
                <img class="w-10 h-10" src=${element.category_icon} alt="">
                ${element.category}
            </button>
        `
        divContainer.appendChild(newDiv);
    });
}

loadButton();
