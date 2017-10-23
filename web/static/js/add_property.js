$(function(){
	$('select').on('change', function() {
  		$("#"+this.id+'-error').remove();
	})
    $.validator.addMethod('selectcheck', function (value,element, parm) {
        return (value.trim()!= '' &&  value.trim()!= '0');
    }, "This field is required.");
    $.validator.addMethod('selectcheck1', function (value,element, parm) {
        return (value.trim()!= '' &&  value.trim()!= '0');
    }, "This field is required.");
    $.validator.addMethod('selectcheck2', function (value,element, parm) {
        return (value.trim()!= '' &&  value.trim()!= '0');
    }, "This field is required.");
    $.validator.addMethod('selectcheck3', function (value,element, parm) {

        return (value.trim()!= '' &&  value.trim()!= '0');
    }, "This field is required.");


    $("#property").validate({
        ignore:'',
        errorElement: 'span',
        rules: {

                "status":{selectcheck:true},
                "property_type":{selectcheck1:true},
                "street_address":{selectcheck2:true},
                "state":{selectcheck3:true},
                city_name: {
                	lettersonly: true,
                 	required: true
                 },
                "zipcode":{
                    alphanumeric: true,
                    required: true,
                    maxlength: 6,
                    minlength: 5,
                },
                "sale_price":{
                    required: true,
                    number: true,
                    maxlength: 12,
                    min: 1
                },
                "sale_cap_rate":{
                    number: true,
                    maxlength: 12
                },
                "gross_income":{
                    number: true,
                    maxlength: 12
                },
                "net_income":{
                    number: true,
                    maxlength: 12
                },
                "price_per_unit":{
                    number: true,
                    maxlength: 12
                },
                "price_per_sf":{
                    number: true,
                    maxlength: 12
                },
                "occupancy":{
                    number: true,
                    maxlength: 12
                },
                "building_size":{
                    number: true,
                    maxlength: 12
                },
                "lot_size":{
                    number: true,
                    maxlength: 12
                },
                "year_built":{
                    number: true,
                    maxlength: 12
                }
        },
        errorPlacement: function(error, element) {
			if (element.attr("name") == "city_name") {
				error.insertAfter("#city_name_id");
			} else if (element.attr("name") == "street_address") {
				error.insertAfter("#street_address_id");
			} else if (element.attr("name") == "zipcode") {
				error.insertAfter("#zipcode");
			}else if (element.attr("name") == "sale_price") {
				error.insertAfter("#sale_price_id");
			}else if (element.attr("name") == "gross_income") {
				error.insertAfter("#gross_income_id");
			}else if (element.attr("name") == "net_income") {
				error.insertAfter("#net_income_id");
			}else if (element.attr("name") == "net_income") {
				error.insertAfter("#net_income_id");
			}else if (element.attr("name") == "price_per_unit") {
				error.insertAfter("#price_per_unit_id");
			}else if (element.attr("name") == "occupancy") {
				error.insertAfter("#occupancy_id");
			}else if (element.attr("name") == "lot_size") {
				error.insertAfter("#lot_size_id");
			}else if (element.attr("name") == "year_built") {
				error.insertAfter("#year_built_id");
			}else if (element.attr("name") == "price_per_sf") {
				error.insertAfter("#price_per_sf_id");
			}else if (element.attr("name") == "building_size") {
				error.insertAfter("#building_size_id");
			}else if (element.attr("name") == "sale_cap_rate") {
				error.insertAfter("#sale_cap_rate_id");
			}else if (element.attr("name") == "status") {
				error.insertAfter("#status_id");
			}else if (element.attr("name") == "property_type") {
				error.insertAfter("#property_type_id");
			}else if (element.attr("name") == "state") {
				error.insertAfter("#state_id");
			}else if (element.attr("name") == "description") {
				error.insertAfter("#description_id");
			}else if (element.attr("id") == "id_email-1") {
				error.insertAfter("#div_error1");
			}else if (element.attr("id") == "id_email-2") {
				error.insertAfter("#div_error2");
			}else if (element.attr("id") == "id_email-3") {
				error.insertAfter("#div_error3");
			}else if (element.attr("id") == "id_email-4") {
				error.insertAfter("#div_error4");
			}else if (element.attr("id") == "id_email-5") {
				error.insertAfter("#div_error5");
			}else if (element.attr("id") == "id_email-6") {
				error.insertAfter("#div_error6");
			}else if (element.attr("id") == "id_email-7") {
				error.insertAfter("#div_error7");
			}else if (element.attr("id") == "id_email-8") {
				error.insertAfter("#div_error8");
			}else if (element.attr("id") == "id_email-9") {
				error.insertAfter("#div_error9");
			}else if (element.attr("id") == "id_email-10") {
				error.insertAfter("#div_error10");
			}else if (element.attr("id") == "id_email-11") {
				error.insertAfter("#div_error11");
			}else if (element.attr("id") == "id_email-12") {
				error.insertAfter("#div_error12");
			}else if (element.attr("id") == "id_email-13") {
				error.insertAfter("#div_error13");
			}else if (element.attr("id") == "id_email-14") {
				error.insertAfter("#div_error14");
			}else if (element.attr("id") == "id_email-15") {
				error.insertAfter("#div_error15");
			}else if (element.attr("id") == "id_phone-1") {
				error.insertAfter("#div_error_phone1");
			}else if (element.attr("id") == "id_phone-2") {
				error.insertAfter("#div_error_phone2");
			}else if (element.attr("id") == "id_phone-3") {
				error.insertAfter("#div_error_phone3");
			}else if (element.attr("id") == "id_phone-4") {
				error.insertAfter("#div_error_phone4");
			}else if (element.attr("id") == "id_phone-5") {
				error.insertAfter("#div_error_phone5");
			}else if (element.attr("id") == "id_phone-6") {
				error.insertAfter("#div_error_phone6");
			}else if (element.attr("id") == "id_phone-7") {
				error.insertAfter("#div_error_phone7");
			}else if (element.attr("id") == "id_phone-8") {
				error.insertAfter("#div_error_phone8");
			}else if (element.attr("id") == "id_phone-9") {
				error.insertAfter("#div_error_phone9");
			}else if (element.attr("id") == "id_phone-10") {
				error.insertAfter("#div_error_phone10");
			}else if (element.attr("id") == "id_phone-11") {
				error.insertAfter("#div_error_phone11");
			}else if (element.attr("id") == "id_phone-12") {
				error.insertAfter("#div_error_phone12");
			}else if (element.attr("id") == "id_phone-13") {
				error.insertAfter("#div_error_phone13");
			}else if (element.attr("id") == "id_phone-14") {
				error.insertAfter("#div_error_phone14");
			}else if (element.attr("id") == "id_phone-15") {
				error.insertAfter("#div_error_phone15");
			}
			else {
				error.insertAfter(element);
			}

		},

		highlight: function(element) {
		    //$(element).closest('.clone').addClass('my_error');
			$(element).closest('.input-field').addClass('error');



		},
		unhighlight: function(element) {
			$(element).closest('.input-field').removeClass("error");
			//$(element).closest('.clone').removeClass('my_error');
		},
        messages: {
			"city_name":{
				required: "This field is required."
			},
			"zipcode":{
				required: "This field is required.",
				maxlength: "Please enter valid zipcode.",
				minlength: "Please enter valid zipcode."
			},
			"sale_price":{
				required: "This field is required.",
				number: "Please enter valid amount.",
				maxlength: "Entered exceeds the maximum length",
				min: "Please enter valid amount."
			},
			"sale_cap_rate":{
				number: "Please enter valid amount.",
				maxlength: "Entered exceeds the maximum length"
			},
			"gross_income":{
				number: "Please enter valid amount.",
				maxlength: "Entered exceeds the maximum length"
			},
			"net_income":{
				number: "Please enter valid amount.",
				maxlength: "Entered exceeds the maximum length"
			},
			"price_per_unit":{
				number: "Please enter valid amount.",
				maxlength: "Entered exceeds the maximum length"
			},
			"price_per_sf":{
				number: "Please enter valid number.",
				maxlength: "Entered exceeds the maximum length"
			},
			"occupancy":{
				number: "Please enter valid amount.",
				maxlength: "Entered exceeds the maximum length"
			},
			"building_size":{
				number: "Please enter valid number.",
				maxlength: "Entered exceeds the maximum length"
			},
			"lot_size":{
				number: "Please enter valid amount.",
				maxlength: "Entered exceeds the maximum length"
			},
			"year_built":{
				number: "Please enter valid amount.",
				maxlength: "Entered exceeds the maximum length"
			}
        },


        success: function () {

        }
    });

     $("#id_email").each(function () {
   		$(this).rules("add", {
      	email: true,
   		});
	});

	$("[name^=phone]").each(function () {
   		$(this).rules("add", {
      	customphone: true,
   		});
	});

	$.validator.addMethod('customphone', function (value, element) {
    	//return this.optional(element) || /^\d{3}-\d{3}-\d{4}$/.test(value);
    	return this.optional(element) || /^\d{3}\d{3}\d{4}$/.test(value);
    	//$("input[name='phone']").mask("999-999-9999");
	}, "Please enter a valid phone number");


	jQuery.validator.addMethod("lettersonly", function(value, element) {
  		return this.optional(element) || /^[a-z]+$/i.test(value);
	}, "City contain only letters.");

	jQuery.validator.addMethod("alphanumeric", function(value, element) {
  		return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
	}, "Zip code contain only letters, numbers.");
	//("#id_phone").mask("999-999-9999") 

});
