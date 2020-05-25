"use strict";

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
    for(var i = 0; i < coffees.length; i++) {
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
        if (selectedRoast === 'all') {
            filteredCoffees.push(coffee);
        }
        if (coffee.roast === selectedRoast || coffee.name.toLowerCase() === selectedCoffee.toLowerCase()){
            filteredCoffees.push(coffee);
        }

    });
    dropDown.innerHTML = renderCoffees(filteredCoffees);
}

function myFunction() {

}

function secondSubmitButton (e) {
    e.preventDefault();
    coffees.push({name: inputSecond.value , roast: secondSelect.value});
    updateCoffees(e);
    this.form.reset();
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
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
var result = document.getElementById("coffees");
console.log(result);

var dropDown = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var inputCoffee = document.querySelector('#inputCoffee');

var inputSecond = document.querySelector('#secondName');
var secondSelect = document.querySelector('#secondSelect');
var secondSubmit = document.querySelector('#secondSubmit');

dropDown.innerHTML = renderCoffees(coffees);
// roastSelection.addEventListener('click', updateCoffees)
submitButton.addEventListener('click', updateCoffees);
dropDown.addEventListener('click', updateCoffees);
// todo Made change to dropOptions will updateCoffees menu
roastSelection.addEventListener('change', updateCoffees);

secondSubmit.addEventListener('click',secondSubmitButton);