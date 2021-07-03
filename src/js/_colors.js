// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#4aff4a',
  '#db4aff',
  '#1cf7ff',
  '#009688',
];

const buttonStart = document.querySelector('[data-action="start"]');
const buttonStop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

// =========================================
const bodyColor = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };

      const maxLengthArrColors = colors.length - 1;
      const randomIndexFromColors = randomIntegerFromInterval(0, maxLengthArrColors);
      const randomColor = colors[randomIndexFromColors];
      console.log(randomColor);
      body.style.backgroundColor = randomColor;
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

buttonStart.addEventListener('click', () => {
  bodyColor.start();
});

buttonStop.addEventListener('click', () => {
  bodyColor.stop();
});
// =========================================
