function replaceImages(eve){
    var images = document.getElementsByTagName("img");
    for (let i = images.length-1; i > -1; i--) {
        console.log(images[i].alt)
        newNode=document.createTextNode(images[i].alt)
        images[i].parentNode.replaceChild(newNode,images[i])
        console.log(newNode.value)
    }
}