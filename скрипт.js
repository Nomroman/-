function count() {
   let a=document.getElementByTagName("li");
   a.style.backgroundColor="red"
};

function herji () {
    var a = document.getElementsByTagName("li")[0];
    a.onclick = function () {
         console.log("click");
         a.innerText="573569496";
    };
};

function click () {
    var b = document.getElementsByTagName("li")[3];
    b.onclick = function () {
       console.log("clicked");
       b.innerText="переведено";
    };
};

function jekid () {
     var t = document.getElementsByTagName("li")[4];
     t.onclick = function () {
        console.log('clicking');
        t.style.background="red";
        t.innerText="взломано";
    };
};

function sertg () {
     var g = document.getElementByTagName("");
     g.onclick = function () {
        console.log("lol");
        g.style.background="yellow";
        g.innerText="лол";
    };
};

function sgdje () {
    var t = document.getElementByTagName("");
    t.onclick = function () {
    console.log("gert");
      t.style.background="red";
      t.innerText="Привет";
   };
};
window.onload = function() {
      console.log("page dowloaded")
      herji ();
      click ();
      jekid ();
      sertg ();
};
