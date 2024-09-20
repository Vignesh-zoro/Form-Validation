$(document).ready(function(){

$("#formName").validate({
    rules:{
        fname:{
            required:true,
        },
        password:{
            required:true,
            minlength:8,
        }
    },
    messages:{
        fname:{
            required:"Please enter a user name",
            equalTo:"#fname"
        },
        password:{
            required:"Please enter a password",
            equalTo:"#password"
        }
    }
})










});