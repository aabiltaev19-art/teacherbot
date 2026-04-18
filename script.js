const chat = document.getElementById("chat-box");
const input = document.getElementById("input");

let step = 0;

function add(text, type) {
  const div = document.createElement("div");
  div.className = type;
  div.innerHTML = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function send() {
  const text = input.value.toLowerCase();
  if (!text) return;

  add(text, "user");

  setTimeout(() => {
    bot(text);
  }, 500);

  input.value = "";
}

function bot(text) {

  if (text === "начать") {
    step = 1;
    add("Вопрос 1: Что такое HTML?", "bot");
    return;
  }

  if (step === 1) {
    if (text.includes("язык")) {
      add("✅ Правильно! HTML — это язык разметки.", "bot");
      step = 2;
      add("Вопрос 2: Для чего нужен CSS?", "bot");
    } else {
      add("❌ Неправильно. Попробуй еще раз.", "bot");
    }
    return;
  }

  if (step === 2) {
    if (text.includes("стиль") || text.includes("дизайн")) {
      add("✅ Верно! CSS отвечает за внешний вид.", "bot");
      step = 3;
      add("Вопрос 3: Что делает JavaScript?", "bot");
    } else {
      add("❌ Подумай еще.", "bot");
    }
    return;
  }

  if (step === 3) {
    if (text.includes("интерактив")) {
      add("🎉 Отлично! Ты прошел тест!", "bot");
      step = 0;
    } else {
      add("❌ Почти. Подумай еще.", "bot");
    }
    return;
  }

  add("Напиши 'начать', чтобы начать тест.", "bot");
}
