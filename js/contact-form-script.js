function submitForm(){var t=$("#name").val(),e=$("#email").val(),s=$("#msg_subject").val(),a=$("#message").val();$.ajax({type:"POST",url:"php/form-process.php",data:"name="+t+"&email="+e+"&msg_subject="+s+"&message="+a,success:function(t){"success"==t?formSuccess():(formError(),submitMSG(!1,t))}})}function formSuccess(){$("#contactForm")[0].reset(),submitMSG(!0,"Message Submitted!")}function formError(){$("#contactForm").removeClass().addClass("shake animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass()})}function submitMSG(t,e){t=t?"h3 text-center tada animated text-success":"h3 text-center text-danger",$("#msgSubmit").removeClass().addClass(t).text(e)}$("#contactForm").validator().on("submit",function(t){t.isDefaultPrevented()?(formError(),submitMSG(!1,"Did you fill in the form properly?")):(t.preventDefault(),submitForm())});