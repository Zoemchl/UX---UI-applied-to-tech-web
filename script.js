var i = 0;
var txt = 'Pour commencer quel est ton prenom?';
var speed = 60;
var cUser = document.getElementById('cUser')
var userName = document.getElementById('name')
var varName = ""
var activated = true
var activatedLastName = true
var firstSection = document.getElementById('firstSection')
var scrollDiv = document.getElementById('scroll')

function typeWriter() {
    if (i < txt.length) {
    document.getElementById("questionFirstName").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
    else if( i = txt.length){
        cUser.style.animation = 'yo 0.5s ease forwards'
    }
}

typeWriter()

window.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && activated === true) {
        if(userName.value != ""){
            namePrint()
            varName = userName.value   
            activated = false
        }
    }
})

function namePrint(){
    document.getElementById("questionFirstName").innerHTML = ""
    varName = userName.value
    userName.value = ""
    txt = `Ok super ${varName}, et ton nom alors ?`
    i = 0
    typeWriter()
}

window.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' &&  activatedLastName === true) {
        if(userName.value != ""){
            varlastName = userName.value   
            activatedLastName = false
            console.log(varlastName)
            document.getElementById('questionFirstName').style.display = "none"
            document.getElementById('firstSection').style.display = "none"
            scrollDiv.style.display = "flex"
            document.getElementById('end').style.display = "flex"
            document.getElementById('footer').style.display = "flex"
            
            txt = `Bienvenue ${varName} ${varlastName}!`
            i = 0
            typeText()
        }
    }
})

function typeText() {
    if (i < txt.length) {
    document.getElementById("divText").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
}

// txt = `Bienvenue ${varName} ${varlastName}!`
//             i = 0
//             typeText()