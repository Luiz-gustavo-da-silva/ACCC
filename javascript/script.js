var loader = document.getElementById('preloade');

function precarregamento(){
    loader.style.opacity="0";
    setTimeout(()=>{
        loader.style.display="none";
    }, 500);
}