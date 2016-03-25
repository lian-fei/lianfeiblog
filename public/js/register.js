var Register={};

Register.parameter={};

Register.Method={
    register:function () {
        $("#register").click(function () {
            var username=$("#username").val();
            var password=$("#password").val();
            var email=$("#email").val();
            $.ajax({
                type: "post",
                url: "/users/register",
                data:{username:username,password:password,email:email},
                success: function(data){
                    if(data){
                        window.location.href="/users/login";
                    }
                }
            })
        })
    }
};






$(function () {
    Register.Method.register();
});