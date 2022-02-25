feather.replace()

const toggle = document.getElementById("theme-toggle");

toggle.onclick = function () {
// add class to html and make transition snappy
    document.documentElement.classList.add("theme-transition");
// alright lets retrive the info from data-theme
    let currentTheme = document.documentElement.getAttribute("data-theme");
// if it's dark already, let's go into the light
    let targetTheme = "light";
// but if it is light let's toggle dark mode
    if (currentTheme === "light") {
        targetTheme = "dark";
    }
// ok now that theme has been toggled, get rid of snappy transition
    window.setTimeout(function () {
        document.documentElement.classList.remove("theme-transition");
    }, 50);
// we're going to save our theme preference now
    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
};
