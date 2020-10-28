import firebase from 'firebase';

const firebaseConfig = {
	apiKey            : 'AIzaSyCa42OaM2IFobFUsxhTZfY767LT-Ppvt5g',
	authDomain        : 'challenge-5f5c1.firebaseapp.com',
	databaseURL       : 'https://challenge-5f5c1.firebaseio.com',
	projectId         : 'challenge-5f5c1',
	storageBucket     : 'challenge-5f5c1.appspot.com',
	messagingSenderId : '1040126505261',
	appId             : '1:1040126505261:web:097733e108e16f622723a4'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
