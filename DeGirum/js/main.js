$(function () {

    $('input,textarea').focus(function () {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', '');
    });

    $('input,textarea').blur(function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });

    $(".select").selectBoxIt({
      showFirstOption: true
    });

    jQuery(function ($) {
        $(".tel-mask").mask("+9 ( 999 ) - 999 - 9999").on('click', function (){
  				$(this).focus();
  			});

    });

    $('header .mob-nav').click(function () {
          $(this).toggleClass('active');
          $('header .panel').fadeToggle();
    });



    $("[gallery-pdf]").fancybox({});

    $(window).scroll(function(){
      if ($(window).scrollTop() > 0) {
        $('header').addClass('fixed');
      } else {
        $('header').removeClass('fixed');
      }
    })


    setInterval(function() {
        $('.fractional-batching-step').fadeOut();
        $('.fractional-batching-step .step').removeClass('active');
        setTimeout(function() {
          $('.fractional-batching-step').fadeIn(10);
          $('.fractional-batching-step .step').addClass('active');
        },300);
    }, 10000);



    function pruningAnimate1() {
      setTimeout(function() {
        $('.network-pruning').removeClass('square_1_group_8-active');
        $('.network-pruning').addClass('square_1_group_1-active');
      }, 250);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_1_group_1-active');
        $('.network-pruning').addClass('square_1_group_2-active');
      }, 750);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_1_group_2-active');
        $('.network-pruning').addClass('square_1_group_3-active');
      }, 1250);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_1_group_3-active');
        $('.network-pruning').addClass('square_1_group_4-active');
      }, 1750);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_1_group_4-active');
        $('.network-pruning').addClass('square_1_group_5-active');
      }, 2250);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_1_group_5-active');
        $('.network-pruning').addClass('square_1_group_6-active');
      }, 2750);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_1_group_6-active');
        $('.network-pruning').addClass('square_1_group_7-active');
      }, 3250);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_1_group_7-active');
        $('.network-pruning').addClass('square_1_group_8-active');
      }, 3750);
    }

    pruningAnimate1();
    setInterval(function() {
      pruningAnimate1();
    }, 4000);



    function pruningAnimate2() {
      setTimeout(function() {
        $('.network-pruning').removeClass('square_2_group_16-active');
        $('.network-pruning').addClass('square_2_group_1-active');
      }, 250);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_2_group_1-active');
        $('.network-pruning').addClass('square_2_group_2-active');
      }, 500);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_2_group_2-active');
        $('.network-pruning').addClass('square_2_group_3-active');
      }, 750);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_2_group_3-active');
        $('.network-pruning').addClass('square_2_group_4-active');
      }, 1000);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_2_group_4-active');
        $('.network-pruning').addClass('square_2_group_5-active');
      }, 1250);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_2_group_5-active');
        $('.network-pruning').addClass('square_2_group_6-active');
      }, 1500);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_2_group_6-active');
        $('.network-pruning').addClass('square_2_group_7-active');
      }, 1750);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_2_group_7-active');
        $('.network-pruning').addClass('square_2_group_8-active');
      }, 2000);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_2_group_8-active');
        $('.network-pruning').addClass('square_2_group_9-active');
      }, 2250);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_2_group_9-active');
        $('.network-pruning').addClass('square_2_group_10-active');
      }, 2500);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_2_group_10-active');
        $('.network-pruning').addClass('square_2_group_11-active');
      }, 2750);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_2_group_11-active');
        $('.network-pruning').addClass('square_2_group_12-active');
      }, 3000);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_2_group_12-active');
        $('.network-pruning').addClass('square_2_group_13-active');
      }, 3250);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_2_group_13-active');
        $('.network-pruning').addClass('square_2_group_14-active');
      }, 3500);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_2_group_14-active');
        $('.network-pruning').addClass('square_2_group_15-active');
      }, 3750);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_2_group_15-active');
        $('.network-pruning').addClass('square_2_group_16-active');
      }, 4000);
    }

    pruningAnimate2();
    setInterval(function() {
      pruningAnimate2();
    }, 4000);




    function pruningAnimate3() {
      setTimeout(function() {
        $('.network-pruning').removeClass('square_3_group_16-active');
        $('.network-pruning').addClass('square_3_group_1-active');
      }, 250);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_3_group_1-active');
        $('.network-pruning').addClass('square_3_group_2-active');
      }, 500);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_3_group_2-active');
        $('.network-pruning').addClass('square_3_group_3-active');
      }, 750);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_3_group_3-active');
        $('.network-pruning').addClass('square_3_group_4-active');
      }, 1000);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_3_group_4-active');
        $('.network-pruning').addClass('square_3_group_5-active');
      }, 1250);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_3_group_5-active');
        $('.network-pruning').addClass('square_3_group_6-active');
      }, 1500);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_3_group_6-active');
        $('.network-pruning').addClass('square_3_group_7-active');
      }, 1750);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_3_group_7-active');
        $('.network-pruning').addClass('square_3_group_8-active');
      }, 2000);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_3_group_8-active');
        $('.network-pruning').addClass('square_3_group_9-active');
      }, 2250);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_3_group_9-active');
        $('.network-pruning').addClass('square_3_group_10-active');
      }, 2500);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_3_group_10-active');
        $('.network-pruning').addClass('square_3_group_11-active');
      }, 2750);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_3_group_11-active');
        $('.network-pruning').addClass('square_3_group_12-active');
      }, 3000);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_3_group_12-active');
        $('.network-pruning').addClass('square_3_group_13-active');
      }, 3250);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_3_group_13-active');
        $('.network-pruning').addClass('square_3_group_14-active');
      }, 3500);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_3_group_14-active');
        $('.network-pruning').addClass('square_3_group_15-active');
      }, 3750);
      setTimeout(function() {
        $('.network-pruning').removeClass('square_3_group_15-active');
        $('.network-pruning').addClass('square_3_group_16-active');
      }, 4000);
    }

    pruningAnimate3();
    setInterval(function() {
      pruningAnimate3();
    }, 4000);





    $('svg.brain path').each(function(){
      var comprimento = $(this).get(0).getTotalLength();
      var comprimentoArredondado = Math.round(comprimento);
      $(this).attr('stroke-dasharray', comprimentoArredondado + 2);
      $(this).attr('stroke-dashoffset', comprimentoArredondado + 2);
    });



    function brainCircle(){
      var tmax_options = {
        delay: 4.5,
        repeat: -1,
        repeatDelay: 0,
        yoyo: false
      };

      var tmax_tl     = new TimelineMax(tmax_options),
          svg_length  = $('svg.brain > circle').length,
          svg_shapes  = [],
          tween_options_to = {
            css: {
              scale: 1,
              transformOrigin: 'center center'
            },
            ease: Cubic.easeInOut,
            force3D: true
          };

      for(var i = 1, l = svg_length; i <= l; i++) {
        svg_shapes.push($('svg.brain > circle:nth-of-type('+ i +')'));
      }

      tmax_tl.staggerTo(svg_shapes, 1, tween_options_to, 0.1275);
      tmax_tl.timeScale(2.5);
    };


    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    		$(this).addClass('active').siblings().removeClass('active')
    			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');

          brainCircle();
    })







    $('.slider-problem').slick({
      dots: true,
      arrows: true,
      speed: 1000,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });

    var btn = $('#up');

      $(window).scroll(function() {
        if ($(window).scrollTop() > 800) {
          btn.addClass('show');
        } else {
          btn.removeClass('show');
        }
      });

      btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });


      var windowWidth = $(window).width();

      if(windowWidth <= 980){
        $('header nav ul li a.icon-down').click(function() {
            $(this).parent().toggleClass('active');
            $(this).next().stop().slideToggle();
        });
      }

      $(window).resize(function() {
        var windowWidth = $(window).width();

        if(windowWidth <= 980){
          $('header nav ul li a.icon-down').click(function() {
              $(this).parent().toggleClass('active');
              $(this).next().stop().slideToggle();
          });
        }
      });


    $('.popap-btn').click(function (event) {
        var hrefBtn = $(this).attr('href');
        var h = $(hrefBtn).height();
        $(hrefBtn).css({'marginTop':-(h + 27 + 15)/2});
        setTimeout(function () {
            $(hrefBtn).stop().fadeIn(500);
        }, 300);
        $(hrefBtn).find('input').val('').removeClass('error');
        $('.popap-shadow').stop().fadeIn(300);
        event.preventDefault();
    });
    $('.close').click(function(event){
        $(this).parent().stop().fadeOut(500);
        $('.popap-shadow').stop().fadeOut(300);
        event.preventDefault();
    });
    $(document).click(function(event) {
        if ($(event.target).closest(".popap-wrap, .popap-btn").length) return;
        $('.popap-wrap').css({'display':'none'});
        $('.popap-shadow').css({'display':'none'});
        event.stopPropagation();
    });

    $(".nav-section").on("click","a", function (event) {
           event.preventDefault();
           var id  = $(this).attr('href'),
               top = $(id).offset().top;
           $('body,html').animate({scrollTop: top - 85}, 1500);
   });




      window.onload = function () {

      var chart = new CanvasJS.Chart("diagram-classification", {
        animationEnabled: true,
        backgroundColor: "#F6F7F6",
        legend: {
        		fontSize: 20,
            fontweight: "normal",
      	},
      	axisY:{
      		includeZero: true,
          title: "Throughput (Images/Sec)",
          margin: 10,
          color: "#22222E",
          lineColor: "#DBCBBD",
          titleFontSize: 12,
      	},
        axisX:{
          includeZero: true,
          title: "",
          margin: 10,
          color: "#22222E",
          lineColor: "#DBCBBD",
          titleFontSize: 12,
        },
      	data: [{
          name: "ORCA",
      		type: "line",
          showInLegend: true,
          lineColor: "#658DC6",
      		dataPoints: [
      			{ x: 1000, y: 7500 },
      			{ x: 4800, y: 13000},
      			{ x: 7000, y: 14500 },
      			{ x: 9200, y: 15400 },
      			{ x: 12000, y: 15400 },
      			{ x: 16000, y: 15400 }
      		]
      	},
        {
          name: "T4",
      		type: "line",
          showInLegend: true,
          lineColor: "#C79C68",
      		dataPoints: [
      			{ x: 2000, y: 2000 },
      			{ x: 7000, y: 4000},
      			{ x: 16000, y: 5000 }
      		]
      	}
      ]
      });
      chart.render();


      var chart2 = new CanvasJS.Chart("diagram-classification2", {
    	animationEnabled: true,
      backgroundColor: "#F6F7F6",
    	axisX: {
    		interval: 1
    	},
    	axisY: {
    		scaleBreaks: {
    			type: "wavy",
    			customBreaks: [{
    				startValue: 80,
    				endValue: 210
    				},
    				{
    					startValue: 230,
    					endValue: 600
    				}
    		]}
    	},
    	data: [{
    		type: "bar",
    		toolTipContent: "",
        color: "#658DC6",
    		dataPoints: [
    			{ label: "ORCA", y: 10.8, gdp: 5.8, color: "#658DC6" },
    			{ label: "T4", y: 15.8, gdp: 5.7, color: "#C79C68" },
          { label: "ORCA", y: 10.8, gdp: 5.8, color: "#658DC6" },
          { label: "T4", y: 15.8, gdp: 5.7, color: "#C79C68" },
    		]
    	}]
    });
    chart2.render();


    var chart3 = new CanvasJS.Chart("diagram-classification3", {
          animationEnabled: true,
          backgroundColor: "#F6F7F6",
          axisX: {
            interval: 1
          },
          axisY: {
            scaleBreaks: {
              type: "wavy",
              customBreaks: [{
                startValue: 80,
                endValue: 210
                },
                {
                  startValue: 230,
                  endValue: 600
                }
            ]}
          },
          data: [{
            type: "bar",
            toolTipContent: "",
            color: "#658DC6",
            dataPoints: [
              { label: "ORCA", y: 10.8, gdp: 5.8, color: "#658DC6" },
              { label: "T4", y: 15.8, gdp: 5.7, color: "#C79C68" },
              { label: "ORCA", y: 10.8, gdp: 5.8, color: "#658DC6" },
              { label: "T4", y: 15.8, gdp: 5.7, color: "#C79C68" },
            ]
          }]
        });
        chart3.render();


      }










    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1000,
        outDuration: 600,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'body',
        loadingClass: 'animsition-loading',
        loadingInner: '',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
      });


});
