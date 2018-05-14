var quotes = ['Reality continues to ruin my life.',
              'I\'m killing time while I wait for life to shower me with meaning and happiness.',
              'When life gives you lemons, chunk it right back.',
              'I\'m not dumb. I just have a command of thoroughly useless information.',
              'Life\'s a lot more fun when you aren\'t responsible for your actions.',
              'A day can really slip by when you\'re deliberately avoiding what you\'re supposed to do.',
              'I have all these great genes, but they\'re recessive. That\'s the problem here.',
              'Until you stalk and overrun, you cannot devour anyone.',
              'I\'m leaking brain lubricant.',
              'My book is called, Shut Up And Stop Whining: How To Do Something With Your Life Besides Think About Yourself.'
            ]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
