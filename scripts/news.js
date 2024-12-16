const pages = Array.from(document.querySelectorAll('.page-num'));
let currSlide = 0;
selectPage(0);

pages.forEach((page, index) => {
    page.addEventListener('click', function () {
        selectPage(index);
    });
});

function selectPage(index) {
    pages[currSlide].style.backgroundColor = 'rgb(255, 142, 49)';
    pages[index].style.backgroundColor = 'rgb(133, 42, 62)';
    currSlide = index;
}

const arrows = Array.from(document.querySelectorAll('.arrow'));
arrows[1].addEventListener('click', function () {
    nextPage();
});
arrows[0].addEventListener('click', function () {
    beforePage();
});


function nextPage() {
    if (currSlide < pages.length - 1) {
        selectPage(currSlide + 1)
    }
}

function beforePage() {
    if (currSlide > 0) {
        selectPage(currSlide - 1)
    }
}