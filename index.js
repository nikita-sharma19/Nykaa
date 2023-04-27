function changeMode(){
    let mybody = document.body;
    mybody.classList.toggle('docBody');

    // let brandlinks= document.getElementsByClassName("brandLinks");
    // brandlinks.style.property.color="white";
}
function loadCoupon(){
    document.getElementById('coupon').style.visibility='visible';
    document.getElementByclassName('main-div').style.opacity='0.8';
}
function closeCoupon(){
    document.getElementById('coupon').style.visibility='hidden';
    document.getElementByclassName('main-div').style.opacity='1';
}

