/**
 * Created by Administrator on 2016/3/24.
 */
var Add={};

Add.parameter = {};

Add.Method = {
    addblog: function () {
        $(".btn").click(function () {
            var data=$("form").serialize();
            console.log(data);
        });
    }
};


$(function () {
    Add.Method.addblog();
})