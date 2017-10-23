$(document).ready(function(){

     $('.alert_temp').click(function(e){
                alert('We are working on it!');
                return false;
     });


    if($('#login_form').length>0  ) {
        $("#login_submit").attr('disabled','disabled');
        $("#id_username").on('keyup',function(){
            if($("#id_username").val() !='' && $("#id_password").val() !='' ) {
                $("#login_submit").attr('disabled',false);
                $("#login_submit").addClass('active-state');
            } else {
                $("#login_submit").attr('disabled','disabled');
                $("#login_submit").removeClass('active-state');
            }
        })
        $("#id_password").on('keyup',function(){
            if($("#id_username").val() !='' && $("#id_password").val() !='' ) {
                $("#login_submit").attr('disabled',false);
                $("#login_submit").addClass('active-state');
            } else {
                $("#login_submit").attr('disabled','disabled');
                $("#login_submit").removeClass('active-state');
            }
        })
    }
    if($('#admin_reset_password_form').length>0  ) {
        $("#reset_password_submit").attr('disabled','disabled');
        $("#new_password1").on('keyup',function(){
            if($("#id_new_password1").val() !='' && $("#id_new_password2").val() !='' ) {
                $("#reset_password_submit").attr('disabled',false);
                $("#reset_password_submit").addClass('active-state');
            } else {
                $("#reset_password_submit").attr('disabled','disabled');
                $("#reset_password_submit").removeClass('active-state');
            }
        })
        $("#id_new_password2").on('keyup',function(){
            if($("#id_new_password1").val() !='' && $("#id_new_password2").val() !='' ) {
                $("#reset_password_submit").attr('disabled',false);
                $("#reset_password_submit").addClass('active-state');
            } else {
                $("#reset_password_submit").attr('disabled','disabled');
                $("#reset_password_submit").removeClass('active-state');
            }
        })

    }
    if($('#forgot_password_form').length>0  ) {

        $("#forgot_password_submit").attr('disabled','disabled');
        if($("#id_username").val() !='' ) {
            $("#forgot_password_submit").attr('disabled',false);
            $("#forgot_password_submit").addClass('active-state');
        }
        $("#id_username").on('keyup',function(){
            if($("#id_username").val() !='' ) {
                $("#forgot_password_submit").attr('disabled',false);
                $("#forgot_password_submit").addClass('active-state');
            } else {
                $("#forgot_password_submit").attr('disabled','disabled');
                $("#forgot_password_submit").removeClass('active-state');
            }
        })
        $('#enter-forgot-otp').modal({
            dismissible: false,
        });

        if($("#validated").val() == 1) {
            $('#enter-forgot-otp').modal("open");
            $("#codes li:first").find('input').focus();
        }

//        $("#resend-forgot-btn").on('click',function(){
//            $("#forgot_password_submit").trigger("click");
//        })
    }


    jQuery.validator.addMethod("strongPasswordAdmin", function(value, element) {
        return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]+$/i.test(value);
    }, "Minimum 6 characters atleast 1 Alphabet, 1 Number and 1 Special Character.");

    jQuery.validator.addMethod("zipNumber", function(value, element) {
    return this.optional(element) || /^[a-zA-Z0-9\-()]+$/i.test(value);
    }, "Please enter a valid Zipcode.");

    jQuery.validator.addMethod("cityNameOnlyNumber", function(value, element) {
        return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    }, "Please enter only letters.");

    jQuery.validator.addMethod("emailValid", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value);
    }, "Please enter valid email address.");

    jQuery.validator.addMethod("alphanumeric", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9\s]+$/.test(value);
    }, "Please enter only letters and numbers.");

    jQuery.validator.addMethod("valid_address", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9\s,-]+$/.test(value);
    }, "Please enter only letters and numbers.");

});

var getUrlParameter = function getUrlParameter(sParam) {
        sURLVariables = window.location.hash.split("#");
        sParameterName = '';


    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

