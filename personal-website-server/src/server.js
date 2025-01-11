require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react']
});

const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const cors = require('cors');

const { default: Education } = require('./templates/Education');
const { default: Experience } = require('./templates/Experience');
const { default: Summary } = require('./templates/Summary');

const app = express();
app.use(cors({
    origin: 'http://localhost:8080'
}));
const PORT = 3000;

app.get('/resume', (req, res) => {
    const summaryHTML = renderToString(React.createElement(Summary));
    const educationHTML = renderToString(React.createElement(Education));
    const experienceHTML = renderToString(React.createElement(Experience));
    const html = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Personal web page</title>
                <link rel="stylesheet" href="/App.css" />
            </head>
            <body>
                <div id="root">
                    <section>
                        ${summaryHTML}
                    </section>
                    <section>
                        ${educationHTML}
                    </section>
                    <section>
                        ${experienceHTML}
                    </section>
                </div>
            </body>
        </html>
    `;

    res.send(html);
});

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
