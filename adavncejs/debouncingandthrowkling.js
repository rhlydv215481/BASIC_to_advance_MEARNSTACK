// debouncing 
function debounce(fn, delay) {
    let time;

    return function () {
        clearTimeout(time);
        time = setTimeout(fn, delay);
    };
}

document
    .querySelector("#search")
    .addEventListener(
        "input",
        debounce(function () {
            console.log("hello");
        }, 4000)
    );