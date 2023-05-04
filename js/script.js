const quotes = {
    "Станислав Ежи Лец": '"Сходят с ума только те, у кого он есть."',
    "Эммануэль Адольф Эссар": '"Если вы спорите с дураком, значит дураков уже двое"',
    "Марк Твен": '"Никогда не откладывай на завтра то, что можешь сделать послезавтра."',
    "Оскар Уайльд": '"Всё, что есть прекрасного в этой жизни, либо аморально, либо незаконно, либо приводит к ожирению."',
    "Нильс Бор": '"Эксперт — это человек, который совершил все возможные ошибки в очень узкой специальности."',
    "Джордж Бернард Шоу": '"Каждый человек имеет право на собственное мнение — при условии, что оно совпадает с нашим."',
    "Уинстон Черчилль": '"Своим долголетием я обязан спорту. Я им никогда не занимался."',
    "Георг Кристоф Лихтенберг": '"Любовь слепа, но брак восстанавливает зрение."',
    "Стив Джобс": '"Вы никогда не узнаете, что искали, пока не найдёте это."',
    "Антисфен": '"Самая нужная наука – это наука забывать ненужное."'
};

document.querySelector("#generate").addEventListener("click", () => {

    generate();

    document.querySelector("#quote").classList.add('fade');
    document.querySelector("#author").classList.add('fade');
    setTimeout(function() {
        document.querySelector("#quote").classList.remove('fade');
        document.querySelector("#author").classList.remove('fade');
    }, 1500);
    
});

function generate() {
    const authors = Object.keys(quotes);
    const author = authors[Math.floor(Math.random() * authors.length)];
    const quote = quotes[author];
    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;    
    
}
window.onload = function(){
    generate()
}
