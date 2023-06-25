const img = ["0.jpg", "1.jpg", "2.jpg"];

const todaysImg = img[Math.floor(Math.random() * img.length)];
document.body.style.backgroundImage = `url(https://picsum.photos/1000/?blur=2)`;
