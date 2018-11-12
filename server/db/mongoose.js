const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.MLAB_URI || 'mongodb://localhost:27017/Todos');

module.exports = { mongoose };