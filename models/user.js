const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String,
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "newpost"
    }]

})

// Before saving a model, run this function
userSchema.pre('save', function(next) {
    // get access to the user model
    const User = this;
    //genrate a salt, then run callback
    bcrypt.genSalt(10, function(err, salt) {
        if (err) { return next(err); }
        // encrypt our password
        bcrypt.hash(User.password, salt, function(err, hash) {
            if (err) { return next(err); }
            //overwrite plain text password
            // console.log(User.password)
            // console.log(hash)
            User.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) { return callback(err) }

        callback(null, isMatch)
    })
}

module.exports = mongoose.model("user", userSchema)