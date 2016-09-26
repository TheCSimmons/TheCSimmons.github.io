$(function(){
  $(".clickswap").click(function() {
    if ($(this).attr("class") == "clickswap") {
      this.src = this.src.replace("_1","_2");
    } else {
      this.src = this.src.replace("_2","_3");
    } 
    if ($(this).attr("class") == "clickswap") {
      this.src = this.src.replace("_3","_4");
    } else {
      this.src = this.src.replace("_4","_5");
    } 
    if ($(this).attr("class") == "clickswap") {
      this.src = this.src.replace("_5","_6");
    } else {
      this.src = this.src.replace("_6","_7");
    } 
    if ($(this).attr("class") == "clickswap") {
      this.src = this.src.replace("_7","_8");
    } else {
      this.src = this.src.replace("_8","_9");
    } 
    if ($(this).attr("class") == "clickswap") {
      this.src = this.src.replace("_9","_10");
    } else {
      this.src = this.src.replace("_10","_1");
    } 


    $(this).toggleClass("1");
  });
});