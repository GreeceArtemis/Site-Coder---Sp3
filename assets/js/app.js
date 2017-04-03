
window.addEventListener('load',function(e) {
  var enviar=document.getElementById("button1");
  var postsAll=[];
enviar.addEventListener('click',function(e) {
  var nameAutor=document.getElementById("autor").value;
  var postc=document.getElementById("postCoder").value;

  function autores(nameAutor,postc){
      this.nombre=nameAutor;
      this.post=postc;
      }
  e.preventDefault();
  var posts=new autores(nameAutor,postc);
  postsAll.push(posts);
  console.log(postsAll);
  function creandoDiv(postsAll){
      var contForDiv=document.getElementById("showPosts");
      contForDiv.innerHTML="";
      for(var i=0;i<postsAll.length;i++){
          var divForCoder=document.createElement("div");
          var postCoder=document.createElement("span");
          postCoder.classList.add("PostCoder");
          postCoder.innerHTML=postsAll[i].post;
          divForCoder.appendChild(postCoder);
          var salto=document.createElement("br");
          divForCoder.appendChild(salto);
          var nameCoder=document.createElement("span");
          nameCoder.classList.add("NameCoder");
          nameCoder.innerHTML=postsAll[i].nombre;
          divForCoder.appendChild(nameCoder);
          contForDiv.appendChild(divForCoder);
      }
  }
  creandoDiv(postsAll);
  console.log(creandoDiv(postsAll));
  });
  });
