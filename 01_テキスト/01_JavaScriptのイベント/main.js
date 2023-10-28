const button = document.getElementById("button")

const alertMessage = function () {
  alert("クリックしたね")
}

button.onclick = alertMessage()
// 関数を登録
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function (e) {
  console.log(e.target.value)
}

inputText.oninput = logValue
inputDate.oninput = logValue
document.onkeydown = function (e) {
  console.log(e.key)
}
const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")

let count = 0

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function () {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}

const figure = document.getElementById("figure")
const squareButton = document.getElementById("square-button")
const circleButton = document.getElementById("circle-button")

circleButton.onclick = function () {
  // figure に rounded クラスを追加する
  figure.classList.add("rounded")
}

squareButton.onclick = function () {
  // figure から rounded クラスを削除する
  figure.classList.remove("rounded")
}
