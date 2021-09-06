// Navigasi
// 1. tangkap element dengan class/id navbar
const navbar = document.querySelector("#navbar");

// 2. jika element dengan class/id navbar diklik
navbar.addEventListener('click', function (e) {
    // 3. maka ambil element apa yang diklik oleh user
    const targetNavbar = e.target;

    // 4. lalu cek, jika element itu adalah link dengan class nav-link
    if (targetNavbar.classList.contains('nav-link')) {

        // 5. maka ambil menu link yang aktif
        const navbarLinkActive = document.querySelector("ul#navbar li a.active");

        // 6. lalu cek, Jika menu link active ada dan menu yang di klik user adalah menu yang tidak sama dengan menu yang aktif, (cara cek-nya yaitu dengan membandingkan value attribute href-nya)
        if (navbarLinkActive !== null && targetNavbar.getAttribute('href') !== navbarLinkActive.getAttribute('href')) {

            // 7. maka hapus class active pada menu yang sedang aktif
            navbarLinkActive.classList.remove('active');
        }

        // 8. terakhir tambahkan class active pada menu yang di klik oleh user
        targetNavbar.classList.add('active');
    }
});


// Parallax

// img mousemove
$('.jumbotron img').on('mousemove', function (e) {
    centerX = $(this).width() / 2;
    centerY = $(this).height() / 2;

    var moveX = centerX - e.offsetX;
    var moveY = centerY - e.offsetY;
    $(this).css({
        'transform': 'perspective(500px) rotateX(' + moveY / 8 + 'deg) rotateY(' + moveX / 8 + 'deg)'
    });
});

// About
$(window).on('load', function () {
    $('.p-kiri').addClass('p-muncul');
    $('.p-kanan').addClass('p-muncul');
});

// scroll function
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // Jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });
    $('.jumbotron h1').css({
        left: wScroll / 4 + '%'
    });
    $('.jumbotron p').css({
        right: wScroll / 4 + '%'
    });

    // Project
    if (wScroll > $('#project').offset().top - 200) {
        $('.container .card-top').each(function (i) {
            setTimeout(function () {
                    $('.container .card-top').eq(i).addClass('muncul');
                },
                500 * (i + 1));
        });
    }

    if (wScroll > $('#project').offset().top) {
        $('.container .card-bot').each(function (i) {
            setTimeout(function () {
                    $('.container .card-bot').eq(i).addClass('muncul');
                },
                500 * (i + 1));
        });
    }

    // Contact
    if (wScroll > $('#contact').offset().top - 500) {
        $('#contact').addClass('muncul');
    }
});