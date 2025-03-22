window.onload = function () {
    var timeoutId = setTimeout(function () {
        document.body.classList.remove("not-loaded");
        clearTimeout(timeoutId);
    }, 1000);
};
