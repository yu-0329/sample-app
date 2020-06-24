'use strict';

// ここから下が初級（quiz1.html）の問題
{
  const question = document.getElementById('question');
  const questionImage = document.getElementById('question_image');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const next = document.getElementById('next');
  const result = document.getElementById('result');
  const modal = document.getElementById('modal');
  // const scoreLabel = document.querySelector('#result > p');
  console.log('aaa');

  const quizSet = shuffle([
    {q: 'このキャラクターの名前は何でしょう？', i: 'image/83067137.png', c: ['ポムポムプリン', 'トトロ', 'ボムボムヨーグルト']},
    {q: 'このキャラクターの名前は何でしょう？', i: 'image/shinamon.png', c: ['シナモン', 'ココア', 'ミルク']},
    {q: 'このキャラクターの名前は何でしょう？', i: 'image/kero.jpg', c: ['けろけろけろっぴ', 'けろけろけろっぺ', 'けろけろけろっぱ']},
    {q: 'このキャラクターの名前は何でしょう？', i: 'image/kirimi.png', c: ['きりみちゃん', 'さかなちゃん', 'さしみちゃん']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/hello.png', c: ['ハローキティ', 'けろけろけろっぴ', 'ポムポムプリン']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/batumaru.jpg', c: ['バッドばつ丸', 'グッドばつ丸', 'グッドはな丸']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/mymelo.PNG', c: ['マイメロディ', 'ピアノちゃん', 'メロディちゃん']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/gudetama.png', c: ['ぐでたま', 'ゆでたま', '目玉焼き']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/kikirara2.png', c: ['リトルツインスターズ', 'ぐでたま', 'シナモン']},
    {q: 'このキャラクターの名前は何でしょう？', i:'image/kuromi.png', c: ['クロミ', 'マイメロディ', 'ハローキティ']},
    // {q: 'このキャラクターの名前は何でしょう？', i:'image/pochi.PNG', c: ['ポチ', 'ワニ', 'タマ']},
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
      li.classList.add();
      score++;
      // btn.classList.remove('disabled');
      alert("正解！");
      // currentNum++;
      // setQuiz();
      nextScore();
    } else {
      li.classList.add();
      // btn.classList.remove('disabled');
      const currentNumQuiz = quizSet[currentNum].c[0];
      alert("残念！\n正解は(" + currentNumQuiz + ")です。");
      // currentNum++;
      // setQuiz();
      nextScore();
    }
    
    // btn.classList.remove('disabled');
    
  }

  function setQuiz() {
    isAnswered = false;
    question.textContent = quizSet[currentNum].q;
    questionImage.src = quizSet[currentNum].i;
    console.log(currentNum);
    questionImage.classList.remove('question_image');
    setTimeout(() => questionImage.classList.add('question_image'));

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

    // if (currentNum === 4) {
    //   btn.textContent = 'Show Score';
    // }
  }

    setQuiz();

    function nextScore() {
      // if (btn.classList.contains('disabled')) {
      //   return;
      // }
    // btn.classList.add('hidden');
    
    document.getElementById("CSound").play();
  
    if (currentNum === 4) {
      const scoreLabel = document.getElementById('aaa');
      result.classList.remove('hidden');
      // let total = Math.floor(score / quizSet.length * 100);
      let total = Math.floor(score / (quizSet.length / 2) * 100);
      scoreLabel.textContent = total;
      const scoreComments = document.getElementById('score_comments');
      const img = document.getElementById('score_image');
      if (total === 100) {
        scoreComments.textContent = 'おめでとう！';
        img.src = "image/tensai.png";
        img.classList.remove('score_image');
        setTimeout(() => img.classList.add('score_image'))
      } else if (total === 80 || total === 90) {
        scoreComments.textContent = '惜しい！あと少し！';
        img.src = "image/oshii.png";
        img.classList.remove('score_image');
        setTimeout(() => img.classList.add('score_image'))
      } else if (total === 60 || total === 70) {
        scoreComments.textContent = 'まあまあかな！';
        img.src = "image/bee.png";
        img.classList.remove('score_image');
        setTimeout(() => img.classList.add('score_image'))
      } else {
        scoreComments.textContent = 'まだまだだね';
        img.src = "image/guruguru.png";
        img.classList.remove('score_image');
        setTimeout(() => img.classList.add('score_image'))
      }
    } else {
      currentNum++;
      setQuiz();
    }

    
  };

  // ここまでが初級（quiz1.html）の問題
  



}