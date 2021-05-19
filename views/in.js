document.addEventListener('DOMContentLoaded', function () {
    var menu = document.querySelector('.change');
    var status = "duoi";



    window.addEventListener('scroll', function () {
        console.log(window.pageYOffset);

        if (window.pageYOffset > 100) {
            if (status == "duoi") {
                status = "tren";
                console.log('hehhe');
                menu.classList.add('ms');
            }
        } else if (window.pageYOffset < 100) {
            if (status == "tren") {
                status = "duoi";
                menu.classList.remove('ms');
            }



        }
    })

});
document.addEventListener('DOMContentLoaded', function () {
    var changed = document.querySelector('.head_index');
    var status = 'on';
    window.addEventListener('scroll', function () {
        if (window.pageYOffset < 100) {
            if (status == 'on') {
                status = 'in';
                changed.classList.remove("blockSmall");

                changed.classList.remove("imgage");
                changed.classList.remove("block");
                changed.classList.remove("head_index");
            }
        } else if (window.pageYOffset > 100) {
            if (status == 'in') {
                status = 'on';
                changed.classList.add("blockSmall");

                changed.classList.add("imgage");
                changed.classList.add("block");
                changed.classList.add("head_index");
            }
        }
    })
})