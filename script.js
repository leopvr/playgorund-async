// API request and conection
const API_URL = "https://jsonplaceholder.typicode.com/users";

const getUser = async () => {
  try {
    const getFetch = await fetch(API_URL);
    const getData = await getFetch.json();
    setCards(getData);

    readMore();
    search();
  } catch (error) {
    console.log("Error: ", error);
  }
};
getUser();

// Rendering cards
function setCards(usersArray) {
  //console.log("userArray", usersArray)
  const userCards = document.getElementById("cards-container");
  usersArray.forEach((user) => {
    const divCard = document.createElement("div");
    divCard.innerHTML = `<div class="card" id="card">
        <div class="image-card-container">
        <img src="./assets/user-photo.png" style="width: 60%;">
        </div>
        <div class="card-body">
        <h5 class="card-title">${user.name}</h5>
        <span style="display:none;">${user.id}</span> 
        <p><span>Username: </span> ${user.username}</p>
                    <p><span>Email: </span> ${user.email}</p>

                    <div class="btn-adress">
                        <p>
                            <span>City: </span>${user.address.city}

                            <div class="more-text more"> 
                            Geo: Lat ${user.address.geo.lat}, Lng: ${user.address.geo.lng} Street: ${user.address.street}    Suite: ${user.address.suite} Zipcode: ${user.address.zipcode} 
                            </div>

                        </p>

                        <button class="btn-address btnText">Read more</button>

                    </div>

                    <p><span>Company: </span> ${user.company.name}</p>
                    <p><span>Phone: </span> ${user.phone}</p>
                    </div>
                    </div>`;
    divCard.classList.add("cards");
    userCards.appendChild(divCard);
  });
}

// Search bar filter
function readMore() {
  const moreText = document.querySelectorAll(".more-text");
  //   console.log(moreText);
  const btnText = document.querySelectorAll(".btnText");
  //   console.log(btnText);

  for (let i = 0; i < moreText.length; i++) {
    btnText[i].addEventListener("click", () => {
      if (moreText[i].classList.contains("more")) {
        console.log("va", btnText[i], i);
        moreText[i].classList.remove("more");
        btnText[i].textContent = "Read Less";
      } else {
        console.log("no va", btnText[i], i);
        moreText[i].classList.add("more");
        btnText[i].textContent = "Read More";
      }
    });
  }
}

function search() {
  const inputSearchUser = document.getElementById("search-user");
  const titleCard = document.querySelectorAll(".card-title");
  const cards = document.querySelectorAll(".cards");

  inputSearchUser.addEventListener("keyup", (event) => {

    let busqueda = event.target.value.toLowerCase();
    console.log(busqueda);

    for (let i = 0; i < cards.length; i++) {
        titleCard[i].textContent.toLowerCase().includes(busqueda)
        ? cards[i].classList.remove("hidden")
        : cards[i].classList.add("hidden");
    }

  });

}
