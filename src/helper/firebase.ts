import * as firebase from "firebase";
import { IntResponse } from "@/interfaces/response";
import { createIResponse, createIError } from "@/interfaces/functions";
const firebaseConfig = {
  apiKey: "AIzaSyBGw0nnBpvgROkUYXawwXtHG86Y6up8sZ8",
  authDomain: "lightchat-95b3f.firebaseapp.com",
  databaseURL: "https://lightchat-95b3f.firebaseio.com",
  projectId: "lightchat-95b3f",
  storageBucket: "gs://lightchat-95b3f.appspot.com",
  messagingSenderId: "634275700206",
  appId: "1:634275700206:web:ba98300058d31ed231c2ff"
  // measurementId: "G-measurement-id"
};

export const initializeFirebaseApp = () => {
  firebase.initializeApp(firebaseConfig);
};

export async function facebookUserLogin(provider: any): Promise<IntResponse> {
  try {
    const result: any = await firebase.auth().signInWithPopup(provider);
    if (result.credential && result.credential.accessToken) {
      return createIResponse(result.credential.accessToken);
    } else {
      return createIError(400, "FailToGetToken");
    }
  } catch (err) {
    return createIError(500, "IntervalServerError");
  }
}
