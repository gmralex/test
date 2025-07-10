document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleMore');
    const moreInfo = document.getElementById('moreInfo');

    toggleBtn.addEventListener('click', () => {
        if (moreInfo.classList.contains('hidden')) {
            moreInfo.classList.remove('hidden');
            toggleBtn.textContent = 'Show Less';
        } else {
            moreInfo.classList.add('hidden');
            toggleBtn.textContent = 'Read More';
        }
    });
});
