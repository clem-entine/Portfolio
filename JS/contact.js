src="https://smtpjs.com/v3/smtp.js"

var btn= document.getElementById('btn');
btn.addEventListener('click',function(e){
    e.preventDefault()
    var name= document.getElementById('name').value;
    var name= document.getElementById('email').value;
    var name= document.getElementById('subject').value;
    var name= document.getElementById('message').value;
    var body='name: '+ name + '<br/> email'+ Email+'<br/> subject' +Subject+ '<br/> message'+ message;


    Email.send({
        Host : "smtp.gmail.com",
        Username : "clementine.mvukwe@younglings.africa",
        Password : "hqhjtcpyrzzppohl",
        To : 'clementine.mvukwe@younglings.africa',
        From : Email,
        Subject :Subject ,
        Body : body
    }).then(
      message => alert(message)
    );
})