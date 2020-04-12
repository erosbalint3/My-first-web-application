let photo1 = {
    photo: "images/mezo1.jfif",
    title: "Mezo",
    description: "Nesze egy mezo"
}
let photo2 = {
    photo: "images/mezo2.jfif",
    title: "Mezo",
    description: "Nesze egy masik mezo"
}
let photo3 = {
    photo: "images/mezo3.jfif",
    title: "Mezo",
    description: "igen..."
}
let photo4 = {
    photo: "images/varos.jpg",
    title: "Mezo",
    description: "(:)"
}
let photo5 = {
    photo: "images/zenta.jfif",
    title: "Zenta",
    description: "A varosunk felulrol :)"
}
let photo6 = {
    photo: "images/szeged.jfif",
    title: "Szeged",
    description: "Jovobeli celom, hogy itt lakjak"
}
let imagesData = [photo1, photo2, photo3, photo4, photo5, photo6];
let currentPhoto = 0;
let loadPhoto = (photoNumber) => {
    $("#photoImg").attr('src', imagesData[currentPhoto].photo);
    $("#photo-title").text(imagesData[currentPhoto].title);
    $("#photo-description").text(imagesData[currentPhoto].description);
}
loadPhoto(currentPhoto);
$(".rightArrow").click(() => {
    if(currentPhoto < imagesData.length){
        currentPhoto++;
        loadPhoto(currentPhoto);
    }
});
$(".leftArrow").click(() => {
    if(currentPhoto >= 0){
        currentPhoto--;
        loadPhoto(currentPhoto);
    }
});
let counter = 0;
imagesData.forEach(photo => {
    $("#thumbnails").append(
        '<div class="container" ><img src="' + photo.photo + '" data-number="' + counter +  '" id="containerPhoto"></div>'
    );
    counter++;
});
$(".container").on( "click",function (event) {
    let photo = $(event.target).attr("data-number");
    
    console.log(photo)
    loadPhoto(Number(photo));
});





