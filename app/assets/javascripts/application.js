    //= require jquery
    //= require jquery_ujs
    //= require turbolinks
    //= require bootstrap-sprockets
    //= require underscore
    //= require json2
    //= require judge
    //= require judge-simple_form
    //= require_tree .


$(document).ready(function() {
        $('#user_email').blur(function(){
            judge.validate($("#user_email")[0], {
                valid: function(element) {
                    element.style.border = '3px solid green';
                },
                invalid: function(element, messages) {
                    element.style.border = '6px solid red';
                    alert(messages.join(','));
                }
            });

        });
    });