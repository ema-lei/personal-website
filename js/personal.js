const tabs = document.querySelectorAll('.topic');
const articles = document.querySelectorAll('.topic-article');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // deactivate all tabs + hide all articles
        tabs.forEach(t => t.classList.remove('active'));
        articles.forEach(a => a.classList.add('hidden'));

        // activate the clicked tab + show its article
        tab.classList.add('active');
        document.getElementById(tab.dataset.name).classList.remove('hidden');
    });
});


const redacted = document.querySelectorAll('.redacted');

redacted.forEach(redacted => {
    redacted.addEventListener('click', () => {
        redacted.classList.remove('redacted');
    });
});