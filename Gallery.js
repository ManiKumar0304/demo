function callOfImg()
{
    var allImgTag=document.images
    for (i=0;i<allImgTag.length;i++)
    {
        console.log(i)
        allImgTag[i].src=`${i}.JPG`
    }
}
callOfImg()

function bigImg(imgUrl)
{
    document.getElementById("imgContainer").style.backgroundImage=`url(${imgUrl})`
}