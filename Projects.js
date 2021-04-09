var noOfList = document.querySelectorAll(".item").length;

for (var i=0; i<noOfList; i++) {
  document.querySelectorAll(".item")[i].addEventListener('click', function() {
    var btnInnerHTML = this.innerHTML;
    var folderName = btnInnerHTML.slice(0,4);

    imageSlider();
  });
};


