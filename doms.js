// 1. Write a JavaScript program to remove items from a drop-down list.
// Sample HTML file :
// <select id="colorSelect">
// <option>Red</option>
// <option>Green</option>
// <option>White</option>
// <option>Black</option>
// </select>

function removeSelectedColor() {

    var select = document.getElementById('colorSelect');
    
    var selectedIndex = select.selectedIndex;
   
    if (selectedIndex !== -1) {
        select.remove(selectedIndex);
    } else {
        alert('Please select an item to remove.');
    }
}

// 2.Write a JavaScript program to change the  color given text in p tag  
// Eg : if you select green then the color of text should be green 

// Sample HTML file :
// <select id="colorSelect">
// <option>Red</option>
// <option>Green</option>
// <option>White</option>
// <option>Black</option>
// </select>
// <button>change Color </button>
// <p>”sample test….” </p>

document.addEventListener('DOMContentLoaded', function() {
    
    var colorSelect = document.getElementById('colorSelect');
    var changeColorButton = document.getElementById('changeColorButton');
    var textParagraph = document.getElementById('text');
    
        changeColorButton.onclick = function() {
            var selectedColor = colorSelect.value;
            textParagraph.style.color = selectedColor;
    };
});

//3. Write a JavaScript function to get the values of First and Last names of the following form.
// Sample HTML file :
// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
// <title>Return first and last name from a form - w3resource</title>
// </head><body>
// <form id="form1">
// First name: <input type="text" name="fname" value="David"><br>
// Last name: <input type="text" name="lname" value="Beckham"><br>
// <input type="submit" value="Submit">
// </form>
// </body>
// </html>
function getFormValues(event) {
    event.preventDefault();

    var form = document.getElementById('form1');
    var firstName = form.elements['fname'].value;
    var lastName = form.elements['lname'].value;

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
}
document.getElementById('form1').addEventListener('submit', getFormValues);

//4. Write a JavaScript program to display a random image (clicking on a button) from the following list.
// Sample Image information :"http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg&quot;, width: "240", height: "160"
// "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg&quot;, width: "320", height: "195"
// "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg&quot;, width: "500", height: "343"

const images = [
    { url: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160" },
    { url: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195" },
    { url: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343" }
];


function showRandomImage() {
  
    const randomIndex = Math.floor(Math.random() * images.length);

    const image = images[randomIndex];

    const imgElement = document.getElementById('randomImage');

    
    imgElement.src = image.url;
    imgElement.width = image.width;
    imgElement.height = image.height;
}

document.getElementById('showImageButton').addEventListener('click', showRandomImage);
