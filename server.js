const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;


app.use((req, res) => {
    console.log('Получен GET-запрос:', req.method, req.path, req.query);
    res.status(200).send('Получено');
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});