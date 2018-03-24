'use strict';


const motivation = ['Inspiration', 'Happiness', 'Strength', 'Motivate', 'Inspire', 'Happy', 'Positive', 'Greatness', 'You are good', 'Perfect', 'Inspired'];
// const URL = 'https://api.giphy.com/v1/gifs/search?q&api_key=sd0BFqPzqnPbrf9aXtsAg1gqTitD94RA';
const funnyCat = '"http://api.giphy.com/v1/gifs/search?q=funny+cat.type&api_key=sd0BFqPzqnPbrf9aXtsAg1gqTitD94RA"';
// const URL = 'https://api.giphy.com/v1/gifs/search?';
// const apiKey = '&api_key=sd0BFqPzqnPbrf9aXtsAg1gqTitD94RA';
const motivate = $(this).attr('data-name');
// const query = `"&q="${motivate}`;

function displayGiphy() {
  const queryURL = `"https://api.giphy.com/v1/gifs/search?&q="${motivate}"&api_key=sd0BFqPzqnPbrf9aXtsAg1gqTitD94RA&limit=10"`;

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).then(function(response) {
    const motivationDiv = $("<div class='motivate'>");
    const rating = response.data[0].rating;
    const pOne = ('<p>').text(`Rating: ${rating}`);
    motivationDiv.append(pOne);

    $('#giphys').append(motivationDiv);
  });
}

function renderButtons() {
  $('#giphyButtons').empty();
  for (let i = 0; i < motivation.length; i++) {
    const a = $('<button>');
    a.addClass('motivate-btn');
    a.attr('data-name', motivation[i]);
    a.text(motivation[i]);
    $('#giphyButtons').append(a);
  }
}

$('#moreMotivation').on('click', function(event) {
  event.preventDefault();
  const motivate = $('#motivationInput').val().trim();
  motivation.push(motivate);
  $('#motivationInput').val('');

  renderButtons();
});

$(document).on('click', '.motivate-btn', displayGiphy);

renderButtons();

// const giphyURLWithAPIKey = 'https://api.giphy.com/GET/v1/gifs/search?&api_key=sd0BFqPzqnPbrf9aXtsAg1gqTitD94RA';

// console.log(funnyCat.data);
// function setup() {

// }

// function gotData(data) {
//   console.log(data);
// }

// function draw() {

// }
