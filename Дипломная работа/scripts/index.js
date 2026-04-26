let close = document.getElementById('close');
let open = document.getElementById('open');
let extra = document.getElementById('hidden_row');
open.addEventListener('click',function(){
    extra.style.display='flex';
    open.style.display='none';
    close.style.display='block';
});
close.addEventListener('click',function(){
    extra.style.display='none';
    open.style.display='block';
    close.style.display='none';
});
let closeone = document.getElementById('close_one');
let closetwo = document.getElementById('close_two');
let closethree = document.getElementById('close_three');
let modalone = document.getElementById('modal_first');
let modaltwo = document.getElementById('modal_second');
let modalthree = document.getElementById('modal_third');
let cardone = document.getElementById('first_card');
let cardtwo = document.getElementById('second_card');
let cardthree = document.getElementById('third_card');
cardone.addEventListener('click' , function(){
    modalone.style.display='flex';
});
closeone.addEventListener('click' , function(){
    modalone.style.display='none';
});


cardtwo.addEventListener('click' , function(){
    modaltwo.style.display='flex';
});
closetwo.addEventListener('click' , function(){
    modaltwo.style.display='none';
});


cardthree.addEventListener('click' , function(){
    modalthree.style.display='flex';
});
closethree.addEventListener('click' , function(){
    modalthree.style.display='none';
});