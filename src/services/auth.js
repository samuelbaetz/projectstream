import {auth} from './firebase'
import {db} from './firebase'
export const signInWithGithub = () => {
    const provider = new auth.GithubAuthProvider()
    return auth().signInWithPopup(provider)
    .then((user) => {
        var docRef = db.collection("users").doc(auth().currentUser.uid)
        docRef.get()
        .then(doc => {
            if (doc.exists){
                return user
            } else{
                const details ={
                    username: user.additionalUserInfo.profile.login,
                    full_name: user.additionalUserInfo.profile.name,
                    avatar_url: user.additionalUserInfo.profile.avatar_url
                }
                db.collection("users").doc(auth().currentUser.uid).set(details)
            }
        })
        
        
    })
}

export const signInWithTwitter = () => {
    const provider = new auth.TwitterAuthProvider()
    return auth().signInWithPopup(provider)
    .then((user) => {
        var docRef = db.collection("users").doc(auth().currentUser.uid)
        docRef.get()
        .then(doc =>{
            if (doc.exists){
                return user
            } else {
                const details = {
                    username: user.additionalUserInfo.profile.screen_name,
                    full_name: user.additionalUserInfo.profile.name,
                    avatar_url: user.additionalUserInfo.profile.profile_image_url
                }
                db.collection("users").doc(auth().currentUser.uid).set(details)
            }
        })
        console.log(user)
    })
}

export const signOut = () => {
    auth().signOut()
    .then(() => {
        console.log('Signed Out')
    })
    .catch((error) => {
        console.log(error)
    })
}