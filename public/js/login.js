/**
 * Created by Administrator on 2016/3/24.
 */
var Login={};

Login.parameter = {};

Login.Method = {
    login: function () {
        $("#login").click(function () {
            var username=$("#username").val();
            var password=$("#password").val();
            $.ajax({
                type: "post",
                url: "/users/register",
                data:{username:username,password:password},
                success: function(data){
                    if(data){
                        window.location.href="/";
                    }
                }
            })
        });
    }
}


$(function () {
    Login.Method.login()
})