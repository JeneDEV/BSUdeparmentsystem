document.addEventListener('DOMContentLoaded', () => {
    const loadCDN = (url, type) => {
        let el = document.createElement(type === "css" ? "link" : "script");
        type === "css" ? (el.rel = "stylesheet", el.href = url) : (el.src = url, el.defer = true);
        document.head.appendChild(el);
    };

    const loadHTML = (file, target, script) =>
        fetch(file)
            .then(res => res.ok ? res.text() : Promise.reject())
            .then(data => {
                document.getElementById(target).innerHTML = data;
                if (script) {
                    const scriptTag = document.createElement('script');
                    scriptTag.src = script;
                    document.body.appendChild(scriptTag);
                }
            });

    // Load Bootstrap CSS & JS from CDN
    loadCDN("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css", "css");
    loadCDN("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", "js");

    // Load HTML Components
    loadHTML('header/header.html', 'header-container');
    loadHTML('navbar/navbar.html', 'navbar-container', 'navbar/navbar.js');
    loadHTML('slider.html', 'slider-container');
});
