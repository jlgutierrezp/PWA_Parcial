import express from 'express';
import users from './routers/users';
import post from './routers/post';

const app = express();

app.use(express.json());

app.use('/users', users);
app.use('/posts', post); // Assuming you have a posts router similar to users



app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

export default app;