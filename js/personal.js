const investor = document.getElementById("investor")
const investorHead = document.getElementById("investor-head")

const aboutusHead = document.getElementById("aboutus-head")
const aboutus = document.getElementById("aboutus")

const branchHead = document.getElementById("branch-head")
const branch = document.getElementById("branch")

const openAccountHead = document.getElementById("open-account-head")
const openAccount = document.getElementById("open-account")


const contactHead = document.getElementById("contact-head")
const contact = document.getElementById("contact")

const cardsHead = document.getElementById("cards-head")
const cards = document.getElementById("cards")

const btnHead = documenmt.getElementById("btn-drop-down-head")
const btn = document.getElementById("btn-drop-down")


//Investor Drop Down
investorHead.addEventListener('mouseenter', showInvestorDropDown);
investor.addEventListener('mouseenter', showInvestorDropDown);
investorHead.addEventListener('mouseleave', hideInvestorDropDown);
investor.addEventListener('mouseleave', hideInvestorDropDown);

function showInvestorDropDown(){
    investor.style.display='block'
}
function hideInvestorDropDown(){
    investor.style.display='none'
}


//about us drop down
aboutusHead.addEventListener('mouseenter', showAboutusDropDown);
aboutus.addEventListener('mouseenter', showAboutusDropDown);
aboutusHead.addEventListener('mouseleave', hideAboutusDropDown);
aboutus.addEventListener('mouseleave', hideAboutusDropDown)

function showAboutusDropDown(){
    aboutus.style.display='block'
}

function hideAboutusDropDown(){
    aboutus.style.display='none'
}

//Branch Drop Down
branchHead.addEventListener('mouseenter', showBranchDropDown);
branch.addEventListener('mouseenter', showBranchDropDown);
branchHead.addEventListener('mouseleave', hideBranchDropDown);
branch.addEventListener('mouseleave', hideBranchDropDown)

function showBranchDropDown(){
    branch.style.display='block'
}

function hideBranchDropDown(){
    branch.style.display='none'
}

//Contact Drop Down
contactHead.addEventListener('mouseenter', showContactDropDown);
contact.addEventListener('mouseenter', showContactDropDown);
contactHead.addEventListener('mouseleave', hideContactDropDown);
contact.addEventListener('mouseleave', hideContactDropDown)

function showContactDropDown(){
    contact.style.display='block'
}

function hideContactDropDown(){
    contact.style.display='none'
}




//SECOND NAV DROP DOWN
//open account drop down
openAccountHead.addEventListener('mouseenter', showOpenAccounDropDown);
openAccount.addEventListener('mouseenter', showOpenAccounDropDown);
openAccountHead.addEventListener('mouseleave', hideOpenAccounDropDown);
openAccount.addEventListener('mouseleave', hideOpenAccounDropDown)

function showOpenAccounDropDown(){
    openAccount.style.display='block'
}

function hideOpenAccounDropDown(){
    openAccount.style.display='none'
}

//Cards nav
cardsHead.addEventListener('mouseenter', showCardsDropDown);
cards.addEventListener('mouseenter', showCardsDropDown);
cardsHead.addEventListener('mouseleave', hideCardsDropDown);
cards.addEventListener('mouseleave', hideCardsDropDown)

function showCardsDropDown(){
    cards.style.display='block'
}

function hideCardsDropDown(){
    cards.style.display='none'
}




//BTN DROP DOWN

btnHead.addEventListener('mouseenter', showBtnDropDown);
btn.addEventListener('mouseenter', showBtnDropDown);
btnHead.addEventListener('mouseleave', hideBtnDropDown);
btn.addEventListener('mouseleave', hideBtnDropDown)

function showBtnDropDown(){
    btn.style.display='block'
}

function hideBtnDropDown(){
    btn.style.display='none'
}



//Image slider
var i = 0;
var images= [];
var time =3000;

images[0]= './images/personal/1.png';
images[1]= './images/personal/2.png';
images[2]= './images/personal/3.png';
images[3]= './images/personal/4.png';
images[4]= './images/personal/5.png';


//change image
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else{
        i=0;
    }

    setTimeout('changeImg()', time);    
}

// windows.onload = changeImg;








































// const topDropDown = document.getElementsByClassName('drop-down');
// console.log(topDropDown);

// topDropDown.addEventListener('mouseenter', showDropDown);

    // topDropDown.forEach(element => {
    // element.addEventListener('mouseenter', showItem);
    
    // function showItem(){
    //     // element.style.display='block'
    //     console.log('enter')
    // }
    // });






// const btn = document.getElementById('nav-btn');
// const underBtns = document.getElementById('under-btn');
// const navbar = document.getElementById('navbar')

// btn.addEventListener('mouseenter', showUnderBtn);
// underBtns.addEventListener('mouseleave', hideUnderBtn);
// navbar.addEventListener('mouseleave', hideUnderBtn)


// function showUnderBtn(){
//     underBtns.style.display = 'flex'
// }


// function hideUnderBtn(){
//     underBtns.style.display = 'none'
// }



// var currentIndex = 1;
// displaySlides(currentIndex);



// function displaySlides(num){
//     var x ;
//     var slides = document.getElementsByClassName('single-image')

//     if (num > slides.length) {
//         currentIndex =1}
//     if(num<1){
//         currentIndex = slides.length}
     
//         for (x=0; x< slides.length;
//         x++){
//             slides[x].getElementsByClassName.display ="none";
//         }
//         slides[currentIndex -1].getElementsByClassName.display ="block"
// }

// function setSlides(num){
//     displaySlides(currentIndex += num);
// }