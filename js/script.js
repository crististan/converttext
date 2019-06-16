$(function(){
    $("#textarea-01").keyup(function(){
        $("#show-uppercase").html($(this).val().toUpperCase());
    });
});

function copyUpperCase() {
  let text1 = document.getElementById("show-uppercase");
  text1.select();
  document.execCommand("copy");
}

function clearUpperCase(){
     document.getElementById('textarea-01').value = "";
};



$(function(){
    $("#textarea-02").keyup(function(){
        $("#show-lowercase").html($(this).val().toLowerCase());
    });
});

function copyLowerCase() {
  let text1 = document.getElementById("show-lowercase");
  text1.select();
  document.execCommand("copy");
}

function clearLowerCase(){
     document.getElementById('textarea-02').value = "";
};


function titleCase(str){
   str = str.toLowerCase().split(' ');
   let final = [ ];
    for(let  word of str){
      final.push(word.charAt(0).toUpperCase()+ word.slice(1));
    }
  return final.join(' ');
}


$(function(){
    $("#textarea-03").keyup(function(){
    	var text = $(this).val();
    	var textCap = titleCase(text);
        $("#show-capcase").html(textCap);
    });
});

function copyCapCase() {
  let text1 = document.getElementById("show-capcase");
  text1.select();
  document.execCommand("copy");
}

function clearCapCase(){
     document.getElementById('textarea-03').value = "";
};
