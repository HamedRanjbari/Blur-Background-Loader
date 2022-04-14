let $ = document
let bg = $.querySelector(".bg")
let text = $.querySelector(".text")
let percent = 0

window.addEventListener("load", () => {
    bg.style.filter = "blur(0)"

    let timer = setInterval(() => {
            percent++
            text.textContent = `${percent}%`
        if(percent > 99) {
            clearInterval(timer)
            text.style.display = "none"
        }
    },30)
})
