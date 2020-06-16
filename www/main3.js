'use strict';

{
  const question3 = document.getElementById('question3');
  const questionImage3 = document.getElementById('question_image3');
  const choices3 = document.getElementById('choices3');
  const btn3 = document.getElementById('btn3');
  const result3 = document.getElementById('result3');
  // const scoreLabel = document.querySelector('#result > p');
  

  const quizSet3 = shuffle([
    {q: 'このキャラクターの名前は何でしょう？', i: 'image/rizumu2.PNG', c: ['リズムくん', 'オンプくん', 'メロディくん']},
    {q: 'このキャラクターの名前は何でしょう？', i: 'image/milk.PNG', c: ['みるく', 'シナモン', 'シフォン']},
    {q: 'このキャラクターの名前は何でしょう？', i: 'image/cap.PNG', c: ['カプチーノ', 'モカ', 'エスプレッソ']},
    {q: 'このキャラクターの名前は何でしょう？', i: 'image/takuwan.PNG', c: ['たくわんわん', 'かまぼこちゃん', 'きりみちゃん']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/kerorinu.PNG', c: ['けろりーぬ', 'けろりんりん', 'けろりんちょ']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/mafin.PNG', c: ['マフィン', 'タルト', 'カスタード']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/macaron.PNG', c: ['マカロン', 'ポムポムプリン', 'クッキー']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/mint2.png', c: ['ミント', 'ハーブ', 'けろけろけろっぴ']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/syr.PNG', c: ['さゆりちゃん', 'たこみちゃん', 'たこえもん']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/pochi.PNG', c: ['ポチ', 'ワニ', 'タマ']},
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
      li.classList.add();
      score++;
      alert("正解！");
      nextScore();
    } else {
      li.classList.add();
      const currentNumQuiz = quizSet3[currentNum].c[0];
      alert("残念！\n正解は(" + currentNumQuiz + ")です。");
      nextScore();
    }

    // btn3.classList.remove('disabled');
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

    // if (currentNum === 4) {
    //   btn3.textContent = 'Show Score';
    // }
  }

    setQuiz3();

    function nextScore() {
    //   if (btn3.classList.contains('disabled')) {
    //     return;
    //   }
    // btn3.classList.add('disabled');
    
  
    if (currentNum === 4) {
      const scoreLabel = document.getElementById('aaa3');
      result3.classList.remove('hidden');
      // let total = Math.floor(score / quizSet.length * 100);
      let total = Math.floor(score / (quizSet3.length / 2) * 100);
      scoreLabel.textContent = total;
      const scoreComments3 = document.getElementById('score_comments3');
      const img = document.getElementById('score_image3');
      if (total === 100) {
        scoreComments3.textContent = 'おめでとう！';
        img.src = "image/waai.png";
        img.classList.remove('score_image3');
        setTimeout(() => img.classList.add('score_image3'))
      } else if (total === 80 || total === 90) {
        scoreComments3.textContent = '惜しい！あと少し！';
        img.src = "image/pien.png";
        img.classList.remove('score_image3');
        setTimeout(() => img.classList.add('score_image3'))
      } else if (total === 60 || total === 70) {
        scoreComments3.textContent = 'まあまあかな！';
        img.src = "image/pianochan.png";
        img.classList.remove('score_image3');
        setTimeout(() => img.classList.add('score_image3'))
      } else {
        scoreComments3.textContent = 'まだまだだね';
        img.src = "image/toku.png";
        img.classList.remove('score_image3');
        setTimeout(() => img.classList.add('score_image3'))
      }
    } else {
      currentNum++;
      setQuiz3();
    }

  };

}