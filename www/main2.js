'use strict';

{
  // ここから中級（quiz2.html）の問題

  const question2 = document.getElementById('question2');
  const questionImage2 = document.getElementById('question_image2');
  const choices2 = document.getElementById('choices2');
  const btn2 = document.getElementById('btn2');
  const result2 = document.getElementById('result2');
  // const scoreLabel = document.querySelector('#result > p');
  

  const quizSet2 = shuffle([
    {q: 'このキャラクターの名前は何でしょう？', i: 'image/usahana.png', c: ['ウサハナ', 'マイメロディ', 'ハナウサ']},
    {q: 'このキャラクターの名前は何でしょう？', i: 'image/monkichi.png', c: ['おさるのもんきち', 'おさるのジョージ', 'おさるのぽんきち']},
    {q: 'このキャラクターの名前は何でしょう？', i: 'image/korokoro2.PNG', c: ['コロコロクリリン', 'ポロポロピロリン', 'メロメロメロリン']},
    {q: 'このキャラクターの名前は何でしょう？', i: 'image/han.PNG', c: ['ハンギョドン', 'ハンギョジン', 'ハンギョギョン']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/retuko.jpg', c: ['アグレッシブ烈子', 'テンション高子', 'マダガスカル由美子']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/sam.PNG', c: ['タキシードサム', 'おさるのもんきち', 'ポムポムプリン']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/pocha.png', c: ['ポチャッコ', 'ペチャンコ', 'ピチャッコ']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/piano.png', c: ['ピアノちゃん', 'ヒツジちゃん', 'オンプちゃん']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/ahiru.PNG', c: ['あひるのペックル', 'うさぎのペックル', 'かえるのペックル']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/mimi.png', c: ['ハローミミィ', 'ハローキティ', 'キティちゃん']},
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

  

    // btn2を書き換える前のやつ

    if (li.textContent === quizSet2[currentNum].c[0]) {
      li.classList.add();
      score++;
      // btn2.classList.remove('disabled');
      alert("正解！");
      nextScore();
    } else {
      li.classList.add();
      // btn2.classList.remove('disabled');
      const currentNumQuiz = quizSet2[currentNum].c[0];
      alert("残念！\n正解は(" + currentNumQuiz + ")です。");
      nextScore();
    }

    // btn2.classList.remove('disabled');

    // ここまでbtn2のやつ
  }

  function setQuiz2() {
    isAnswered = false;
    question2.textContent = quizSet2[currentNum].q;
    questionImage2.src = quizSet2[currentNum].i;
    questionImage2.classList.remove('question_image2');
    setTimeout(() => questionImage2.classList.add('question_image2'));

    while(choices2.firstChild) {
      choices2.removeChild(choices2.firstChild);
    }

    const shuffledChoices2 = shuffle([...quizSet2[currentNum].c]);
    shuffledChoices2.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices2.appendChild(li);
    });

    

  // btn2の処理

    // if (currentNum === 4) {
    //   btn2.textContent = 'Show Score';
    // }
  }

    setQuiz2();

    function nextScore() {
    //   if (btn2.classList.contains('disabled')) {
    //     return;
    //   }
    // btn2.classList.add('disabled');
    
  // btn2の処理ここまで

    if (currentNum === 4) {
      const scoreLabel2 = document.getElementById('aaa2');
      result2.classList.remove('hidden');
      // let total = Math.floor(score / quizSet.length * 100);
      let total = Math.floor(score / (quizSet2.length / 2) * 100);
      scoreLabel2.textContent = total;
      const scoreComments2 = document.getElementById('score_comments2');
      const img2 = document.getElementById('score_image2');
      if (total === 100) {
        scoreComments2.textContent = 'おめでとう！';
        img2.src = "image/tensai.png";
        img2.classList.remove('score_image2');
        setTimeout(() => img2.classList.add('score_image2'))
      } else if (total === 80 || total === 90) {
        scoreComments2.textContent = '惜しい！あと少し！';
        img2.src = "image/oshii.png";
        img2.classList.remove('score_image2');
        setTimeout(() => img2.classList.add('score_image2'))
      } else if (total === 60 || total === 70) {
        scoreComments2.textContent = 'まあまあかな！';
        img2.src = "image/bee.png";
        img2.classList.remove('score_image2');
        setTimeout(() => img2.classList.add('score_image2'))
      } else {
        scoreComments2.textContent = 'まだまだだね';
        img2.src = "image/guruguru.png";
        img2.classList.remove('score_image2');
        setTimeout(() => img2.classList.add('score_image2'))
      }
    } else {
      currentNum++;
      setQuiz2();
    }

  };
    // ここまでが中級（quiz2.html）の問題
}