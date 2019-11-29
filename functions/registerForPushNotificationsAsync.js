import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import firebase from 'firebase'
import axios from "axios"



const PUSH_ENDPOINT = 'https://agile-everglades-79741.herokuapp.com/push-token';

export default async function registerForPushNotificationsAsync() {
    const user = firebase.auth().currentUser;
    let tokenUser;
    if (user) {
        tokenUser = await user.getIdToken()
    }
    else {
        return
    }
    const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
        // Android remote notification permissions are granted during the app
        // install, so this will only ask on iOS
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
        return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    console.log("USER", tokenUser);
    

    // POST the token to your backend server from where you can retrieve it to send push notifications.
     axios.post(PUSH_ENDPOINT, {push_token: token, userToken: tokenUser}).then(function (res) {
        console.log("RIP" + res);
    }).catch(function (err) {
        console.log(err);
        
    })
}