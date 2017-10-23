$(document).ready(function(){
    //login page

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
    if($('#reset_password_form').length>0  ) {
        $("#reset_password_submit").attr('disabled','disabled');
        $("#id_new_password1").on('keyup',function(){
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

        $("#resend-forgot-btn").on('click',function(){
            $("#forgot_password_submit").trigger("click");
        })
        $("#codes input").each(function(){
            $(this).on('focus',function(){
                $(this).parent().removeClass("digit-error");
                //$(this).removeClass("digit-active");
            })
            $(this).on('blur',function(){
                $(this).parent().removeClass("digit-active");
                $(this).parent().removeClass("digit-error");
            })
        });
    }

        var inc = 1;
    	$('.circle-icon').click(function(){
		var data=$( "#add-new > div.seller-inner-item").clone();
                data.attr('id','');

                data.find("#id_email-error").remove()
                data.find("#id_phone-error").remove()
                data.find("input[name='email']").attr('id', 'id_email-'+inc);
                //data.find("input[name='email']").next("label").after('<div id=div_error'+inc+'></div>');
                data.find("input[name='email']").next("label").next('span').remove()
                data.find("input[name='email']").next("label").after('<span class="error-text email_error email_'+inc+'"></span>');
                //data.append('<div></div>');

                //data.find("span").attr('class', 'id_email-'+inc);
                data.find("input[name='phone']").parent().removeClass('error');
                data.find("input[name='email']").parent().removeClass('error');
                data.find("input[name='phone']").attr('id', 'id_phone-'+inc);
                data.find("input[name='phone']").next("label").after('<div id=div_error_phone'+inc+'></div>');
                inc++;
                data.find(":input").val('');

                $('#add-other').append(data);
            });

            //start for edit pro
             var inc1 = 1;
            var first_time="true";
    	    $('#circle-icon-edit').click(function(){

    	        if(first_time =="true"){
                    console.log('11111');
                    console.log(first_time);
                    if($("#circle-icon-edit").parent().next('div').next('div').children().children().last().children('input').attr('id')){
                        var last_id = $("#circle-icon-edit").parent().next('div').next('div').children().children().last().children('input').attr('id');
                        arr = last_id.split("-");
                        var last_ind = parseInt(arr[1]);
                        inc1 = last_ind + 1
                        first_time="false";

                    }else{

                    }
                 }

		        var data=$( "#add-new > div.seller-inner-item").clone();
                data.attr('id','');

                data.find("#id_email-error").remove()
                data.find("#id_phone-error").remove()
                data.find("input[name='email']").attr('id', 'id_email-'+inc1);
                data.find("input[name='email']").next("label").next('span').remove()
                data.find("input[name='email']").next("label").after('<span class="error-text email_error email_'+inc1+'"></span>');

                data.find("input[name='phone']").parent().removeClass('error');
                data.find("input[name='email']").parent().removeClass('error');
                data.find("input[name='phone']").attr('id', 'id_phone-'+inc1);
                data.find("input[name='phone']").next("label").after('<span id=error-text phone_error phone_'+inc1+'></span>');
                inc1++;
                data.find(":input").val('');

                $('#add-other2').append(data);
            });


        	$('.delete_clone_icon').livequery('click',function(){
        	  div_id = $(this).parent().parent().parent().attr('id');
        	  if(div_id=='add-new'){
        	    $("#id_email").val('');
        	    $("#id_phone").val('');
        	    $("#id_email-0").val('');
        	    $("#id_phone-0").val('');
        	    $(".email_0").text('');
                $(this).parents().find("#add-new").children().children().removeClass('error');
        	    $(this).parents().find("#add-new").find("span").remove('.error');
        	    $(this).parent().find("span").remove('.error');

        	  }else{
                $(this).parent().parent().remove();

              }
	        });

	        $('.remove_chip').livequery('click',function(){
                  $(this).parent().next('input').remove();
                  $(this).parent().remove();
	        });

             jQuery.validator.addMethod("strongPassword", function(value, element) {
                    return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]+$/i.test(value);
             }, "Minimum 6 characters atleast 1 Alphabet, 1 Number and 1 Special Character ($@$!%*?&).");

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

<!--------------Latest code start------------------>

<!-------------end latest code-------------------->


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
