// script to steal the original picture and make it our own.

async function changeImage (imageSrc){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    
    ctx.drawImage(imageSrc,0,0); // image to change
    ctx.globalCompositeOperation = "saturation";
    ctx.fillStyle = "hsv(0,100%,0%)";  // saturation at 100%
    ctx.fillRect(0,0,image.width,image.height);  // apply the comp filter
    ctx.globalCompositeOperation = "source-over";  // restore default comp

    imageBlob = await image.blob() // decompiles the image into binary
    imageURL = await URL.createObjectURL(imageBlob) // recompiles the image with an URL ig????
    return imageURL
}
