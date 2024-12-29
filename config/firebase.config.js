const Firebase = require('firebase');
const serviceAccount = require('./serviceAccountKey.json');


const firebase = Firebase.initializeApp({
    credential: credential.cert(serviceAccount),
    storageBucket: 'gs://your-bucket-name.appspot.com'
})

module.exports = Firebase;

// storageBucket: Your bucket name
// const serviceAccount = require('./serviceAccountKey.json');
