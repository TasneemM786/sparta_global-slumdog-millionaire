var question_counter = 0;
var questions = [
  {
    question:'Who wrote the Harry Potter series? ',
    a: 'Stephen King',
    b: 'Phillip Pullman',
    c: 'J K Rowling',
    d: 'Stephanie Meyer',
    answer: 'c'
  },
  {
    question:'Who did Matthew Perry play in Friends? ',
    a: 'Chandler',
    b: 'Ross',
    c: 'Monica',
    d: 'Joey',
    answer: 'a'
  },
  {
    question:'Who voiced the Genie in Aladdin? ',
    a: 'Will Smith',
    b: 'Robin Williams',
    c: 'Brad Pitt',
    d: 'Chris Pine',
    answer: 'b'
  },
  {
    question:'Which of these was Mozart\'s middle name? ',
    a: 'Johannes',
    b: 'Amadeus',
    c: 'Homer',
    d: 'Wolfgang',
    answer: 'd'
  },
  {
    question:'On a clear night about how many galaxies are visible to the naked eye? ',
    a: '2',
    b: 'One thousand',
    c: '10',
    d: 'Two billion',
    answer: 'a'
  },
  {
    question:'How many muscles do you have in total in all your fingers combined? ',
    a: '-1',
    b: '33',
    c: '5',
    d: '0',
    answer: 'd'
  },
  {
    question:'How many states in the USA? ',
    a: '50',
    b: '51',
    c: '52',
    d: '100',
    answer: 'a'
  }
];

var current_question = questions[question_counter];

function print_question(){
  var question_html = document.getElementById('question');
  var a_html = document.getElementById('a');
  var b_html = document.getElementById('b');
  var c_html = document.getElementById('c');
  var d_html = document.getElementById('d');

  question_html.innerHTML = current_question.question;
  a_html.innerHTML = current_question.a;
  b_html.innerHTML = current_question.b;
  c_html.innerHTML = current_question.c;
  d_html.innerHTML = current_question.d;
}

function submit_answer(e) {
  var answer = current_question['answer'];

  if (e.getAttribute('id') == answer) {
    console.log('YOU WIN');
    question_counter++;
    if (question_counter < questions.length) {
      current_question = questions[question_counter];
      print_question();
    } else {
      alert('YOU BEAT THE GAME');
    }
  } else {
    alert('You lose');
  }
}

print_question();
