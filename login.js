var defaultMailId = "soorajkuttus2004@gmail.com"
var defaultPassword = "12345678"

function log_click()
{
    var email = document.getElementById("username").value;
    console.log(email);
    var password = document.getElementById("password").value;
    console.log(password);

    var gmailExtension = "@gmail.com"
    console.log(gmailExtension)

    emailIdLength = email.length;
    console.log("user id len : ",emailIdLength);
    var extensionLength = gmailExtension.length;
    console.log("extension len : ",extensionLength);

    var newString ="";
    for(var i = emailIdLength-1; i >= 0; i--)
    {
        newString+=email.charAt(i)
        console.log(newString)
        if(newString.length==10)
        {
            newString = newString.split('').reduce((acc, char) => char + acc, '');
            console.log(newString);
            break
        }
    }
    validGmailExtensionCheck(newString,gmailExtension,email,password)
}
function validGmailExtensionCheck(userEnteredMailExtension, extension,$email,$password)
{
    if(userEnteredMailExtension == extension)
    {
        console.log(true)
        correctEmailAndPassword($email,$password)
    }
    else{
        console.log(false)
    }
}
function correctEmailAndPassword(emaillll,passwordddd)
{
    if((defaultMailId==emaillll)&&(defaultPassword==passwordddd))
    {
        console.log("Both: ",true)
        console.log(emaillll," ",defaultMailId,"/n")
        console.log(passwordddd," ",defaultPassword)
        window.location.href="page2.html";
    }
    else{
        console.log("Both: ",false)
        console.log(emaillll," ",defaultMailId)
        console.log(passwordddd," ",defaultPassword)
    }
}