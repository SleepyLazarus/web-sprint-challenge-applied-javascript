// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const { default: Axios } = require("axios");

Axios.get('https://lambda-times-api.herokuapp.com/articles')

    .then(data =>{
        console.log(data.data.articles)
        let articlesObj = data.data.articles
        articleMaker(articlesObj)
    })


const cardsHolder = document.querySelector('.cards-container')

function articleMaker(articles){

    //Creating the required elements
    const cardElement = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const cardAuthor = document.createElement('div')
    const imgContainer = document.createElement('div')
    const authImg = document.createElement('img')
    const authSpan = document.createElement('span')
    //Add CSS classes to elements
    cardElement.classList.add('.card')
    cardHeadline.classList.add('.headline')
    cardAuthor.classList.add('.author')
    imgContainer.classList.add('.img-container')
    //Append elements to child elements
    cardElement.appendChild(cardHeadline)
    cardElement.appendChild(cardAuthor)
    cardAuthor.appendChild(imgContainer)
    cardAuthor.appendChild(authSpan)
    imgContainer.appendChild(authImg)

    cardHeadline.textContent = articles.article
    console.log(cardHeadline)
    cardsHolder.appendChild(cardElement)

}