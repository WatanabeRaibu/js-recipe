const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choicesContainer = document.getElementById("choices-container")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
  text: "この星の名前は何でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
    {
      text: "タイタン",
      feedback: "不正解！",
    },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // クイズの選択肢を読み取って画面に表示する
  for (let i = 0; i < quiz.choices.length; i++) {
    const button = createChoiceButton(quiz.choices[i], i)
    choicesContainer.appendChild(button)
  }
}

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

// choiceNumber番目の選択肢のボタンを作る関数
const createChoiceButton = (choice, choiceNumber) => {
  const button = document.createElement("button")
  // 選択肢（ボタン）の中身をセットする
  button.textContent = choice.text
  // 選択肢（ボタン）をクリックした時に実行する関数をセットする
  button.onclick = function () {
    choose(choiceNumber)
  }
  // 生成したボタンをreturnする
  return button
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
