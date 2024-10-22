const myButton = document.getElementById('myButton');

console.log(myButton);

myButton.addEventlistener('click', function(e) {
    alert('Button clicked!'); // Prevent the default behavior of the button click (i.e., reloading the page)
  });

