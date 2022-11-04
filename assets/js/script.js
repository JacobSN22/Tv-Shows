const apiData = []

const fetchList = () => {

    const apiEndpoint = 'http://api.tvmaze.com/show';

    fetch(apiEndpoint)

    .then((response) => {
        if(response.status == 200) {
            return response.json();
        }
    })

    .then((data) => {

        apiData.push(data);
    })

    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        apiData[0].map((list) => createCards(list));
        
    })

};

const createCards = (data) => {

    document.getElementById("cards").innerHTML += `
    <figure class="card" >
    <article class="container" >
    <h2 class="titel" > ${data.name}</h2>
    <img class="cardImg" src=${data.image.medium} alt=${data.name} >
    <p class="date" > ${data.schedule.days} ${data.schedule.time} </p>
    <div class="off">
    <p> ${data.summary} </p>
    <p> ${data.runtime} </p>
    <p> ${data.rating.average}</p>
    <p> ${data.schedule.days} ${data.schedule.time} </p>
    </div>

    </article>
    </figure>
    `
}

// const showDetails = document.getElementById("cards");
// showDetails.addEventListener("click", showDetail)

// function showDetail() {
//     var figure = document.querySelector("figure")
//     var div = document.querySelector("div")
//     figure.classList.toggle("on")
//     div.classList.toggle("off")
// }    


window.addEventListener('load', () => {
    const figures = document.querySelectorAll("figure");
    const divs = document.querySelectorAll("div");
    console.log(figures);
    figures.forEach(figure => {
        figure.addEventListener('click', () => {
            figure.classList.toggle("on");
            divs.forEach(div => {
            div.classList.toggle("off");
            })
        });
    });
  });


fetchList();