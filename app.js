$(function(){
  $("#lihatButton").click(function(){
    var suratCode = $("#suratCode").val();
    if(suratCode == "01" || suratCode == "02" || suratCode == "03" || suratCode == "04" || suratCode == "05"){
    ///$("#abc").text(suratCode);
    $("#inside").empty();
    if(suratCode != "03"){
      $("#inside").append('<iframe src="https://view.officeapps.live.com/op/embed.aspx?src=https://raw.githubusercontent.com/simajesu-sma8/simajesu-sma8.github.io/master/docs/'+ suratCode +'.doc" frameborder="0"></iframe>')
    }else{
      $("#inside").append('<iframe src="https://view.officeapps.live.com/op/embed.aspx?src=https://raw.githubusercontent.com/simajesu-sma8/simajesu-sma8.github.io/master/docs/'+ suratCode +'.xls" frameborder="0"></iframe>')
    }
    $("#buttons").empty();
    
    if(suratCode != "03"){
      $("#buttons").append('<a class="btn btn-primary" href="https://raw.githubusercontent.com/simajesu-sma8/simajesu-sma8.github.io/master/docs/'+ suratCode +'.doc">DOWNLOAD</a>')
    }else{
      $("#buttons").append('<a class="btn btn-primary" href="https://raw.githubusercontent.com/simajesu-sma8/simajesu-sma8.github.io/master/docs/'+ suratCode +'.xls">DOWNLOAD</a>')
    }
    }else{
    $("#inside").empty();
    $("#buttons").empty();
    }
  })
})