// console.log('i have it')
//modelPoenerButton

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
            <button onclick="fetchSpecificPet('${element.category}')" class="p-4 w-[250px] flex gap-2 justify-center items-center font-bold border border-gray-500 rounded-xl">
                <img class="w-10 h-10" src=${element.category_icon} alt="">
                ${element.category}
            </button>
        `
        divContainer.appendChild(newDiv);
    });
}

function fetchSpecificPet(category){
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then(response => response.json())
    .then(data => displayPets(data.data))
}

function fetchMoveToLikeList(getPetID){
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${getPetID}`)
    .then(response => response.json())
    .then(data => moveToLikeList(data.petData))
}

function fetchDetailsShowButton(getPetID){
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${getPetID}`)
    .then(response => response.json())
    .then(data => detailsShowButton(data.petData))
}

function detailsShowButton(petData){
    const modalContainer = document.getElementById('modalContainer');

    document.getElementById('showTheModal').click();

    modalContainer.innerHTML =`
        <div>
            <img class="w-full rounded-lg pb-4" src=${petData.image} alt="">
            <p class="text-2xl font-bold pb-4">${petData.pet_name}</p>
        </div>
        <div class="flex w-full border-b border-gray-300 pb-4 ">
            <div class="w-1/2">
                <p><img class="w-4 inline"src="https://img.icons8.com/?size=100&id=gGUs3TPWpvgb&format=png&color=000000" alt=""> Breed: ${petData.breed == null? "No Data":petData.breed}</p>
            
                <p><img class="w-4 inline"src="https://img.icons8.com/?size=100&id=34113&format=png&color=000000" alt=""> Gender: ${petData.gender == null ? "No Data": petData.gender}</p>

                <p><img class="w-4 inline"src="https://img.icons8.com/?size=100&id=RHLcMV5o9BSE&format=png&color=000000" alt=""> Vaccinated status: ${petData.gender == null ? "No Data": petData.vaccinated_status}</p>
                

            </div>
            <div class="w-1/2" >
                <p><img class="w-4 inline"src="https://img.icons8.com/?size=100&id=84997&format=png&color=000000" alt=""> Birth: ${petData.date_of_birth == null? "No Data": petData.date_of_birth }</p>

                <p><img class="w-4 inline"src="https://img.icons8.com/?size=100&id=85801&format=png&color=000000" alt=""> Price: ${petData.price == null? "No Data": petData.price}</p>
            </div>
        </div>

        <div>
            <p class="text-xl font-bold pb-4 pt-4">Details Information</p>
            <p>${petData.pet_details}</p>

        </div>
        
    `

}

function moveToLikeList(petDetails){
    const linkedContainer = document.getElementById('linked-container');
    const newDiv = document.createElement('div')
    // class="rounded-lg border p-2 object-cover h-[124px] w-full"
    newDiv.innerHTML =`
        <img src=${petDetails.image} class="rounded-lg border p-2  object-cover h-[124px] w-full  " alt="">
    `
    linkedContainer.appendChild(newDiv);
}



function loadPets(){
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(response => response.json())
        .then(data => displayPets(data.pets))
}



function openCongoModal(){

    document.getElementById('modelPoenerButton').click();

    let counterValue = 3; 
    const counterElement = document.getElementById('counter');

    const countdownInterval = setInterval(() => {
        counterElement.style.setProperty('--value', counterValue);
        counterValue--;

        if (counterValue < 0) {
            clearInterval(countdownInterval); 
        }
    }, 1000); 

    setTimeout(()=>{
        document.getElementById('closeBtn').click();
    },4000)
}
 
// breed: "Golden Retriever"
// category: "Dog"
// date_of_birth: "2023-01-15"
// gender: "Male"
// image: "https://i.ibb.co.com/p0w744T/pet-1.jpg"
// petId:  1
// pet_details: "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog."
// pet_name: "Sunny"
// price : 1200
// vaccinated_status: "Fully"
// https://img.icons8.com/?size=100&id=gGUs3TPWpvgb&format=png&color=000000

function displayPets(petsArr){
    const displayDiv = document.getElementById('card-container')
    displayDiv.innerHTML = "";
    if(petsArr.length != 0){
        petsArr.forEach(element=>{
            const newCard = document.createElement('div');
            newCard.classList = "card card-compact p-4 border"
            newCard.innerHTML =
            `
            <div >
                <img class="rounded-lg" src=${element.image} />
            </div>
            <div class="card-body border-b ">
                <h2 class="card-title">${element.pet_name}</h2>
                <p><img class="w-4 inline"src="https://img.icons8.com/?size=100&id=gGUs3TPWpvgb&format=png&color=000000" alt=""> Breed: ${element.breed == null? "No Data":element.breed}</p>
                <p><img class="w-4 inline"src="https://img.icons8.com/?size=100&id=84997&format=png&color=000000" alt=""> Birth: ${element.date_of_birth == null? "No Data": element.date_of_birth }</p>
                <p><img class="w-4 inline"src="https://img.icons8.com/?size=100&id=34113&format=png&color=000000" alt=""> Gender: ${element.gender == null ? "No Data": element.gender}</p>
                <p><img class="w-4 inline"src="https://img.icons8.com/?size=100&id=85801&format=png&color=000000" alt=""> Price: ${element.price == null? "No Data": element.price}</p>
            </div>
            <div class="flex justify-between mt-4">

                <!-- Like button -->
                <button onclick="fetchMoveToLikeList(${element.petId})" class="px-2 py-1 border rounded-lg border-gray-300"><img class="w-4 "src="https://img.icons8.com/?size=100&id=HrULZDok3EKr&format=png&color=000000" alt=""></button>

                <!-- Adopt -->
                <button onclick="openCongoModal()" class="px-5 py-2 rounded-lg font-bold text-[#0E7A81] border border-gray-300">Adopt</button>

                <!-- Details -->
                <button onclick="fetchDetailsShowButton(${element.petId})" class="px-5 py-2 rounded-lg font-bold text-[#0E7A81] border  border-gray-300">Details</button>
            </div>
            `
            displayDiv.appendChild(newCard)
        })
    }
    else{
        displayDiv.innerHTML =
        `
        <img src="/images/error.webp" alt="">
        <p>There is no Information</p>
        `
    }
}

// https://img.icons8.com/?size=100&id=HrULZDok3EKr&format=png&color=000000

loadButton();
loadPets();
