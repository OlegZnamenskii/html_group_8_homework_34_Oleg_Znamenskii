/**
 * Created by Usver on 17.02.2017.
 */
var validation = $('#reg-form').validate({
    rules: {
        userPassword: {
            minlength: 8
        }
    }

});

$('#phone').mask("+(999) 999-9999");

var validation = $('#reg-formp').validate({
    rules: {
        userPassword: {
            minlength: 8
        }
    }

});

$('#phone_p').mask("+(999) 999-9999");
;

//плавная прокрутка

menu.on("click","a", function (event) {

    event.preventDefault();

    var id  = $(this).attr('href'),

        top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 1000);
});
