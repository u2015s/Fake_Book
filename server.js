const express = require('./node_modules/express');
const mongoose = require('mongoose')
const bodyParser = require('./node_modules/body-parser')
const morgan = require('morgan')
const cors = require('cors');
require('./models/newpost');
require('./models/user')
const newpostroutes = require('./routes/newpostRoutes')
const app = express()



mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/Fakebook`);

app.use(morgan('combined'))
app.use(bodyParser.json());
app.use(cors());
app.use('/', newpostroutes)

require('./routes/userRoutes')(app);




if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'winterproject', 'build', 'index.html'))
    })

}



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
});