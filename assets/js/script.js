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
    </article>
    </figure>
    `
}

fetchList();