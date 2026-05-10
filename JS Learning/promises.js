api = "https://api.github.com/users"

const box = document.getElementById("parent")
const fragment = document.createDocumentFragment();

fetch(api)
.then((response)=>{
    return response.json();
}
)
.then((data)=>{
    for(let d of data){
        const image = document.createElement("img")
        image.src= d.avatar_url;
        image.style.height="40px";
        image.style.width="40px";
        fragment.append(image);
    }
    box.append(fragment);
})


