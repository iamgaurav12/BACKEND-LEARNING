const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const firebase = require('file-location');
const storage = firebaseStorage({
    credentials: firebase.creadential.cert(serviceAccount),
    bucket: 'your-bucket-name.appspot.com',
    unique: true
})

const upload = multer({ storage: storage });

module.exports = upload;