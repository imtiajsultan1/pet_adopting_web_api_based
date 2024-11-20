// console.log('i have it')
//modelPoenerButton

let allPets = [];
let getLink = null;

function scrollToSection() {
    const target = document.getElementById('btn-container');
    target.scrollIntoView({ behavior: 'smooth' });
}

// fetch for sorting and call to fetch 

function sortedFetch() {
    if(getLink != null ){
    fetch(getLink)
    .then(response => response.json())
    .then(data => {
        allPets = data.data; 
        sortAndDisplayPets(); 
    });
    }
    else{
        fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then(response => response.json())
    .then(data => {
        allPets = data.pets; 
        sortAndDisplayPets(); 
    });
    }
}

// sorting logic

function sortAndDisplayPets(){
    const sortedPets = [...allPets].sort((a, b) => b.price - a.price); 
    displayPets(sortedPets); 
}

// fetch buttons

function loadButton(){
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(response => response.json())
        .then(data => displayButton(data.categories))
}


// {id: 1, category: 'Cat', category_icon: 'https://i.ibb.co.com/N7dM2K1/cat.png'}

// displaying buttons

function displayButton(categories){
    categories.forEach(element => {
        const divContainer = document.getElementById('btn-container');
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <button onclick="handleButtonClick(this,'${element.category}')" class="p-4 w-[150px] flex gap-2 justify-center items-center font-bold border border-gray-500 rounded-xl hover:rounded-full hover:border-[#0E7A81] hover:bg-[#f9ffff] transition ">
                <img class="w-10 h-10" src=${element.category_icon} alt="">
                ${element.category}
            </button>
        `
        divContainer.appendChild(newDiv);
    });
}

function handleButtonClick(buttonElement, category) {
    // Fetch data for the clicked category
    fetchSpecificPet(category);

    // Get all buttons inside the container
    const allButtons = document.querySelectorAll('#btn-container button');

    // Remove 'clicked' class from all buttons
    allButtons.forEach(button => button.classList.remove('border-[#0E7A81]', 'bg-[#f9ffff]', 'rounded-full'));

    // Add 'clicked' class to the clicked button
    buttonElement.classList.add('border-[#0E7A81]', 'bg-[#f9ffff]', 'rounded-full');
}


function fetchSpecificPet(category){

    getLink = `https://openapi.programming-hero.com/api/peddy/category/${category}`;  

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



function openCongoModal(buttonElement){


    buttonElement.disabled = true;
    buttonElement.classList.add('cursor-not-allowed', 'opacity-50');

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
    const loadingElement = document.getElementById('loadingElement')
    const likedDiv = document.getElementById('linked-container')
    loadingElement.classList.remove('hidden');
    displayDiv.classList.add('hidden');
    likedDiv.classList.add('hidden');

    setTimeout(()=>{
        loadingElement.classList.add('hidden');
        displayDiv.classList.remove('hidden');
        likedDiv.classList.remove('hidden');
    },2000)

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
                <button onclick="fetchMoveToLikeList(${element.petId})" class="px-2 py-1 border rounded-lg border-gray-300 hover:bg-[#0E7A81] hover:text-white transition"><img class="w-4 "src="https://img.icons8.com/?size=100&id=HrULZDok3EKr&format=png&color=000000" alt=""></button>

                <!-- Adopt -->
                <button onclick="openCongoModal(this)" class=" px-2 py-1 rounded-lg font-bold text-[#0E7A81] border border-gray-300 hover:bg-[#0E7A81] hover:text-white transition">Adopt</button>

                <!-- Details -->
                <button onclick="fetchDetailsShowButton(${element.petId})" class="px-2 py-1 rounded-lg font-bold text-[#0E7A81] border  border-gray-300 hover:bg-[#0E7A81] hover:text-white transition">Details</button>
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
