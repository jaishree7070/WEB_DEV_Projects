const dogImg=document.getElementById("dogImg");
const btn=document.getElementById("bottom");
fetch('https://dog.ceo/api/breeds/image/random')
        .then(response=>response.json())
        .then(json=>
        {
            console.log(json.message)
            dogImg.innerHTML=`<img src='${json.message}' height=500px width=500px/>`
        })
function show()
{
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response=>response.json())
        .then(json=>
        {
            console.log(json.message)
            dogImg.innerHTML=`<img src='${json.message}' height=500px width=500px/>`
        })
}
btn.onclick=()=>show();