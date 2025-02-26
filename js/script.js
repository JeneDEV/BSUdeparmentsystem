document.addEventListener('DOMContentLoaded', () => {
    const loadHTML = (file, target) =>
        fetch(file)
            .then(res => res.ok ? res.text() : Promise.reject('Failed to load'))
            .then(data => document.getElementById(target).innerHTML = data)
            .catch(console.error);

    loadHTML('header/header.html', 'header-container');
    loadHTML('navbar/navbar.html', 'navbar-container');
});

const buttons = document.querySelectorAll('nav ul li button');