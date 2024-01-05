const express = require('express');

const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(express.static('public', { maxAge: 0 })); 



// app.use((req, res, next) => {
//     res.on('finish', () => {
//         if (res.statusCode === 200) {
//             console.log(`Request to ${req.method} ${req.originalUrl} - Response: ${res.statusCode}`);
//         }
//     });
//     next();
// });

const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//     console.log('Application started successfully!');
// });


app.get('/', (req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate'); // Disable caching
    res.render('home.handlebars');
});


// app.get('/', (req, res) => {
    
// });





process.on('SIGINT', () => {
    server.close(() => {
        console.log('Server closed.');
        process.exit(0);
    });
});