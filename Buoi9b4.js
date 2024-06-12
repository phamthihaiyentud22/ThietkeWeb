function validateForm(){
    var x;
    x=document.forms["frm_dk"]["txt_ho"].value;
    if(x==""){
        alert("Báº¡n chÆ°a nháº­p há»");
        return false;
    }
    x=document.getElementById("txt_ten").value;
    if(x==""){
        alert("Báº¡n chÆ°a nháº­p tĂªn");
        return false;
    }
    x=document.getElementById("txt_dienthoai").value;
    if(isNaN(x)||length(x)==0||length(x)>10){
        alert("Ä‘iá»‡n thoáº¡i pháº£i cĂ³ sá»‘, má»i nháº­p láº¡i");
        return false;
    }
}