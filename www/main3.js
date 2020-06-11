'use strict';

{
  const question3 = document.getElementById('question3');
  const questionImage3 = document.getElementById('question_image3');
  const choices3 = document.getElementById('choices3');
  const btn3 = document.getElementById('btn3');
  const result3 = document.getElementById('result3');
  // const scoreLabel = document.querySelector('#result > p');
  

  const quizSet3 = shuffle([
    {q: 'このキャラクターの名前は何でしょう？', i: '../image/', c: ['リズムくん', 'オンプくん', 'メロディくん']},
    {q: 'このキャラクターの名前は何でしょう？', i: '../image/', c: ['みるく', 'シナモン', 'シフォン']},
    {q: 'このキャラクターの名前は何でしょう？', i: '../image/', c: ['カプチーノ', 'モカ', 'エスプレッソ']},
    {q: 'このキャラクターの名前は何でしょう？', i: '../image/', c: ['たくわんわん', '', '']},
    {q: 'このキャラクターの名前は何でしょう？', i:'../image/', c: ['けろりーぬ', 'けろりんりん', 'けろりんちょ']},
    {q: 'このキャラクターの名前は何でしょう？', i:'../image/', c: ['マフィン', '', '']},
    {q: 'このキャラクターの名前は何でしょう？', i:'../image/', c: ['マカロン', '', '']},
    {q: 'このキャラクターの名前は何でしょう？', i:'../image/', c: ['ミント', 'ハーブ', 'けろけろけろっぴ']},
    {q: 'このキャラクターの名前は何でしょう？', i:'../image/', c: ['さゆりちゃん', 'たこみちゃん', 'たこえもん']},
    {q: 'このキャラクターの名前は何でしょう？', i:'../image/pochi.PNG', c: ['ポチ', 'ワニ', 'タマ']},
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

    if (li.textContent === quizSet3[currentNum].c[0]) {
      li.classList.add('correct');
      score++;
    } else {
      li.classList.add('wrong');
    }

    btn3.classList.remove('disabled');
  }

  function setQuiz3() {
    isAnswered = false;
    question3.textContent = quizSet3[currentNum].q;
    questionImage3.src = quizSet3[currentNum].i;
    questionImage3.classList.remove('question_image3');
    setTimeout(() => questionImage3.classList.add('question_image3'));

    while(choices3.firstChild) {
      choices3.removeChild(choices3.firstChild);
    }

    const shuffledChoices3 = shuffle([...quizSet3[currentNum].c]);
    shuffledChoices3.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices3.appendChild(li);
    });

    if (currentNum === 4) {
      btn3.textContent = 'Show Score';
    }
  }

    setQuiz3();

    btn3.addEventListener('click', () => {
      if (btn3.classList.contains('disabled')) {
        return;
      }
    btn3.classList.add('disabled');
    
  
    if (currentNum === 4) {
      const scoreLabel = document.getElementById('aaa');
      result3.classList.remove('hidden');
      // let total = Math.floor(score / quizSet.length * 100);
      let total = Math.floor(score / (quizSet3.length / 2) * 100);
      scoreLabel.textContent = total;
      const scoreComments = document.getElementById('score_comments');
      const img = document.getElementById('score_image');
      if (total === 100) {
        scoreComments.textContent = 'おめでとう！';
        img.src = "../image/tensai.png";
        img.classList.remove('score_image');
        setTimeout(() => img.classList.add('score_image'))
      } else if (total === 80 || total === 90) {
        scoreComments.textContent = '惜しい！あと少し！';
        img.src = "../image/oshii.png";
        img.classList.remove('score_image');
        setTimeout(() => img.classList.add('score_image'))
      } else if (total === 60 || total === 70) {
        scoreComments.textContent = 'まあまあかな！';
        img.src = "../image/bee.png";
        img.classList.remove('score_image');
        setTimeout(() => img.classList.add('score_image'))
      } else {
        scoreComments.textContent = 'まだまだだね';
        img.src = "../image/guruguru.png";
        img.classList.remove('score_image');
        setTimeout(() => img.classList.add('score_image'))
      }
    } else {
      currentNum++;
      setQuiz3();
    }

  });

}