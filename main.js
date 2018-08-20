var quotes = ['Reality continues to ruin my life.',
              'I\'m killing time while I wait for life to shower me with meaning and happiness.',
              'When life gives you lemons, chunk it right back.',
              'I\'m not dumb. I just have a command of thoroughly useless information.',
              'Life\'s a lot more fun when you aren\'t responsible for your actions.',
              'A day can really slip by when you\'re deliberately avoiding what you\'re supposed to do.',
              'I have all these great genes, but they\'re recessive. That\'s the problem here.',
              'Until you stalk and overrun, you cannot devour anyone.',
              'I\'m leaking brain lubricant.',
              'My book is called, Shut Up And Stop Whining: How To Do Something With Your Life Besides Think About Yourself.',
              'It\'s not denial. I\'m just selective about the reality I accept.',
              'There\'s never enough time to do all the nothing you want.',
              'In my opinion, we don\'t devote nearly enough scientific research to finding a cure for jerks.',
              'Who was the guy who first looked at a cow and said \'I think I\’ll drink whatever comes out of these when I squeeze ’em?',
              'I go to school, but I never learn what I want to know.',
              'I\'m learning skills I will use for the rest of my life by doing homework...procrastinating and negotiation.',
              'I find my life is a lot easier the lower I keep my expectations.',
              'God put me on earth to accomplish certain things. Right now, I’m so far behind, I’ll never die.',
              'You can drag my body to school but my spirit refuses to go.',
              'I\'m not dumb. I just have a command of thoroughly useless information.'
            ]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
