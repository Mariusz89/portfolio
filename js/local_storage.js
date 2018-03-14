var rgba_green = "rgba(28,202,162,1)";
var rgba_green2 = "rgba(49,209,129,1)";

if (typeof (localStorage) == 'undefined') {
    console.log('Your browser does not support HTML5 localStorage. Try upgrading.');
} else {
    if (localStorage.getItem("color") != null) {
        getColour = localStorage.color;
        $('.logo_surname').css('color', getColour);
        $('.fa').css("color", getColour);
        $('.span1').css('color', getColour);
        $('.color1 a').css("color", getColour);
        $('.table_td_mail a').css("color", getColour);
    }
}

if (typeof (localStorage) == 'undefined') {
    console.log('Your browser does not support HTML5 localStorage. Try upgrading.');
} else {
    if (localStorage.getItem("background") != null) {
        getColour = localStorage.background;
        $('.section1').css('background', getColour);  
        $('.hamburger .line').css('background', getColour);
        $('.title').css('background', getColour);
        $('.contactForm input.submit').css('background', getColour);
        $('.contactForm input ~ .border').css('background', getColour);
        $('.contactForm textarea ~ .border').css("background", getColour);
    }
}

if (typeof (localStorage) == 'undefined') {
    console.log('Your browser does not support HTML5 localStorage. Try upgrading.');
} else {
    if (localStorage.getItem("class") != null) {
        getColour = localStorage.class;
        $('.menu li').attr('class', getColour);
        $('.nav-toggle span').attr('class', getColour);
        $('.da-thumbs li a div').attr('class', getColour);
    }
}

$("#greenButton").click(function () {
    setColour = rgba_green2;/*to more test color can change and retest*/
    setColour1 = 'url(./image/random-grey-variations.png), -webkit-linear-gradient(left,' + rgba_green + ', ' + rgba_green2 + ')';
    setColour2 = 'background_green';
    if (setColour == "") {
        console.log('You never entered anything silly!');
        return;
    }
   
    $('.logo_surname').css('color', setColour);
    $('.section1').css('background', setColour1);
    $('.menu li').attr('class', setColour2);
    $('.fa').css("color", setColour);
    $('.span1').css('color', setColour);
    $('.color1 a').css("color", setColour);
    $('.table_td_mail a').css("color", setColour);
    $('.hamburger .line').css('background', setColour1);
    $('.title').css('background', setColour1);
    $('.nav-toggle span').attr('class', setColour2);
    $('.da-thumbs li a div').attr('class', setColour2);
    $('.contactForm input.submit').css('background', setColour1);
    $('.contactForm input ~ .border').css('background', setColour1);
    $('.contactForm textarea ~ .border').css('background', setColour1);
    localStorage.setItem("color", setColour);
    localStorage.setItem("background", setColour1);
    localStorage.setItem("class", setColour2);
    console.log('Colour ' + setColour + ' saved in localStorage');
});

var rgb_orange = " rgb(255, 183, 94)";
var rgb_orange2 = "rgb(237, 143, 3)";

$("#orangeButton").click(function () {
    setColour = rgb_orange2;/*to more test color can change and retest*/
    setColour1 = 'url(./image/random-grey-variations.png), -webkit-linear-gradient(left,' + rgb_orange + ', ' + rgb_orange2 + ')';
    setColour2 = 'background_orange';
    if (setColour == "") {
        console.log('You never entered anything silly!');
        return;
    }
    
    $('.logo_surname').css('color', setColour);
    $('.section1').css('background', setColour1);
    $('.menu li').attr('class', setColour2);
    $('.fa').css("color", setColour);
    $('.span1').css('color', setColour);
    $('.color1 a').css("color", setColour);
    $('.hamburger .line').css('background', setColour1);
    $('.table_td_mail a').css("color", setColour);
    $('.title').css('background', setColour1);
    $('.nav-toggle span').attr('class', setColour2);
    $('.da-thumbs li a div').attr('class', setColour2);
    $('.contactForm input.submit').css('background', setColour1);
    $('.contactForm input ~ .border').css("background", setColour1);
    $('.contactForm textarea ~ .border').css("background", setColour1);
    localStorage.setItem("color", setColour);
    localStorage.setItem("background", setColour1);
    localStorage.setItem("class", setColour2);
    console.log('Colour ' + setColour + ' saved in localStorage');
});


var rgb_red = " rgb(255, 153, 102)";
var rgb_red2 = " rgb(255, 94, 98)";

$("#redButton").click(function () {
    setColour = rgb_red2;/*to more test color can change and retest*/
    setColour1 = 'url(./image/random-grey-variations.png), -webkit-linear-gradient(left,' + rgb_red + ', ' + rgb_red2 + ')';
    setColour2 = 'background_red';
    if (setColour == "") {
        console.log('You never entered anything silly!');
        return;
    }
   
    $('.logo_surname').css('color', setColour);
    $('.section1').css('background', setColour1);
    $('.menu li').attr('class', setColour2);
    $('.fa').css("color", setColour);
    $('.span1').css('color', setColour);
    $('.color1 a').css("color", setColour);
    $('.hamburger .line').css('background', setColour1);
    $('.table_td_mail a').css("color", setColour);
    $('.title').css('background', setColour1);
    $('.nav-toggle span').attr('class', setColour2);
    $('.da-thumbs li a div').attr('class', setColour2);
    $('.contactForm input.submit').css('background', setColour1);
    $('.contactForm input ~ .border').css("background", setColour1);
    $('.contactForm textarea ~ .border').css("background", setColour1);
    localStorage.setItem("color", setColour);
    localStorage.setItem("background", setColour1);
    localStorage.setItem("class", setColour2);
    console.log('Colour ' + setColour + ' saved in localStorage');
});


var rgb_blue = "rgb(0, 198, 255)";
var rgb_blue2 = "rgb(0, 114, 255)";

$("#blueButton").click(function () {
    setColour = rgb_blue2;/*to more test color can change and retest*/
    setColour1 = 'url(./image/random-grey-variations.png), -webkit-linear-gradient(left,' + rgb_blue + ', ' + rgb_blue2 + ')';
    setColour2 = 'background_blue';
    if (setColour == "") {
        console.log('You never entered anything silly!');
        return;
    }

    $('.logo_surname').css('color', setColour);
    $('.section1').css('background', setColour1);
    $('.menu li').attr('class', setColour2);
    $('.fa').css("color", setColour);
    $('.span1').css('color', setColour);
    $('.color1 a').css("color", setColour);
    $('.hamburger .line').css('background', setColour1);
    $('.table_td_mail a').css("color", setColour);
    $('.title').css('background', setColour1);
    $('.nav-toggle span').attr('class', setColour2);
    $('.da-thumbs li a div').attr('class', setColour2);
    $('.contactForm input.submit').css('background', setColour1);
    $('.contactForm input ~ .border').css("background", setColour1);
    $('.contactForm textarea ~ .border').css("background", setColour1);
    localStorage.setItem("color", setColour);
    localStorage.setItem("background", setColour1);
    localStorage.setItem("class", setColour2);
    console.log('Colour ' + setColour + ' saved in localStorage');
});
