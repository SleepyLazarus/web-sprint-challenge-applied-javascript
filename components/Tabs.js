// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element


//Request the data
axios.get('https://lambda-times-api.herokuapp.com/topics')
    //Once we have the data, execute the following
    .then(data =>{
        // console.log(data)
        // console.log(data.data.topics)
        //Setting the array to an easier to use variable
        let topicArray = data.data.topics
        // console.log(topicArray)
        //Creating parent element to attach our topics to
        const topicList = document.querySelector('.topics')
        //Loop through the array
        topicArray.forEach(string => {
            //Create the div Element
            const topicDiv = document.createElement('div')
            //Add the CSS Class
            topicDiv.classList.add('tab')
            //Add in the content of the array to the div's
            topicDiv.textContent = string
            //Append the div to the parent element.
            topicList.appendChild(topicDiv)
        })
    })