'use strict';


const motivation = ['Inspiration', 'Happiness', 'Strength', 'Motivate', 'Inspire', 'Happy', 'Positive', 'Greatness', 'You are good', 'Perfect', 'Inspired'];
// const URL = 'https://api.giphy.com/v1/gifs/search?q&api_key=sd0BFqPzqnPbrf9aXtsAg1gqTitD94RA';
// const funnyCat = '"http://api.giphy.com/v1/gifs/search?q=funny+cat.type&api_key=sd0BFqPzqnPbrf9aXtsAg1gqTitD94RA"';
// const URL = 'https://api.giphy.com/v1/gifs/search?';
// const apiKey = '&api_key=sd0BFqPzqnPbrf9aXtsAg1gqTitD94RA';
// const query = `"&q="${motivate}`;
$(function () {
  function displayRating(event) {
    let motivate = $(event.target).data('name');
    // const motivate = $(this).attr('data-name');
    let queryURL = `https://api.giphy.com/v1/gifs/search?&q=${motivate}&api_key=sd0BFqPzqnPbrf9aXtsAg1gqTitD94RA&limit=10`;
    // console.log(motivate);
    $.ajax({
      url: queryURL,
      method: 'GET',
    }).then(function(response) {
      console.log(response.data);
      // const motivationRatingDiv = $("<div class='rating'>");
      for (let i = 0; i < response.data.length; i++) {
        // let motivationGiphyDiv = $("<div class='motivation'>");
        // let giphyRating = $(`<p>Rating: ${response.data[i].rating}</p>`);
        // let giphyImages = $('<img>');
        // giphyImages.attr('src', response.data[i].images.fixed_height_still.url);
        // giphyImages.attr('data-still', response.data[i].images.fixed_height_still.url);
        // giphyImages.attr('data-animate', response.data[i].images.fixed_height.url);
        // giphyImages.attr('data-state', 'still');
        // giphyImages.addClass('image');
        // $('.motivation').append(giphyRating, giphyImages);
        
        let giphyBox = `
        <div class='motivation'>
          <p> Rating: ${response.data[i].rating}</p>
          <img src=${response.data[i].images.fixed_height_still.url}
            data-still=${response.data[i].images.fixed_height_still.url}
            data-animate=${response.data[i].images.fixed_height.url}
            data-state='still'
            class='image'
          />
        </div>
        `
        $('#giphy').append(giphyBox);
      }

    // const ratings = response.data[i].rating;
    // const pOne = $('<p>').text(`Rating: ${ratings}`);
    // motivationRatingDiv.append(pOne);
    // $('#giphyRating').append(motivationRatingDiv);

    // const motivationGiphyDiv = $("<div class='motivation'>");
    // const giphyPic = response.data[i].images.original.url;
    // const giphy = $('<img>').html(`${giphyPic}`);
    // motivationGiphyDiv.append(giphy);
    // $('#giphy').append(motivationGiphyDiv);
    // const motivationGiphyDiv = `<div style="float: left;"><p style="font-size: 20px;">
    // Rating: ${response.data[i].rating}</p><img class="gif"
    // src="${response.data[i].images.fixed_height_still.url}"/></div>`;

    // $('#giphy').append(motivationGiphyDiv);

    // src="${response.data[i].images.fixed_height_still.url},
    // }
    });
  }


  $(document).on('mouseenter', '.image', function() {
    const imageState = $(this).attr('data-state');
    if (imageState == 'still') {
      $(this).attr('src', $(this).data('animate'));
      $(this).attr('data-state', 'animate');
    } else {
      $(this).attr('src', $(this).data('still'));
      $(this).attr('data-state', 'still');
    }
  });

  $(document).on('mouseleave', '.image', function() {
    const imageState = $(this).attr('data-state');
    if (imageState == 'animate') {
      $(this).attr('src', $(this).data('still'));
      $(this).attr('data-state', 'still');
    } else {
      $(this).attr('src', $(this).data('animate'));
      $(this).attr('data-state', 'animate');
    }
  });

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

  $('#giphyButtons').on('click', function(event) {
    event.preventDefault();
    $('#giphy').empty();
  });

  $('#stopGiphy').on('click', function(event) {
    event.preventDefault();
    $('#giphy').empty();
  });

  $(document).on('click', '.motivate-btn', displayRating);

  renderButtons();
});

// const motivationDiv = $("<div class='motivate'>");
// for (let j = 0; j < motivation.length; j++) {
//   const giphyPic = response.data[j].url;
//   const giphy = $('<img>').append(`${giphyPic}`);
//   motivationDiv.append(giphy);
//   $('#giphys').append(motivationDiv);

// const giphyURLWithAPIKey = 'https://api.giphy.com/GET/v1/gifs/search?&api_key=sd0BFqPzqnPbrf9aXtsAg1gqTitD94RA';

// console.log(funnyCat.data);
// function setup() {

// }

// function gotData(data) {
//   console.log(data);
// }

// function draw() {

// }
