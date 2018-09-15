//inspired by shannonj498  https://github.com/shannonj498/memory-matching-game/blob/master/index.html

/*
 * Create a list that holds all of your cards_list
 */
 let new_list = [];
 let cards_list = ["diamond", "diamond", "paper-plane-o", "paper-plane-o", "anchor", "anchor", "bolt", "bolt", "cube", "cube", "leaf", "leaf", "bicycle", "bicycle", "bomb", "bomb"];


/*
 * Display the cards_list on the page
 *   - shuffle the list of cards_list using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
 // shuffle the list of cards_list using the provided "shuffle" method below (function from http://stackoverflow.com/a/2450976)
 // Shuffle function from http://stackoverflow.com/a/2450976
 function shuffle(array) {
     var currentIndex = array.length, temporaryValue, randomIndex;

     while (currentIndex !== 0) {
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex -= 1;
         temporaryValue = array[currentIndex];
         array[currentIndex] = array[randomIndex];
         array[randomIndex] = temporaryValue;
     }

     return array;
 }


//loop through each card and create its HTML
 function cardHtml() {
   let cards = shuffle(cards_list);
   cards.forEach(function(card) {
     $(".deck").append('<li><i class="card fa fa-' + card + '"></i></li>');
   })
 }

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards_list (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards_list match
 *    + if the cards_list do match, lock the cards_list in the open position (put this functionality in another function that you call from this one)
 *    + if the cards_list do not match, remove the cards_list from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards_list have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 // + if the cards_list do not match, remove the cards_list from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 function misMatch() {
   $(".card").removeClass("show open");
   new_list = [];
 }

 //  + if the cards_list do match, lock the cards_list in the open position (put this functionality in another function that you call from this one)
 function match_cards() {

   $(".card").on("click", function() {
     if ($(this).hasClass("open show"))
     {
       return;
     }

     $(this).toggleClass("open show");
     new_list.push($(this));

     if (new_list.length === 2) {
       if (new_list[0][0].classList[2] === new_list[1][0].classList[2]) {
       new_list[0][0].classList.add("match");
       new_list[1][0].classList.add("match");
       $(new_list[0]).off('click');
       $(new_list[1]).off('click');
       new_list = [];
       } else {
       setTimeout(misMatch, 1208);
       setTimeout(new_list, 1189);
       }
     }
   })
 }


 cardHtml();
 match_cards();
