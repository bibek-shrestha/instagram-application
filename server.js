let express = require('express');

let app = express();

let ig = require('instagram-node').instagram();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

ig.use({
    access_token: 'Your access token here',
});
app.get('/', (req, res) => {
    ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
        res.render('pages/index', { grams: medias });
    }); 
});

app.listen(3000);

console.log('Application has started.');
