const quotes = [
    {  
      "quote": "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
      "author": "Rumi"
    },
    {
      "quote": "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
      "author": "Abdul Kalam"
    },
    {
      "quote": "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
      "author": "Abdul Kalam"
    },
    {
      "quote": "If You Can'T Make It Good, At Least Make It Look Good.",
      "author": "Bill Gates"
    },
    {
      "quote": "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
      "author": "Rumi"
    },
    {
      "quote": "It is bad for a young man to sin; but it is worse for an old man to sin.",
      "author": "Abu Bakr (R.A)"
    },
    {
      "quote": "If You Are Out To Describe The Truth, Leave Elegance To The Tailor.",
      "author": "Albert Einstein"
    },
    {
      "quote": "O man you are busy working for the world, and the world is busy trying to turn you out.",
      "author": "Abu Bakr (R.A)"
    },
    {
      "quote": "While children are struggling to be unique, the world around them is trying all means to make them look like everybody else.",
      "author": "Abdul Kalam"
    },
    {
      "quote": "These Capitalists Generally Act Harmoniously And In Concert, To Fleece The People.",
      "author": "Abraham Lincoln"
    },
    {
      "quote": "I Don'T Believe In Failure. It Is Not Failure If You Enjoyed The Process.",
      "author": "Oprah Winfrey"
    },
    {
      "quote": "Do not get elated at any victory, for all such victory is subject to the will of God.",
      "author": "Abu Bakr (R.A)"
    },
    {
      "quote": "Wear gratitude like a cloak and it will feed every corner of your life.",
      "author": "Rumi"
    },
    {
      "quote": "If you even dream of beating me you'd better wake up and apologize.",
      "author": "Muhammad Ali"
    },
    {
      "quote": "I Will Praise Any Man That Will Praise Me.",
      "author": "William Shakespeare"
    },
    {
      "quote": "One Of The Greatest Diseases Is To Be Nobody To Anybody.",
      "author": "Mother Teresa"
    },
    {
      "quote": "I'm so fast that last night I turned off the light switch in my hotel room and was in bed before the room was dark.",
      "author": "Muhammad Ali"
    },
    {
      "quote": "People Must Learn To Hate And If They Can Learn To Hate, They Can Be Taught To Love.",
      "author": "Nelson Mandela"
    },
    {
      "quote": "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
      "author": "Rumi"
    },
    {
      "quote": "The less of the World, the freer you live.",
      "author": "Umar ibn Al-Khattāb (R.A)"
    },
    {
      "quote": "Respond to every call that excites your spirit.",
      "author": "Rumi"
    },
    {
      "quote": "The Way To Get Started Is To Quit Talking And Begin Doing.",
      "author": "Walt Disney"
    },
    {
      "quote": "God Doesn'T Require Us To Succeed, He Only Requires That You Try.",
      "author": "Mother Teresa"
    },
    {
      "quote": "Speak any language, Turkish, Greek, Persian, Arabic, but always speak with love.",
      "author": "Rumi"
    },
    {
      "quote": "Happiness comes towards those which believe in him.",
      "author": "Ali ibn Abi Talib (R.A)"
    },
    {
      "quote": "Knowledge is of two kinds: that which is absorbed and that which is heard. And that which is heard does not profit if it is not absorbed.",
      "author": "Ali ibn Abi Talib (R.A)"
    },
    {

      "quote": "When I am silent, I have thunder hidden inside.",
      "author": "Rumi"
    },
    {
      "quote": "Technological Progress Is Like An Axe In The Hands Of A Pathological Criminal.",
      "author": "Albert Einstein"
    },
    {
      "quote": "No One Would Choose A Friendless Existence On Condition Of Having All The Other Things In The World.",
      "author": "Aristotle"
    },
    {
      "quote": "Life is a gamble. You can get hurt, but people die in plane crashes, lose their arms and legs in car accidents; people die every day. Same with fighters: some die, some get hurt, some go on. You just don't let yourself believe it will happen to you.",
      "author": "Muhammad Ali"
    }
]

function generateQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteSelected = quotes[randomIndex];
    document.getElementById('quote').innerHTML = `"${quoteSelected.quote}"`;
    document.getElementById('author').innerHTML = `-${quoteSelected.author}`;
}
