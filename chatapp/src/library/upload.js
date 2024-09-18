import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

const upload = async (file) => {

    const date = new Date() //timestamp to avoid conflict of diff imgs
    
    const storageRef = ref(storage, 'images/${date + file.name}');

    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {

    uploadTask.on('state_changed', 
        (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case 'paused':
            console.log('Upload is paused');
            break;
            case 'running':
            console.log('Upload is running');
            break;
        }
    }, 
    
    (error) => {
        reject("oh no something is wrong!" + error.code)
    // Handle unsuccessful uploads
    }, () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        resolve(downloadURL);
        });
    });
    });
}

export default upload