


// const data = fetch('https://dog.ceo/api/breeds/image/random')
// console.log(data);

const img = document.querySelector('#dog-img')
const btnUpd = document.querySelector("#btn-update")



function getDog(){fetch('https://dog.ceo/api/breeds/image/random')
.then(res => res.json())
.then(data => {
img.src = data.message
});
}

getDog()

// btnUpd.addEventListener("click", getDog);

btnUpd.addEventListener('click', getDog)