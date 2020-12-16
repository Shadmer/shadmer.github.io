$(document).ready(function(){

    var swiper = new Swiper('.achievements', {
        // effect: 'coverflow',
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
            // progressbarOpposite: true,
        },
        navigation: {
            nextEl: '.achievements__next',
            prevEl: '.achievements__prev',
        },
        // on: {
        //     slideChange() {
        //         console.log(this.el.firstElementChild);
        //         this.el.classList.add('animated');
        //         this.el.classList.add('bounce');
        //         setTimeout( () => {
        //             this.el.classList.remove('bounce');
        //         }, 1000);
        //     }
        // }
    });
});