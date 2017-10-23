(function($) {
    $(function() {


        // Add class in header fixed

        $(window).scroll(function() {

            if ($(this).scrollTop() > 0) {
                $('.search-property-head').addClass('fix-sticky');
            } else {
                $('.search-property-head').removeClass('fix-sticky');
            }
        })


        $('.reti-filter-method').click(function(){
            $('body').addClass('fixed-body');
           
        });

        $('.side-nav .close-filter-btn,.side-nav .cancel-button-link,.form-page .close-form-page,.form-page-button .cancel-button-link').click(function(){
                $('body').removeClass('fixed-body');
                scrolltotop();
        });

        $(document).on('click',"#sidenav-overlay",function() {
                $('body').removeClass('fixed-body');
                scrolltotop();
        });


        function scrolltotop(){
            $(".scrollbar-filter-container").mCustomScrollbar("scrollTo","top",{
                scrollEasing:"easeOut"
            });
        }




        // for side nav in mobile menu
        $('.mob-btn.button-collapse').sideNav({
            menuWidth: 225, // Default is 300
            edge: 'right', // Choose the horizontal origin
            closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        });


        // add seller
        $('.add-seller.button-collapse').sideNav({
            menuWidth: 415, // Default is 300
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
            
        });

        // assign agent
        $('.assign-agent.button-collapse').sideNav({
            menuWidth: 415, // Default is 300
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        });

        // add admin in sign up
        // $('.add-admin.button-collapse').sideNav({
        //     menuWidth: 415, // Default is 300
        //     edge: 'right', // Choose the horizontal origin
        //     closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        //     draggable: true // Choose whether you can drag to open on touch screens
        // });

        // edit admin in profile
        $('.edit-admin.button-collapse').sideNav({
            menuWidth: 415, // Default is 300
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        });



        // view map
        $('.button-collapse.google-map-address').sideNav({
            menuWidth: 434, // Default is 300
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        });

        $('.button-collapse.view-map-container').sideNav({
            menuWidth: 434, // Default is 300
             edge: 'right', // Choose the horizontal origin
             closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
             draggable: true // Choose whether you can drag to open on touch screens
        });

        // Filter method

        $('.button-collapse.reti-filter-method').sideNav({
            menuWidth: 363, // Default is 300
             edge: 'left', // Choose the horizontal origin
             closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
             draggable: true // Choose whether you can drag to open on touch screens

        });



        // remove border if ret-roster-carousel lenght <1
        
        var assignSlider1=$('.assign-agent-block .ret-roster-carousel').find('.item');
        if(assignSlider1.length == 1){
            $('.assign-agent-block .vertical-line').hide();
        }
        var assignSlider2=$('.selling-party-block .ret-roster-carousel').find('.item');
        if(assignSlider2.length == 1){
            $('.selling-party-block .vertical-line').hide();
        }
        var assignSlider3=$('.deal-party-block .ret-roster-carousel').find('.item');
        if(assignSlider3.length == 1){
            $('.deal-party-block .vertical-line').hide();
        }





        
        /***** Tabbing ******/
        $(document).on('click','.campaign-tab-list li a',function (e) {
            e.preventDefault();

            var activeTab = $(this).attr('href');
            $('.service-block').hide();
            $('.campaign-tab-list li a').removeClass('active');
            $(this).addClass('active');
            $(activeTab).fadeIn().find('.owl-carousel')
        .owlCarousel('invalidate', 'width')
        .owlCarousel('update');
        });


        

        

       $(document).on('click',".notification-overlay,.custom-black-overlay",function() {
            $('.notification-overlay,.custom-black-overlay').hide();
            $('body').removeClass('hidden-notification-on-body');
            $('body').removeClass('creat-event-body');
            $('.org-notification,.open-custom-modal').removeClass('animate-me');
            $('.email-sharing-popup').fadeOut(200);
            $('body').removeClass('fixed-page');
            $('#Feedback-modal').hide();
        })
        // Close Notification
        $(document).on('click',".close-notification",function() {
            $('.notification-overlay,.custom-black-overlay').hide();
            $(this).parents('.org-notification').removeClass('animate-me');
            $(this).parents('.open-custom-modal').removeClass('animate-me');
            $('body').removeClass('hidden-notification-on-body');
            $('body').removeClass('creat-event-body');
            $('.email-sharing-popup').fadeOut(200);
            $('body').removeClass('fixed-page');
            $('#Feedback-modal').hide();
        });

         $(document).on('click',".close-notification1",function() {
            $('.notification-overlay,.custom-black-overlay').hide();
            $(this).parents('.org-notification').removeClass('animate-me');
            $(this).parents('.open-custom-modal').removeClass('animate-me');
            $('body').removeClass('hidden-notification-on-body');
            $('body').removeClass('creat-event-body');
        });

        
        $('.tel-number-change').click(function() {
            $(this).parents('.verification-block').addClass('change-my-number');
        })

        $("#web_dropdown").dropdown();
        $("#mobile_dropdown").dropdown();
        
        $("#logout-me").dropdown();
        $("#logout-me-mob").dropdown();
        
        // email-sharing-modal
        $('.email-sharing-modal').click(function(){

            $('.email-sharing-popup').fadeIn();
            $('.custom-black-overlay').fadeIn();
            $('body').addClass('fixed-page');
        })


        // for Search Field
        $('.search-input input').focus(function(event) {
            event.stopPropagation();
            $(this).parents('.search-field').removeClass('revers-effects');
            $(this).parents('.search-field').addClass('search-narrow');
        });


        $('.search-input input').blur(function(event) {
            event.stopPropagation();
            $(this).parents('.search-field').addClass('revers-effects');
            $(this).parents('.search-field').find('input').val(''); // for remove input value
        });

        $('.close-search').click(function(event) {
            event.stopPropagation();
            $(this).parents('.search-field').removeClass('search-narrow');
            $(this).parents('.search-field').removeClass('revers-effects');
            $(this).parents('.search-field').find('input').val(''); // for remove input value
        })

        // for Toast

        $('.toast-click').click(function(event) {
                event.stopPropagation();
            $('.toast-show').addClass('in');
            

        })
        $('.close-toast').click(function(event) {
            event.stopPropagation();
            $(this).parents('.toast-show').removeClass('in');
        })
        

        $(document).click(function (event) {

            $('.toast-show').removeClass('in');
        });


        // modal Pop Up
        $('#crop-photo-modal').modal();
        $('#leave-page').modal();
        $('#Feedback-modal').modal();
         $('#Feedback-modal-two').modal();
        $('#cancel-page').modal();
        $('#enter-otp').modal();
        //$('#my-profile').modal();
        $('#my-profile-id,#my-profile-mob-id,#my-profile1,.openProfileDiv').click(function() {

            $('.my-profile-overlay').fadeIn(100);
            $('.user-profile').fadeIn(100);
            $('.mob-btn.button-collapse').sideNav('hide');


        })


        //  the selector will match all input controls of type :checkbox
            // and attach a click event handler 
            $(".method-name-list input:checkbox").on('click', function() {
              // in the handler, 'this' refers to the box clicked on
              var $box = $(this);
              if ($box.is(":checked")) {
                // the name of the box is retrieved using the .attr() method
                // as it is assumed and expected to be immutable
                var group = "input:checkbox[name='" + $box.attr("name") + "']";
                // the checked state of the group/box on the other hand will change
                // and the current value is retrieved using .prop() method
                $(group).prop("checked", false);
                $box.prop("checked", true);
              } else {
                $box.prop("checked", false);
              }
            });





        // close user profile

        $('.my-profile-overlay').click(function() {

            $('.my-profile-overlay,.user-profile').fadeOut(100);
            $('.edit-profile').css('display', 'block');
            $('.read-only-mode').css('display', 'block');
            $('.edit-only-mode').css('display', 'none');

        })


        //Dropdown menu
        $(".dropdown-button").dropdown();


        // for select drop down with label

        //$('select').material_select();

        // cancel request in notification
        $('.close-request').click(function() {

            //$(this).parents('.article-notify').css('display', 'none');
        });

        // Remove request in notification
        $('.cancel-request').click(function() {
            //$(this).parents('.article-notify').css('display', 'none');
        });

       

        $('#email-sent').modal({
            dismissible: false, // Modal can be dismissed by clicking outside of the modal
        });


        $('#property-created-sucessfully').modal({
            dismissible: false, // Modal can be dismissed by clicking outside of the modal
        });

        //datepicker show only year
        $('.date-own').datepicker({
            minViewMode: 2,
            format: 'yyyy',
            autoclose: true,
            orientation: 'auto'
        });


        var today = new Date();
        var dd = today.getDate();

        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        if(dd<10)
        {
            dd='0'+dd;
        }


        var months = [ "January", "February", "March", "April", "May", "June",
               "July", "August", "September", "October", "November", "December" ];
               
        mm = months[mm-1];
        today = mm+' '+dd+','+yyyy;
        $('.datepicker-input').datepicker({
            format: 'MM dd, yyyy',
            autoclose: true,
            orientation: "auto",
            startDate:new Date(today),
        }).on('changeDate', function(){
            // set the "toDate" start to not be later than "fromDate" ends:
             $("input[name='rps_enddate']").datepicker('setStartDate', new Date($(this).val()));
        });
         $('.datepicker-input1').datepicker({
            format: 'MM dd, yyyy',
            autoclose: true,
            orientation: "top auto",
            startDate:new Date(today),
        }).on('changeDate', function(){
    // set the "fromDate" end to not be later than "toDate" starts:
    $("input[name='rps_startdate']").datepicker('setEndDate', new Date($(this).val()));
        });


        // tabs for campaign
    }); // end of document ready
    
    $('.datepicker_input').datepicker({
			 format: 'MM dd, yyyy',
             autoclose: true,
             orientation: "auto"
		});
    /***** for navigation scrolling *******/

             var navH = $('.nav-wrapper').outerHeight();
             var tabH = $('.tabbing-nav').outerHeight();
             var nav_height = navH +  tabH;


            $('.tabbing-nav li a').bind('click.smoothscroll', function (e) {

                $('.tabbing-nav li a').removeClass('active');
                    $(this).addClass('active');

                var target = $(this).attr('href');

                //alert(target);
                $target = $(target);
                //alert(target)
                var goto = parseInt($target.offset().top) - nav_height;
                //alert(goto);

                $('html, body').stop().animate({
                    'scrollTop': goto
                }, 500, 'swing', function () {
                });


            });


    

                
     var sections = $('section');
    var nav = $('.tabbing-nav');
   
   
$(window).on('scroll', function () {

    
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {    
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
        
     if (cur_pos == 0 && cur_pos == 0) {
        $('.tabbing-nav li:first-child a').addClass('active');
     } 

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
    });

});


    



})(jQuery); // end of jQuery name space



/**** for float label with select ****/

(function ($) {
    $.fn.floatLabels = function (options) {

        // Settings
        var self = this;
        var settings = $.extend({}, options);


        // Event Handlers
        function registerEventHandlers() {
            // self.on('input keyup change focus', 'input, textarea', function () {
            //     actions.swapLabels(this);
            // });
            self.on('focusin', 'input, textarea', function () {
                actions.addFocus(this);
            });

            self.on('focusout', 'input, textarea', function () {
                actions.removeFocus(this);
            });

            self.on('mousedown', '.select-dropdown li a', function(){
                actions.selectValue(this);
            });

            // self.on('keyup', 'select + input', function(){
            //     actions.dropdownFilter(this);
            // });
            
        }


        // Actions
        var actions = {
            initialize: function() {
                self.each(function () {
                    var $this = $(this);
                    var $label = $this.children('label');
                    var $field = $this.find('input,textarea').first();

                    if ($this.children().first().is('label')) {
                        $this.children().first().remove();
                        $this.append($label);
                    }

                    var placeholderText = ($field.attr('placeholder') && $field.attr('placeholder') != $label.text()) ? $field.attr('placeholder') : $label.text();

                    $label.data('placeholder-text', placeholderText);
                    $label.data('original-text', $label.text());

                    if ($field.val() == '') {
                        $field.addClass('empty')
                    }
                });

            },

            changeSelectFields: function () {
                self.each(function () {
                    var $this = $(this);
                    // console.log($this);
                    var $selectFields = $this.find('select');
                    //console.log($selectFields.length);
                    if ($selectFields.length){
                        $selectFields.hide();
                        $selectedFieldID = $selectFields.attr('id');
                        $selectFields.after('<input type="text" class="form-control replaced-select-field" id="'+$selectedFieldID+'-styled" readonly>');
                        $options = $selectFields.find('option');
                        $styledElements = Array();
                        $options.each(function($i, $option){
                            $icon = $option.getAttribute('data-icon');

                            $icon = ($icon) ? '<i class="'+ $icon +'"></i> '  : '';
                            $html = '<li>'+
                                        '<a href="javascript:;" data-option="'+$option.value+'">'+
                                            $icon + $option.text
                                        '</a>'+
                                    '</li> '
                            $styledElements.push($html);
                        });
                        $styledElements ='<ul class="dropdown-menu select-dropdown" id="'+$selectedFieldID+'-dropdown">' + $styledElements.join(' ') + '</ul>' ;
                        $this.append($styledElements)
                    }
                    $('#square-feet-list-dropdown li').eq(1).addClass('current'); 
                });
            },

            selectValue: function(dropdown_elemet){
                $dropdown_elemet = $(dropdown_elemet);


                
                $relatedSelectFiled = $dropdown_elemet.parents('.select-dropdown').siblings('select');
                $relatedInputFiled = $dropdown_elemet.parents('.select-dropdown').siblings('input');
                
                $relatedSelectFiled.val($dropdown_elemet.data('option'));

                $relatedInputFiled.val($.trim($dropdown_elemet.text()));
                
                $dropdown_elemet.parents('.select-dropdown').find('li').removeClass('current');
                $dropdown_elemet.parent().addClass('current')

                 
         



            },

            dropdownFilter: function(inputField){
                $inputField = $(inputField);

                $relatedDDField  = $inputField.siblings('.select-dropdown');
                $options = $relatedDDField.find('a');


                $options.each(function(i, option){
                    $option = $(option);
                    if($.trim($option.text().toLowerCase()).search($.trim($inputField.val()).toLowerCase()) === -1){
                        $option.addClass('hide');
                    }else{
                        $option.removeClass('hide');
                    }
                });
            },

            swapLabels: function (field) {
                var $field = $(field);
                var $label = $(field).siblings('label').first();
                var isEmpty = Boolean($field.val());
                if (isEmpty) {
                    $field.removeClass('empty');
                    $label.text($label.data('original-text'));
                }
                else {
                    $field.addClass('empty');
                    $label.text($label.data('placeholder-text'));
                }
            },

            addFocus: function (field) {
                var $field = $(field);
                var $label = $(field).siblings('label').first();
                // var isEmpty = Boolean($field.val());
                $field.removeClass('empty');
                $label.text($label.data('original-text'));
                if($field.hasClass('replaced-select-field')){
                    $field.siblings('ul.select-dropdown').addClass('show');

                }

                
            },

            removeFocus: function (field) {
                var $field = $(field);
                var $label = $(field).siblings('label').first();
                var isEmpty = Boolean($field.val());
                if(isEmpty){
                    $field.removeClass('empty');
                    $label.text($label.data('placeholder-text'));
                }else{
                     $field.addClass('empty');
                    $label.text($label.data('original-text'));
                }
                if($field.hasClass('replaced-select-field')){
                    $field.siblings('ul.select-dropdown').removeClass('show');
                }
               
            }
        };


        // Initialization
        function init() {
            registerEventHandlers();

            actions.initialize();
            actions.changeSelectFields();
            self.each(function () {
                actions.swapLabels($(this).find('input,textarea').first());
            });
        }
        init();

        return this;
    };
})(jQuery);

$(function () {
    $('.float-label-control').floatLabels();
});
 





