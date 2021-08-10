const is_page_exist_private = () => {
    let is_page_exist = false;
    const pathname = window.location.pathname.replace("/poolsMagnic", "");
    switch (pathname) {
        case "/home":
            is_page_exist = true
        case "/account":
            is_page_exist = true
        case "/search-list":
            is_page_exist = true
        case "/all-notification":
            is_page_exist = true
        case pathname.match("/search-profile") ? pathname :"":
            is_page_exist = true
    }
    is_page_exist = true
    return is_page_exist
}

const is_page_exist_protected = () => {
    let is_page_exist = false;
    const pathname = window.location.pathname.replace("/poolsMagnic", "");
    switch (pathname) {
        case "/login":
            is_page_exist = true
        case "/signup":
            is_page_exist = true
        case "/":
            is_page_exist = true
        case "/forget-password":
            is_page_exist = true
        case "/change-password":
            is_page_exist = true
    }
    return is_page_exist
}

const is_page_exist_app = (params) => {
    let is_page_exist = false;
    const pathname = window.location.pathname.replace("/poolsMagnic", "");
    switch (pathname) {
        case "/login":
            is_page_exist = true
        case "/home":
            is_page_exist = true
        case "/signup":
            is_page_exist = true
        case "/":
            is_page_exist = true
        case "/forget-password":
            is_page_exist = true
        case "/change-password":
            is_page_exist = true
        case "/account":
            is_page_exist = true
        case "/search-list":
            is_page_exist = true
        case "/all-notification":
            is_page_exist = true
        case pathname.match("/search-profile") ? pathname : "":
            is_page_exist = true
    }
    return is_page_exist
}

const replceMultiStringWithSIngle = (string) => {
    if(!!string){
    string = string.trim().replace(/\s\s+/g, ' ');
    }
    return string
}

const addDocumentTitle = (title) => {
    document.title = "PoolsMagnic | " + title
}

const addValidation = (validation) => {
    for (var key of Object.keys(validation)) {
        if (!validation[key].status) {
            validation[key].validation.current.style.display = "block"
        }
        else {
            validation[key].validation.current.style.display = "none"
        }
    }
}

const removeValidation = (validation) => {
    for (var key of Object.keys(validation)) {
        if (!validation[key].status && !!validation[key].validation.current) {
            validation[key].validation.current.style.display = "none"
        }
    }
}

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const setCookie = (name, value, days) => {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

const clearCookies = () => {
    document.cookie.split(";").forEach(function (c) {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
}

const clearSingleCookie = (name) => {
    var d = new Date();
    d.setTime(d.getTime());
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + "" + ";domain=" + window.location.hostname + ";path=/;" + expires;
}
export const addDefaultSrc = (ev) => {
    ev.target.src = 'assets/images/image-placeholder.jpg'
}

export const returnDefaultImage = (ev) => {
    return 'assets/images/image-placeholder.jpg'
}

const scroolTop = () => {
    window.scrollTo(0, 0)
}

export {
    is_page_exist_private, is_page_exist_protected, is_page_exist_app, scroolTop,
    replceMultiStringWithSIngle, addValidation, removeValidation,
    addDocumentTitle, getCookie, setCookie, clearCookies, clearSingleCookie
}