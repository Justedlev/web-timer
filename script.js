const root = document.querySelector('#root');
const stopBtn = document.querySelector('#stopBtn');
const runBtn = document.querySelector('#runBtn');
let span;
let input;

let value;
let interval;
let timer = {
    timeValue: 0,
    startTime: function () {
        let thisTime = this.timeValue;
        interval = setInterval(function () {
            if (thisTime === 0) {
                timer.stopTime();
            }
            value = --thisTime;
            span.innerHTML = `${value}`;
        }, 1000);
    },
    stopTime: function () {
        clearInterval(interval);
        swapAtributesBtn(runBtn, stopBtn);
        createInputElement();
        input.value = value;
        span.remove();
    }
};

root.prepend(createInputElement());

stopBtn.onclick = function () {
    timer.stopTime();
}

runBtn.onclick = function () {
    timer.timeValue = parseInt(input.value);
    if (timer.timeValue > 0) {
        swapAtributesBtn(stopBtn, runBtn);
        createSpanElement();
        span.innerHTML = `${timer.timeValue}`;
        input.remove();
        timer.startTime();
    }
}

function swapAtributesBtn(el1, el2) {
    el1.removeAttribute('disabled');
    el2.setAttribute('disabled', '');
}

function createInputElement() {
    input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('id', 'timeInput');
    root.prepend(input);
    return input;
}

function createSpanElement() {
    span = document.createElement('span');
    span.setAttribute('id', 'timerArea');
    root.prepend(span);
    return span;
}