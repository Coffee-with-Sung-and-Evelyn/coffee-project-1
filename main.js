"use strict";

// TODO: Tables are a little old school, you need to refactor the code so that each coffee is displayed in a div that contains a heading displaying the coffee name, and the type of roast in a paragraph. Don't display the ids, these are only for our application's internal use ,
//  Add functionality to search through the coffees by name, and display only the coffees that match the provided search term (You will need to add an input field to the existing form for this)
//  Add functionality to update the displayed coffee as the user types into the search box, or as soon as they select an option from the select.
function renderCoffee(coffee) {
    var html = '<div class="coffee col-6">';
    //html += '<div class="col-3">'  + '</div>';
    html += '<div class="font-weight-bold">' + coffee.name + '</div>';
    html += '<div class="col-3">' + '</div>';
    html += '<div class="text-black-50">' + coffee.roast + '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedCoffee = inputCoffee.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        console.log('coffeeName:' , coffee.name);
        console.log('selectedCoffee: ', selectedCoffee);
        if (coffee.roast === selectedRoast || coffee.name.toLowerCase() === selectedCoffee.toLowerCase()){
            filteredCoffees.push(coffee);
        }
    });
    dropDown.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
//  When the page loads, the coffees should be sorted by their ids in ascending order (increasing order)
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
coffees.reverse();
var result = document.getElementById("coffees");
console.log(result);
 //var result = document.write("<p>Bold:" + .bold() + "</p>");

var dropDown = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var inputCoffee = document.querySelector('#inputCoffee');

dropDown.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
