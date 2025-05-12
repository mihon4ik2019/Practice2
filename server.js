const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Отдача статичных файлов
app.use(express.static(path.join(__dirname, 'public')));

// Роут для главной страницы
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Роут для ошибки 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, () => {
    console.log(`Сервер работает на http://localhost:${port}`);
});
