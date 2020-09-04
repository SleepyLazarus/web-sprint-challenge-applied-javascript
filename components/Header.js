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
    

    const headerDiv = document.createElement('div')
    const headerDate = document.createElement('span')
    const headerText = document.createElement('h1')
    const headerTemp = document.createElement('span')

    headerDiv.classList.add('header')
    headerDate.classList.add('date')
    headerTemp.classList.add('date')

    headerDiv.append(headerDate)
    headerDiv.append(headerText)
    headerDiv.append(headerTemp)
    headerContainer.append(headerDiv)

    headerDate.textContent = 'March 28, 2020'
    headerText.textContent = 'Lambda Times'
    headerTemp.textContent = '98°'

    return headerContainer

}

Header();
