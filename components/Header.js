// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const headerContainer = document.querySelector('.header-container')

function Header() {
    
    //Create required elements
    const headerDiv = document.createElement('div')
    const headerDate = document.createElement('span')
    const headerText = document.createElement('h1')
    const headerTemp = document.createElement('span')
    //Add classes to the elements
    headerDiv.classList.add('header')
    headerDate.classList.add('date')
    headerTemp.classList.add('date')
    //Append elements to their child elements
    headerDiv.appendChild(headerDate)
    headerDiv.appendChild(headerText)
    headerDiv.appendChild(headerTemp)
    headerContainer.appendChild(headerDiv)
    //Set the contents of the elements
    headerDate.textContent = 'March 28, 2020'
    headerText.textContent = 'Lambda Times'
    headerTemp.textContent = '98°'
    //Give back the entire container we just created
    return headerContainer

}


Header();
