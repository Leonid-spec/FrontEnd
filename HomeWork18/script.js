// HTML структура предполагает контейнер для галереи
// Например: <div id="gallery"></div>

// Функция для создания элемента галереи персонажей
const targetGallery = document.getElementById("gallery");

function createCharacterItem(character) {
    // Создаем элементы
    const item = document.createElement('div');
    item.className = 'character-item';

    const img = document.createElement('img');
    img.src = character.image;
    img.alt = character.name;

    const name = document.createElement('div');
    name.className = 'character-name';
    name.textContent = character.name;

    // Вкладываем img и name в item
    item.appendChild(img);
    item.appendChild(name);

    return item;
}

// Функция для динамического добавления персонажей в галерею
function populateGallery(characters) {
    const characterElements = characters.map(createCharacterItem);
    characterElements.forEach(element => targetGallery.appendChild(element));
}

// Получение данных персонажей из API
async function fetchCharacters(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Ошибка при получении данных');
        const data = await response.json();
        return data.results; // Предполагается, что данные персонажей находятся в results
    } catch (error) {
        console.error('Ошибка:', error);
        return [];
    }
}

// URL API для получения персонажей (пример с Rick and Morty API)
const apiUrl = 'https://rickandmortyapi.com/api/character';

// Инициализация галереи
(async function initGallery() {
    const characters = await fetchCharacters(apiUrl);
    populateGallery(characters);
})();
