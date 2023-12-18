var submenu = document.getElementById("subnavigation-consumers");

$(document).ready(function() {
    // Event handler for li click
    $(".icon").click(function(event) {
        $('#myLinks').toggleClass('slideLeft');
    $('#hamburger').toggleClass('close')
    });
   

    $('.arrow').hover(
        function() {
          $(this).find('.consumer-subnavigation').addClass('d-block');
          $(this).find('.subnavigation').addClass('d-block');
        },
        function() {
          $(this).find('.consumer-subnavigation').removeClass('d-block');
          $(this).find('.subnavigation').removeClass('d-block');
        }
      );
    var isFirstClick = true; // Initialize isFirstClick variable
    var isSecondClick = true;

    $('.Startups').click(function() {
        $('.Startups').addClass('active-bg')
        if (isFirstClick) {
            $('.subnavigation').css('width', '600px');
            submenu.style.transform = "translateX(10%)";
            $('.step-2').removeClass('hide');
            $('.step-2').addClass('slideIn');
            isFirstClick = false;
        } else {
            // Close subnavigation when clicking on '.Startups' again
            $('.subnavigation').addClass('d-none');
            $('.business').removeClass('active');
            $('.step-2').addClass('hide');
            $('.step-2').removeClass('slideIn');
            isFirstClick = true;
        }
    });
    
    $('.land').click(function() {
        $('.land').addClass('active-bg')
        if (isSecondClick) {
            $('.subnavigation').css('width', '850px');
            $('.step-3').removeClass('hide');
            submenu.style.transform = "translateX(20%)";
            $('.step-3').addClass('slideIn');
            isSecondClick = false;
        } else {
            // Close subnavigation when clicking on '.land' again
            $('.subnavigation').addClass('d-none');
            $('.business').removeClass('active');
            $('.step-3').addClass('hide');
            $('.step-3').removeClass('slideIn');
            isSecondClick = true;
        }
    });

    // Event handler for clicking outside the navigation and subnavigation
    // $(document).click(function(event) {
    //     // Check if the clicked element is within the subnavigation
    //     if (!submenu.contains(event.target)) {
    //         $('.subnavigation').addClass('d-none');
    //         $('.business').removeClass('active');
    //         $('.step-2, .step-3').addClass('hide');
    //         $('.step-2, .step-3').removeClass('slideIn');
    //         $('.subnavigation').css('width', '350px');
    //         isFirstClick = true;
    //         isSecondClick = true;
    //     }
    // });

    // Event handler for clicking inside the subnavigation
    $(submenu).click(function(event) {
        event.stopPropagation();
    });
});
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  $(document).ready(function () {
    var storedCryptoData = localStorage.getItem('cryptoData');

    if (storedCryptoData) {
      displayCryptoData(JSON.parse(storedCryptoData));
    } else {
      var settings = {
        "url": "https://rest.coinapi.io/v1/assets",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Accept": "application/json",
          "X-CoinAPI-Key": "6A174C09-4FBE-4328-8A96-0402A7764097"
        },
      };

      $.ajax(settings).done(function (response) {
        console.log(response)
        var filteredData = response.filter(function (asset) {
          return asset.asset_id === "BTC" || asset.asset_id === "ETH" || asset.asset_id === "USDT";
        });

        localStorage.setItem('cryptoData', JSON.stringify(filteredData));
        displayCryptoData(filteredData);
      });
    }
  });

  function displayCryptoData(data) {
    data.forEach(function (asset) {
      switch (asset.asset_id) {
        case "BTC":
          $('#bitcoin-name').text(asset.name);
          $('#bitcoin-price').text("$ " + parseFloat(asset.price_usd).toFixed(2));
          break;
        case "ETH":
          $('#etherium-name').text(asset.name);
          $('#etherium-price').text("$ " + parseFloat(asset.price_usd).toFixed(2));
          break;
        case "USDT":
          $('#tether-name').text(asset.name);
          $('#tether-price').text("$ " + parseFloat(asset.price_usd).toFixed(2));
          break;
        default:
          break;
      }
    });
  }

   // JavaScript for adding class on scroll
   window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 20) { 
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


//   if($(".service-slider").length) {
    // if ($(".service-slider").hasClass("slick-initialized")) {
    //     $(".service-slider").slick("unslick");
    // }
    $('.service-slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        centerMode: true,
        centerPadding: '12.5rem',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        prevArrow: '<button class="slide-arrow prev-arrow"><img src="./assets/images/arrow-left.png" /></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><img src="./assets/images/arrow-right.png" /></button>',
        responsive: [
            {
            breakpoint: 900,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '2.5rem',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: false,
                slidesToShow: 1,
                adaptiveHeight: true

            }
            }
        ]
            });
//   }


$(window).mousemove(function (e) {
	$(".ring").css(
		"transform",
		`translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
	);
});

var preloader = document.getElementById('loading');
var loadtime = 2000; //set time accordingly
if(preloader){
  setTimeout(function loader(){
    preloader.style.display = "none";     
}, loadtime);
}



const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor2");

const textArray = ["Forex Trading", "Crypto Trading", "Stock Trading", "CryptoCurrency Staking", "Stable Coin Investments", "Digital Assets-NFT's..."];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 30);
  } else {
    cursor.classList.add('blink');
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 10);
  }
}

const type = () => {
  if (charIndex <= textArray[textArrayIndex].length - 1) {
    cursor.classList.remove('blink');
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    cursor.classList.add('blink');
    setTimeout(erase, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
})

document.addEventListener("DOMContentLoaded", function() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
  
  const h1Element = document.querySelector("h1");
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    h1Element.innerText = h1Element.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return h1Element.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= h1Element.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
});


$('.bitcoin').on('click', function() {
  $('#bitcoinModal').modal('show'); // Show the Bitcoin modal when the div is clicked
});