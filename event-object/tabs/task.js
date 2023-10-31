const listObjs = Array.from(document.querySelectorAll(".tab"));
const listPages = Array.from(document.querySelectorAll(".tab__content"));
listObjs.forEach((item) => {
    item.addEventListener('click', openContent);
})

function openContent() {
    listObjs.forEach((item) => {
        if (item === this) {
            item.classList += ' tab_active'
        } else {
            item.classList.toggle('tab_active', false)
        }
    })
    listPages.forEach((item) => {
        if (listPages.indexOf(item) === listObjs.indexOf(this)) {
            item.classList += ' tab__content_active'
        } else {
            item.classList.toggle('tab__content_active', false)
        }
    })
}