const leftBtn = document.getElementById('know-more-btn');
const rightBtn = document.getElementById('motivation-btn');

leftBtn.addEventListener('click', () => {
    window.open('know-more-page.html', '_blank');
});

rightBtn.addEventListener('click', () => {
    window.open('motivation-page.html', '_blank');
});
