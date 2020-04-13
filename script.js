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
    title: "Varos",
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
    description: "Szeged, mit mondjak xDDD"
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
        '<div class="container" id="kontener-' + counter + '"><img src="' + photo.photo + '" data-number="' + counter +  '" id="containerPhoto"><blockquote class="speech-bubble">' + photo.title + '</blockquote></div>'
    );
    counter++;
});
$("#kontener-0").css("transform","scale(1.5)");
$(".container").on( "click",function (event) {
    currentPhoto = $(event.target).attr("data-number");
    let id = "#kontener-" + currentPhoto;
    let id3 = "#quote-" + currentPhoto;
    
    console.log(id);
    let class2 = ".speech-bubble-" + currentPhoto;
    loadPhoto(currentPhoto);
    $(id).css("transform", "scale(1.5)");
    $(class2).css("display","block");
    for(let counter2 = 0; counter2 < imagesData.length; counter2++){
        if(counter2 != currentPhoto){
            let id2 = "#kontener-" + counter2;
            $(id2).css("transform", "scale(1.0)");
        }
    }
});





