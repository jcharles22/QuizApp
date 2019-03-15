const STORE =[
  {
    question: "What character do you play as in The Legend of Zelda?",
    ans1: 'Ganon',
    ans2: 'Link',
    ans3: 'Zelda',
    ans4: 'Sheik',
    correct: "Link"
},
{
  question: "What is the final track in all the Mario Kart seires?",
  ans1: "Bower's Castle",
  ans2: "Mario Circuit",
  ans3: "Peach Gardens",
  ans4: "Rainbow Road",
  correct: "Rainbow Road"
},
{
  question: "What is Master Chief's first Name from Halo",
  ans1: 'Ryan',
  ans2: 'John',
  ans3: 'David',
  ans4: 'Nathan',
  correct: "John"
},
{
  question: "How many stars in total can you collect in Mario 64?",
  ans1: 120,
  ans2: 100,
  ans3: 99,
  ans4: 101,
  correct: 120
},
{
  question: "The last name of the main character in the Tomb Raider series?",
  ans1: "Smith",
  ans2: "Wilson",
  ans3: "Croft",
  ans4: "Dean",
  correct: "Croft"
},{
  question: "What is the name of Nintendo's 1st mobile console?",
  ans1: '3ds',
  ans2: 'Gameboy',
  ans3: 'Nokia',
  ans4: 'Switch',
  correct: "Gameboy"
},
{
question: "Which of these is not a Castlevania protagonist?",
ans1: "Simon Belmont",
ans2: "Richter Belmont",
ans3: "Trevor Belmont",
ans4: "Thomas Belmont",
correct: "Thomas Belmont"
},
{
question: "When was fortnite released?",
ans1: '2019',
ans2: '2017',
ans3: '2002',
ans4: '2010',
correct: "2017"
},
{
question: "What color is Spyro in Spyro The Dragon?",
ans1: "Purple",
ans2: "Green",
ans3: "Red",
ans4: "Blue",
correct: "Purple"
},
{
question: "What does NES stand for?",
ans1: "Nintendo Entertainment System",
ans2: "National Entertainment Source",
ans3: "National Electroinc Standards",
ans4: "Not Enough Sports",
correct: "Nintendo Entertainment System"
},
  
];
let page = 0;
let score = 0;

function checkAnswer(answer) {
  if(answer != STORE[page-1].correct) {
    console.log('wrong');
    return false;
  } else {
    console.log('true');
    score++;
    return true;
  }
}

function displayAnswer(checkedAnswer) {
  console.log(checkedAnswer);
  $('#js-submit-button').hide();
  if(checkedAnswer){
    console.log('yes');
    $('.submit').after('<button id="js-next-button">next</button>');
    $('.answer').html('<p class="answer">Correct!</p>');
  } else {
    console.log('no');
    $('.submit').after('<button id="js-next-button">next</button>');
    $('.answer').html(`<p class="answer">- ${STORE[page-1].correct} is the correct answer -</p>`);
  }
  
  
}

function pressedSubmit() {
  $('#container').on('click', '#js-submit-button', function(e){
    e.preventDefault();
    let answer = $('input:checked').siblings('label').text();
    let checkedAnswer = checkAnswer(answer);
    displayAnswer(checkedAnswer);
    page++;
    console.log('submit pressed');
  });
}

function questionTemplate() {
  return `
    <section id="question-page" role="main">
    <h2 id="question">${STORE[page-1].question}</h2>
    <form>
      <fieldset id='questionForm'>
        <legend>
          Question ${page}
        </legend>
        <div>
          <input id="answer1" type="radio" name="option" checked></input>
          <label for = "answer1">${STORE[page-1].ans1}</label>
        </div>
  
        <div>
          <input id="answer2" type="radio" name="option"></input>
          <label for ="answer2">${STORE[page-1].ans2}</label>
        </div>
  
        <div>
          <input id="answer3" type="radio" name="option"></input>
          <label for ="answer3">${STORE[page-1].ans3}</label>
        </div>
  
        <div>
          <input id="answer4" type="radio" name="option"></input>
          <label for = "answer4">${STORE[page-1].ans4}</label>
        </div>
      </fieldset>
      <section class='inline'>
        <section class='submit'>
          <button id="js-submit-button">Submit</button>
        </section>
        <p>${score} out of ${page-1} correct</p>
      </section>
      <section class='answer'>
      </section>
    </form>
  </section>
  `;

}
function pressedNext() {
  $("#container").on('click', '#js-next-button', e => {
    e.preventDefault();
    renderPage();
  });
}

function playAgain() {
  $('#container').on('click', '#js-button-play-again', e => {
    page =1;
    score =0;
    
    renderPage();
  });
};

function results() {
  $('#container').html(`
  <h2>Your score ${score} out of 10</h2>
  <button id ='js-button-play-again'>Play Again!</button>
  `);
};

function renderPage() {
  if(page <=10) {
  console.log('render');
  let question = questionTemplate();
  $('#container').html(question);
  }
  else{
    results();
  }

}

function pressedStart() {
  $('#js-start-button').on('click', e => {
  page++;
  renderPage();
});
}

function runGame() {
  console.log('game running');
  pressedStart();
  pressedSubmit();
  pressedNext();
  playAgain();
}



$(runGame);