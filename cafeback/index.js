import express from 'express'
const { Sequelize } = require('sequelize'); //Sequelize - это библиотека для работы с БД (типа Postgres/MySQL/MongoDB/etc)

const PORT = 3000;  //наш сайт будет на localhost:3000
const app = express()

app.use(express.json()) // чтобы наш сервер умел парсить (разбирать) файлы типа .json (перекидываются такие между сервером и сайтиком)

app.listen(PORT,()=> console.log('SERVER START ON PORT', PORT))  //Наш сервер будет слушать порт 3000 (указали выше)
                                                                        //и когда запустится, то напишет шо запустился

//ДЛЯ ПОДКЛЮЧЕНИЯ К БАЗЕ ДАННЫХ
//Мы создаем экземпляр объекта Sequelize, который будет представлять соединение с одной базой данных
//const sequelize = new Sequelize('postgres://postgres:1111@localhost:5432/postgres') //можно создать экземпляр Sequelize так
//А можно так (как у Дениса):
const sequelize = new Sequelize('postgres', 'postgres', '1111', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});

//Это эндпоинт (app.post(...) и app.get(...)) :
//Это мы обрабатываем запрос типа POST по адресу localhost:3000/books
//где req - запрос, а res - ответ сервера
app.post('/books',(req,res)=>{

    res.status(200).json('server on')
})
//илюха хуй