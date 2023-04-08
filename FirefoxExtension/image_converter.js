// script to steal the original picture and make it our own.

function changeURL(imageSrc) {
    document.getElementById("img").src=imageSrc; // set the current source to the new image
}

async function changeImage (imageSrc){
    const ctx = canvas.getContext('2d');
    const canvas = document.getElementById('canvas');

    // set the canvas size to the image size
    canvas.width = imageSrc.width;
    canvas.height = imageSrc.height;

    // draw the image on the canvas
    ctx.drawImage(imageSrc, 0, 0);

    // get the pixel data of the canvas
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // loop through each pixel and adjust the contrast
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
  
        // calculate the grayscale value of the pixel
        const grayscale = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  
        // adjust the contrast
        const contrast = 128;
        const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
        const adjusted = factor * (grayscale - 128) + 128;
  
        // set the pixel color based on the adjusted grayscale value
        data[i] = adjusted;
        data[i + 1] = adjusted;
        data[i + 2] = adjusted;
    }

    // put the modified pixel data back on the canvas
    ctx.putImageData(imageData, 0, 0);
    
}
