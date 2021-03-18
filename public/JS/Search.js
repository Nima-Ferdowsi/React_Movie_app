const search=document.querySelector(".searchinput");
let ajax=new Ajax();
eventListener()
function eventListener(){
    document.querySelector(".search").addEventListener("click",function(){
          ajax.search(search.value)
    })
}
