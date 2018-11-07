$(function(){
  $("#lihatButton").click(function(){
    var suratCode = $("#suratCode").val();
    if(suratCode == "01" || suratCode == "02" || suratCode == "03" || suratCode == "04" || suratCode == "05"){
    ///$("#abc").text(suratCode);
    $("#inside").empty();
    if(suratCode != "03"){
      $("#inside").append('<iframe src="https://docs.google.com/gview?url=http://goodank.com/aplikasimanajemensurat/'+ suratCode +'.doc&embedded=true" frameborder="0"></iframe>')
    }else{
      $("#inside").append('<iframe src="https://docs.google.com/gview?url=http://goodank.com/aplikasimanajemensurat/'+ suratCode +'.xls&embedded=true" frameborder="0"></iframe>')
    }
    $("#buttons").empty();
    
    if(suratCode != "03"){
      $("#buttons").append('<a class="btn btn-primary" href="http://goodank.com/aplikasimanajemensurat/'+ suratCode +'.doc">DOWNLOAD</a>')
    }else{
      $("#buttons").append('<a class="btn btn-primary" href="http://goodank.com/aplikasimanajemensurat/'+ suratCode +'.xls">DOWNLOAD</a>')
    }
    }else{
    $("#inside").empty();
    $("#buttons").empty();
    }
  })
})