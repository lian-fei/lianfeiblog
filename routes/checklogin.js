//Ҫ�������·�ɱ����¼����ܷ���
exports.checkLogin = function(req,res,next){
    if(req.session.user){
        next();
    }else{
        req.flash('error','δ��½');
        res.redirect('/users/login');
    }
}
//Ҫ�������·�ɱ���δ��¼����ܷ���
exports.checkNotLogin = function(req,res,next){
    if(req.session.user){
        req.flash('error','�� ��½');
        res.redirect('/');
    }else{
        next();
    }
}