const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice');
const dice = document.querySelector('.dice-icon');



//XML Request
// const request = new XMLHttpRequest();    

// request.onload = function() {
//     const data = JSON.parse(this.responseText);
//     adviceId.innerHTML = 'Advice #' + data.slip.id;
//     adviceText.innerHTML = '"' + data.slip.advice + '"'; 
// }

//  dice.onclick = function() { 
//     const data = JSON.parse(request.responseText);
//     adviceId.innerHTML = 'Advice #' + data.slip.id;
//     adviceText.innerHTML = '"' + data.slip.advice + '"'; 
//     request.open('GET', 'https://api.adviceslip.com/advice');
//     request.send();
// }; 


// request.open('GET', 'https://api.adviceslip.com/advice');

// request.send();


//FETCH Request
// function adviceGenerator() {
//     fetch('https://api.adviceslip.com/advice')
//     .then((response) => response.json())
//     .then((data) => {
//         adviceId.innerHTML = 'Advice #' + data.slip.id;
//         adviceText.innerHTML = '"' + data.slip.advice + '"'; 
//     })
//     .catch(err => {
//          console.log(err);
//     })
// }

// dice.addEventListener('click', adviceGenerator);
// window.addEventListener('load', adviceGenerator);


//FETCH Request using Async-wait
// async function adviceGenerator() {
//     try {
//     const advice = await fetch('https://api.adviceslip.com/advice');
//     const data = await advice.json(); 
//     adviceId.innerHTML = 'Advice #' + data.slip.id;
//     adviceText.innerHTML = '"' + data.slip.advice + '"';  
//     } catch(err) {
//         console.log(err);
//     }

// };


// dice.addEventListener('click', adviceGenerator);
// window.addEventListener('load', adviceGenerator);


//AXIOS request
// function adviceGenerator() {
//     const axiosRequest = axios.get('https://api.adviceslip.com/advice');
//     axiosRequest
//     .then(response => {
//         const data = response.data;
//         adviceId.innerHTML = 'Advice #' + data.slip.id;
//         adviceText.innerHTML = '"' + data.slip.advice + '"';  
//     })
//     .catch(err => {
//         console.log(err);
//     });
// }

// dice.addEventListener('click', adviceGenerator);
// window.addEventListener('load', adviceGenerator);


//Axios Request with Async-await
async function adviceGenerator() {
    try{
        const axiosRequest = await axios.get('https://api.adviceslip.com/advice');
        const data = axiosRequest.data;
        adviceId.innerHTML = 'Advice #' + data.slip.id;
        adviceText.innerHTML = '"' + data.slip.advice + '"';  
    } catch(err) {
        console.log(err);
    }
    
}

dice.addEventListener('click', adviceGenerator);
window.addEventListener('load', adviceGenerator);