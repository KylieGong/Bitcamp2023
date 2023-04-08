// script to steal the original picture and make it our own.

async function changeImage (imageSrc){
    var canvas = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    
    ctx.drawImage(imageSrc,0,0); // image to change
    ctx.globalCompositeOperation = "saturation";
    image = "hsv(0,100%,0%)";  // saturation at 100%
    ctx.fillRect(0,0,image.getWidth(),image.getHeight());  // apply the comp filter
    ctx.globalCompositeOperation = "source-over";  // restore default comp

    imageBlob = await image.blob() // decompiles the image into binary
    imageURL = URL.createObjectURL(imageBlob) // recompiles the image with an URL
    return imageURL
}
