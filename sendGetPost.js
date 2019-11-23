"use strict";

function sendPost(url, body, callback) {
    let r = new XMLHttpRequest();
    r.open("POST", url, true);
    r.withCredentials = true;
    r.send(body);
    r.onreadystatechange = function() {
        if(r.readyState === 4) {
            const answer = r.responseText;
            const status = r.status;
            r = null;
            callback(answer, status);
        }
    }
}

function sendGet(url, callback) {
    let r = new XMLHttpRequest();
    r.open("GET", url, true);
    r.withCredentials = true;
    r.send(null);
    r.onreadystatechange = function() {
        if(r.readyState === 4) {
            const answer = r.responseText;
            const status = r.status;
            r = null;
            callback(answer, status);
        }
    }
}