$(function() {
    $('#goReg').click(function() {
        $('.login-box').hide()
        $('.reg-box').show()
    })
    $('#goLogin').click(function() {
        $('.login-box').show()
        $('.reg-box').hide()
    })
    var form = layui.form
    var layer = layui.layer
        // 自定义校验规则
    form.verify({
        pass: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        rep: function(value) {
            var paw = $('.mima').val()
            if (value !== paw) {
                return '两次密码不一致'
            }
        }
    });

    // 注册表单提交事件
    $('.reg-form').on('submit', function(e) {
        e.preventDefault()
        $.post('/api/reguser', { username: $('#reg_username').val(), password: $('#reg_password').val() },
            function(res) {
                if (res.status !== 0) {
                    return layer.msg('注册失败');
                }
                layer.msg('注册成功,请登录');
                $('#goLogin').click()
            })
    })
    $('.login-form').on('submit', function(e) {
        e.preventDefault()
        $.ajax({
            url: '/api/login',
            method: 'POST',
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('登录失败');
                }
                localStorage.setItem('token', res.token)
                layer.msg('登录成功')
                location.href = '../../index.html'
            }

        })
    })













})