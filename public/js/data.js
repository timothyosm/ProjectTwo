// When the page loads, grab all of our chirps

var value;
$.get("/api/memes", function (data) {
console.log('%c%s', 'color: #00e600', data);

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {
      



      var row = $("<div>");
      row.addClass("card-body");
      row.append("<img src='" + data[i].img + "'></img>");
      // row.append("<div id = 'voting'><button id='up' type='button'>👍🏻</button> <p id='scoreCounter' class='txt'>" + data[i].score + "</p> <button id='down'  type='button'>👎</button></div>");
      // row.append("<p class='txt'>" + data[i].score + "</p>");

      // row.append("<button type='button'>👎</button>");
      row.append("")
      $("#meme-area").prepend(row);

    }

  }


})

