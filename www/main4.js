'use strict';

{
 

  const question4 = document.getElementById('question4');
  const questionImage4 = document.getElementById('question_image4');
  const choices4 = document.getElementById('choices4');
  const btn4 = document.getElementById('btn4');
  const result4 = document.getElementById('result4');
  // const scoreLabel = document.querySelector('#result > p');
  

  const quizSet4 = shuffle([
    {q: 'このキャラクターの名前は何でしょう？', i: 'image/kobuta.png', c: ['こぶたのピッポ', 'こぶたのブーちゃん', 'こぶたのハム']},
    {q: 'このキャラクターの名前は何でしょう？', i: 'image/korochan.png', c: ['コロちゃん', 'クマちゃん', 'クロちゃん']},
    {q: 'このキャラクターの名前は何でしょう？', i: 'image/koro.png', c: ['ころっぴ', 'けろっぴ', 'きろっぴ']},
    // {q: 'このキャラクターの名前は何でしょう？', i: 'image/tako.png', c: ['チューチューターコ', 'チューチューユーコ', 'チューチューミーコ']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/poron.png', c: ['テルテルポロン', 'テルテルピロン', 'テルテルメロン']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/torisan.png', c: ['とりさん', 'ピーちゃん', 'ピー子さん']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/tuesday.png', c: ['チューズディ', 'ウェンズディ', 'サーズディ']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/ebi.png', c: ['エビフライ', 'エビちゃん', 'エビ天くん']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/nya.png', c: ['ニャニィニュニェニョン', 'カキクケコン', 'ミャミィミュミェミョン']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/mimi.png', c: ['ハローミミィ', 'ハローキティ', 'キティちゃん']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/sawara.png', c: ['さわらくん', 'きりみちゃん', 'さばくん']},
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

  

    // btn4を書き換える前のやつ

    if (li.textContent === quizSet4[currentNum].c[0]) {
      li.classList.add();
      score++;
      // btn4.classList.remove('disabled');
      alert("正解！");
      nextScore();
    } else {
      li.classList.add();
      // btn4.classList.remove('disabled');
      const currentNumQuiz = quizSet4[currentNum].c[0];
      alert("残念！\n正解は(" + currentNumQuiz + ")です。");
      nextScore();
    }

    // btn4.classList.remove('disabled');

    // ここまでbtn4のやつ
  }

  function setQuiz4() {
    isAnswered = false;
    question4.textContent = quizSet4[currentNum].q;
    questionImage4.src = quizSet4[currentNum].i;
    questionImage4.classList.remove('question_image4');
    setTimeout(() => questionImage4.classList.add('question_image4'));

    while(choices4.firstChild) {
      choices4.removeChild(choices4.firstChild);
    }

    const shuffledChoices4 = shuffle([...quizSet4[currentNum].c]);
    shuffledChoices4.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices4.appendChild(li);
    });

    

  // btn4の処理

    // if (currentNum === 4) {
    //   btn4.textContent = 'Show Score';
    // }
  }

    setQuiz4();

    function nextScore() {
    //   if (btn4.classList.contains('disabled')) {
    //     return;
    //   }
    // btn4.classList.add('disabled');
    
  // btn4の処理ここまで

    if (currentNum === 4) {
      const scoreLabel4 = document.getElementById('aaa4');
      result4.classList.remove('hidden');
      // let total = Math.floor(score / quizSet.length * 100);
      let total = Math.floor(score / (quizSet4.length / 2) * 100);
      scoreLabel4.textContent = total;
      const scoreComments4 = document.getElementById('score_comments4');
      const img4 = document.getElementById('score_image4');
      if (total === 100) {
        scoreComments4.textContent = 'おめでとう！';
        img4.src = "image/ikiru.png";
        img4.classList.remove('score_image4');
        setTimeout(() => img4.classList.add('score_image4'))
      } else if (total === 80 || total === 90) {
        scoreComments4.textContent = '惜しい！あと少し！';
        img4.src = "image/batumaru2.png";
        img4.classList.remove('score_image4');
        setTimeout(() => img4.classList.add('score_image4'))
      } else if (total === 60 || total === 70) {
        scoreComments4.textContent = 'まあまあかな！';
        img4.src = "image/hamigaki.png";
        img4.classList.remove('score_image4');
        setTimeout(() => img4.classList.add('score_image4'))
      } else {
        scoreComments4.textContent = 'まだまだだね';
        img4.src = "image/shindoi.png";
        img4.classList.remove('score_image4');
        setTimeout(() => img4.classList.add('score_image4'))
      }
    } else {
      currentNum++;
      setQuiz4();
    }

  };
    
}