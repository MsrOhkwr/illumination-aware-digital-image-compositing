window.onload = function() {
  $('.twentytwenty-container[data-orientation!="vertical"]').twentytwenty({ default_offset_pct: 0.5 });

  let nameList = ["Male_01", "Male_13", "Female_14", "Female_23"];
  for (let i = 0; i < nameList.length; i++) {
    $('input[name="' + nameList[i] + '"]:radio').change(function () {
      let radio = document.getElementsByName(nameList[i]);
      let imgList = document.getElementsByClassName(nameList[i]);
      for (let j = 0; j < radio.length; j++) {
        if (radio[j].checked === true) {
          imgList[j].style.display = "initial";
          $(imgList[j].children[0].children[0]).twentytwenty()
        }
        else {
          imgList[j].style.display = "none";
        }
      }
    });
  }
}
