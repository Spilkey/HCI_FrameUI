function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(() => {
    timeout();

});

function timeout() {
    setTimeout(function() {
        let main = document.getElementById('main');
        let images = main.children;

        var formerFirstElm = images[0].cloneNode(true);

        // slide first image over .slide
        main.classList.add('slide');

        setTimeout(() => {
            // remove element from begining
            main.removeChild(images[0]);

            // remove slide from new first element
            main.classList.remove('slide');

            // add former first element back to end of list
            main.appendChild(formerFirstElm);
            timeout();
        }, 2000);
    }, 7000);
}