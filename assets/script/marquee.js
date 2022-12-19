document.querySelectorAll('.js-marquee').forEach(function(e) {
    var letter = e.querySelector('span');
    for (counter = 1; counter <= 3; ++counter) {
        var clone = letter.cloneNode(true);
        letter.after(clone);
    }
})

// HYPERLINKS
$("#hover-left").click(function () {window.open('map.html', "_self")})
$("#hover-right").click(function () {window.open('atlas.html', "_self")})
