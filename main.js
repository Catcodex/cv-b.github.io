const app = document.getElementById('typewriter');
const typewriter = new Typewriter(app, {
    loop: true,
    delay:75
});
typewriter
.typeString('San Juan de Miraflores')
.pauseFor(200)
.start();