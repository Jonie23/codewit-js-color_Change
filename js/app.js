// choose the colors
let colors = ['red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow'];

// request the button id
let button = document.getElementById('button');


//funtion invokes on click of the button
function clickMe(){  //ES6 button.addEventListener('click', function(){})
    let index = parseInt((Math.random()*colors.length) + 1);

    let view = document.getElementById('view');

    view.style.background = colors[index]
  
}