'use strict';

{
  const question = document.getElementById('question');
  const questionImage = document.getElementById('question_image');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  // const scoreLabel = document.querySelector('#result > p');

  const scoreLabel = document.querySelector('#scoreLabel > p');
  



  const quizSet = shuffle([
    {q: 'このキャラクターの名前は何でしょう？', i: '../image/83067137.png', c: ['ポムポムプリン', 'トトロ', 'ボムボムヨーグルト']},
    {q: 'このキャラクターの名前は何でしょう？', i: '../image/shinamon.png', c: ['シナモン', 'ココア', 'ミルク']},
    {q: 'このキャラクターの名前は何でしょう？', i: '../image/kero.jpg', c: ['けろけろけろっぴ', 'けろけろけろっぺ', 'けろけろけろっぱ']},
    {q: 'このキャラクターの名前は何でしょう？', i: '../image/kirimi2.jpg', c: ['きりみちゃん', 'さかなちゃん', 'さしみちゃん']},
    {q: 'このキャラクターの名前は何でしょう？', i:'../image/retuko.jpg', c: ['アグレッシブ烈子', 'テンション高子', 'マダガスカル由美子']},
    {q: 'このキャラクターの名前は何でしょう？', i:'../image/batumaru.jpg', c: ['バッドばつ丸', 'グッドばつ丸', 'グッドはな丸']},
    {q: 'このキャラクターの名前は何でしょう？', i:'../image/pocha.png', c: ['ポチャッコ', 'ペチャンコ', 'ピチャッコ']},
    {q: 'このキャラクターの名前は何でしょう？', i:'../image/gudetama.png', c: ['ぐでたま', 'ゆでたま', '目玉焼き']},
    {q: 'このキャラクターの名前は何でしょう？', i:'../image/syr.jpg', c: ['さゆりちゃん', 'たこみちゃん', 'たこえもん']},
    {q: 'このキャラクターの名前は何でしょう？', i:'../image/kuromi.png', c: ['クロミ', 'マイメロディ', 'ハローキティ']},
  ]);
  let currentNum = 0;
  let isAnswered;
  let score = 0;


  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnswer(li) {
    if (isAnswered === true) {
      return;
    }
    isAnswered = true;

    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add('correct');
      score++;
    } else {
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');
  }

  function setQuiz() {
    isAnswered = false;
    question.textContent = quizSet[currentNum].q;
    questionImage.src = quizSet[currentNum].i;

    while(choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });

    if (currentNum === quizSet.length - 1) {
      btn.textContent = 'Show Score';
    }
  }

    setQuiz();

    btn.addEventListener('click', () => {
      if (btn.classList.contains('disabled')) {
        return;
      }
    btn.classList.add('disabled');

    if (currentNum === quizSet.length - 1) {
      result.classList.remove('hidden');
      let total = Math.floor(score / quizSet.length * 100);
      console.log(total);
      scoreLabel.textContent = total;
      
    } else {
      currentNum++;
      setQuiz();
    }
  });

  

}