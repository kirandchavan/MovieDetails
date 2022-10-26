import data from '../constants/data.json'
import EncryptedStorage from 'react-native-encrypted-storage'

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// rating
export const checkRating = (avgRating) => {
    // return avgRating ? avgRating : 0
    return avgRating ? parseFloat(avgRating).toFixed(1) : 0
}

export const isNullOrEmpty = (input) => {
    if (input === ' ') {
        return true;
    } else if (input === null) {
        return true;
    } else if (input === undefined) {
        return true;
    } else if (input.toString().trim().length === 0) {
        return true;
    } else {
        return false;
    }
}

export const convertMovieRuntimeToHrsMin = time => {
    let hour = Math.floor(time / 60);
    hour = hour > 10 ? hour : `0${hour}`;

    let minutes = time % 60;
    minutes = minutes > 10 ? minutes : `0${minutes}`;

    return hour && minutes ? `${hour}h ${minutes}m` : 'NA'; //Match to book my show 
};

export const debouncingSearch = (func, delay) => {
    let timer;
    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    }
}

export async function storeUserSession(userData) {
    try {
        await EncryptedStorage.setItem("user_session", JSON.stringify(userData));
    } catch (error) {
        // There was an error on the native side
    }
}

export async function retrieveUserSession() {
    try {
        const session = await EncryptedStorage.getItem("user_session");
        if (session !== undefined) {
            // Congrats! You've just retrieved your first value!
            return JSON.parse(session)
        }
    } catch (error) {
        // There was an error on the native side
    }
}

export async function removeUserSession() {
    try {
        await EncryptedStorage.removeItem("user_session");
        // Congrats! You've just removed your first value!
    } catch (error) {
        // There was an error on the native side
    }
}

export const validateEmail = (email) => {
    return EMAIL_REGEX.test(email)
}
