import {HIDE_NOTIFICATION, SHOW_NOTIFICATION} from "./constants";

export const showNotification = (txt) => ({
    type: SHOW_NOTIFICATION,
    txt: txt
});

export const hideNotification = () => ({type: HIDE_NOTIFICATION});