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


axios.get('https://lambda-times-api.herokuapp.com/articles')

    .then(data =>{
        console.log(data.data.articles)
        let articlesObj = data.data.articles
        let bsArticle = articlesObj.bootstrap
        let jsArticle = articlesObj.javascript
        let jqArticle = articlesObj.jquery
        let techArticle = articlesObj.technology

        bsArticle.forEach(object => {
            articleMaker(object)
        })
        jsArticle.forEach(object => {
            articleMaker(object)
        })
        jqArticle.forEach(object => {
            articleMaker(object)
        })
        techArticle.forEach(object => {
            articleMaker(object)
        })
        
        
    })


const cardsHolder = document.querySelector('.cards-container')

function articleMaker(articles){

    //Creating the required elements
    const cardElement = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const cardAuthor = document.createElement('div')
    const imgContainer = document.createElement('div')
    const authorImg = document.createElement('img')
    const authSpan = document.createElement('span')
    //Add CSS classes to elements
    cardElement.classList.add('card')
    cardHeadline.classList.add('headline')
    cardAuthor.classList.add('author')
    imgContainer.classList.add('img-container')
    //Append elements to child elements
    cardElement.appendChild(cardHeadline)
    cardElement.appendChild(cardAuthor)
    cardAuthor.appendChild(imgContainer)
    cardAuthor.appendChild(authSpan)
    imgContainer.appendChild(authorImg)

    cardHeadline.textContent = articles.headline
    authorImg.src = articles.authorPhoto
    authSpan.textContent = `By ${articles.authorName}`

    cardElement.addEventListener('click', event=> {
        console.log(cardHeadline.textContent)
    })

    cardsHolder.appendChild(cardElement)
    return cardElement

}