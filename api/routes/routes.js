const db = require('./../config/database.js');
const Blog = require('./../models/blogModel.js');
module.exports = (app) => {

    app.get('/', (req, res) => {
       res.send()
    });
    app.post('/api/create', (req, res) => {
        console.log(req.body);
        //add blog data**
        var newBlog = new Blog({});
        createBlog.save((err, blog) => {
            if(err) throw err;
            res.send(200);
        })
    });

    //READ
    app.get('/api/blog', (req, res) => {
        db.find({}, (err, data) => {
            console.log(data);
            res.json(data);
        });
    });

    //UPDATE
    app.post('api/update', (req, res) => {
        console.log(req.body);
        db.findByIdAndUpdate({}, (err, data) => {
            console.log(data);
        });
    });

    //DELETE
    app.get('api/delete/', (req, res) => {
        /*db.find({}).remove().exec();*/
    })
};