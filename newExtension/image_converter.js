// script to steal the original picture and make it our own.

async function changeImage (imageSrc){
    image = await fetch(imageSrc) //grabs the image
    
    imageBlob = await image.blob() // decompiles the image into binary
    imageURL = await URL.createObjectURL(imageBlob) // recompiles the image with an URL ig????
    
}
