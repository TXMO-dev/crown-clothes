import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const fire_api = {
    apiKey: "AIzaSyAl5dBujR4yLWq5b7s51e0LxqeR-Nza4cE",
    authDomain: "crown-db-dfcd0.firebaseapp.com",
    databaseURL: "https://crown-db-dfcd0.firebaseio.com",
    projectId: "crown-db-dfcd0",
    storageBucket: "crown-db-dfcd0.appspot.com",
    messagingSenderId: "563250643909",
    appId: "1:563250643909:web:e4e033753b821111b781ac",
    measurementId: "G-XDB4EPPKNC"
  };

firebase.initializeApp(fire_api);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const joiningAuthToDatabase = async (authChange,allowedFields) => {
  if(!authChange) return;
    const userRef = firestore.doc(`users/${authChange.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName,email} = authChange;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,  
          ...allowedFields 
        });  

      }catch(err){
        console.log('error message',err.message);
      }

    }

    return userRef;

}

export const addCollectionsAndDocuments = async (collectionKey,objectsToAdd) => {

    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef,obj);  

  });

  return await batch.commit();  

}

export const convertFromArrayObjectToListObject = (collectionRefSnapshot) => {
  const transformedCollection = collectionRefSnapshot.docs.map(documentSnapshot => {   

      const {title,items} = documentSnapshot.data();

      return {
        id:documentSnapshot.id,
        routeName:encodeURI(title.toLowerCase()),
        title,
        items
      }
    
  })

  return transformedCollection.reduce((accumulator,currentObject) => {
    accumulator[currentObject.title.toLowerCase()] = currentObject
    return accumulator;
  },{});
    
};

export const checkUserAuthentication = _  => {
  return new Promise((resolve,reject) => {
    auth.onAuthStateChanged(userAuth => {
      resolve(userAuth);
    },reject) 
  })
}

export const google_provider = new firebase.auth.GoogleAuthProvider();
google_provider.setCustomParameters({prompt:'select_account'});
//export const signinwithgoogle = () => auth.signInWithPopup(provider);  

export default firebase;