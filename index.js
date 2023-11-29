$(document).ready(function () {

let  list_1 = document.querySelectorAll('.list_1');

init();

list_1.forEach(function(element){
    element.onclick = showTabs;
});

function init(){
    let block = document.querySelectorAll('.block');
    for(let i = 1; i < block.length; i++){
        block[i].style.display = 'none';
    }
}

function showTabs(){
    let data = this.getAttribute('data');
    let block = document.querySelectorAll('.block');
    for(let i = 0; i < block.length; i++){
        block[i].style.display = 'none';
    }
    document.querySelector(`.block[data="${data}"]`).style.display = 'block'; 
}

// ____________________________

$('.all_li').click(function(){
    $('.graphic').show();
    $('.web_des').show();
    $('.photography').show();
});

$('.graphic_li').click(function(){
    $('.graphic').show();
    $('.web_des').hide();
    $('.photography').hide();
});

$('.web_des_li').click(function(){
    $('.web_des').show();
    $('.graphic').hide();
    $('.photography').hide();
});

$('.photography_li').click(function(){
    $('.graphic').hide();
    $('.web_des').hide();
    $('.photography').show();
});

// -----------------------------------------
// Начальное состояние: скрыть все разделы, кроме "home"
$('.m, .two_2, .two_3, .two_4, .two_5, .two_6').hide();

// Обработчик нажатия на "Home"
$('.home_li, .home_img').click(function(){
    $('.m').hide();
    $('.two_2, .two_3, .two_4, .two_5, .two_6').hide();
    $('.home').show();
    $('.next').show();
});

// Обработчик нажатия на "About me"
$('.about_me_li, .about_me_img').click(function(){
    $('.m').hide();
    $(' .two_3, .two_4, .two_5, .two_6').hide();
    $('.home').hide();
    $('.two_2').show();
    $('.next').show();
});

// Обработчик нажатия на "Resume"
$('.resume_li, .resume_img').click(function(){
    $('.m').hide();
    $('.two_2, .two_4, .two_5, .two_6').hide();
    $('.home').hide();
    $('.two_3').show();
    $('.next').show();
});

// Обработчик нажатия на "Testimonials"
$('.testimonials_li, .testimonials_img').click(function(){
    $('.m').hide();
    $('.two_2, .two_3,  .two_5, .two_6').hide();
    $('.home').hide();
    $('.two_4').show();
    $('.next').show();
});

// Обработчик нажатия на "Portfolio"
$('.portfolio_li, .portfolio_img').click(function(){
    $('.m').hide();
    $('.two_2, .two_3, .two_4, .two_6').hide();
    $('.home').hide();
    $('.two_5').show();
    $('.next').show();
});

// Обработчик нажатия на "Contact"
$('.contact_li, .contact_img').click(function(){
    $('.m').hide();
    $('.two_2, .two_3, .two_4, .two_5').hide();
    $('.home').hide();
    $('.two_6').show();
    $('.next').show();
});

// Обработчик нажатия на "Next"
$('.next').click(function(){
    $('.m').show();
    $('.home, .two_2, .two_3, .two_4, .two_5, .two_6').hide();
});

// --------------------модальное окно 1

$('.mo_1').click(function(){
    $('.overlay').show();
});

$('.close_popup').click(function(){
    $('.overlay').hide();
});

// --------------------модальное окно 2

$('.mo_5').click(function(){
    $('.overlay_aloe').show();
});

$('.close_popup_aloe').click(function(){
    $('.overlay_aloe').hide();
});

// --------------------модальное окно 3
$('.mo_2').click(function(){
    $('.overlay_three').show();
});

$('.close_popup_three').click(function(){
    $('.overlay_three').hide();
});
// --------------------модальное окно 4

$('.mo_3').click(function(){
    $('.overlay_four').show();
});

$('.close_popup_four').click(function(){
    $('.overlay_four').hide();
});

// --------------------модальное окно 5

$('.mo_4').click(function(){
    $('.overlay_five').show();
});

$('.close_popup_five').click(function(){
    $('.overlay_five').hide();
});





// карта

$(document).ready(function() {
    let createButton = $('#create');
    createButton.click(function() {
      let mapBlock = $('#mapBlock');
      mapBlock.css('width', '100%');
      mapBlock.css('height', '100%');
  
      DG.then(function() {
        let map = DG.map('mapBlock', {
          center: [59.22123356509211, 39.89309499999999],
          zoom: 17,
        });
        DG.marker([59.22123356509211, 39.89309499999999]).addTo(map).bindPopup('Вход со двора, 2 этаж');
      });
      $('.overlay_karta').show();
    });
    $('.close_popup_karta').click(function() {
      $('.overlay_karta').hide();
    });
  });
  });
