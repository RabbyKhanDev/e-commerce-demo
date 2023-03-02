const mainImg = document.getElementById('mainImg');
const smallImg = document.getElementsByClassName('small-img');

// Replace Main image source with the selected image source

smallImg[0].onclick = () => {
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = () => {
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = () => {
    mainImg.src = smallImg[2].src;
}