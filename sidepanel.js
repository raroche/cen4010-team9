function openNav() {
    document.getElementById("HomeSidepanel").style.width = "200px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("HomeSidepanel").style.width = "0";
  }

  function bookgenre() {
    var x = document.getElementById("book-drop");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }