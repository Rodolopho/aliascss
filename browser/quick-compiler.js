
var input = document.getElementById("acss-input");
var box = document.getElementById("acss-box");
var form = document.getElementById("acss-form");
var statement = "<br>";

form.onsubmit = function () {
  if (input.value.trim()) {
    var classes = input.value.trim().split(/\s+/);

    classes.forEach(function (eachClass) {
      var result = AliasCSS.compile(eachClass);
      if (result) {
        var styledResult = result;

        styledResult = styledResult.replace(
          /{(.+)}/g,
          "<span style='color:orange'>{</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span style='color:blue'>$1</span><br><span style='color:orange'>}</span><br>"
        );

        // statement+= '<span style="color:#f4433c" >.'+"</span><span style='color:olive'>"+"</span>"+ "<span style='color:blue'>{</span><br>"
        // +"&nbsp;&nbsp;&nbsp;&nbsp;"+styleresult + ";</sapn><br>" +"<span style='color:blue'>}</span><br>";
        statement += styledResult;
      } else {
        statement +=
          '<br><em><span class="c-warning"><i class="fas fa-warning"></i></span><span style="color:#f4433c" > ' +
          eachClass +
          "</span>" +
          " is Not a Valid ACSS Classname</em><br><br>";
      }
    });

    //box.innerHTML=statement;
    box.innerHTML = statement;

    statement = "<br>";
  }
  return false;
};
