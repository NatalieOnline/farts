let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let resetEl = document.getElementById("reset-btn")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let counter = ` ${count} - `
    saveEl.textContent += counter
    countEl.textContent = 0
    count = 0
}

resetEl.addEventListener("click", function () {
    saveEl.textContent = "Previous entries: "
})