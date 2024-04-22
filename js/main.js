$(function(){
    $('.visual').slick({
        autoplay:true,
        dots:true,
      });

    // collect 마우스 cover보이기
    $('.collection div a').mouseenter(function(){
        $(this).find('.cover').fadeIn()
    })
    $('.collection div a').mouseleave(function(){
        $(this).find('.cover').fadeOut()
    })

    // list박스에 마우스오버시 cover보이기
    $('.list .sns li a').mouseenter(function(){
        $(this).find('.cover').fadeIn()
    })
    $('.list .sns li a').mouseleave(function(){
        $(this).find('.cover').fadeOut()
    })

    // 슬라이드안에 이미지파일 교체
    // 윈도우창의 크기를 조절하는 이벤트
    $(window).resize(function(){
        let num = $(this).width();
        console.log(num)
        if(num <= 767){
            $('main .visual .slick-prev,main .visual .slick-next').hide();
            $('main .visual .visual1 img').attr('src','./images/m_visual_a.jpg')
            $('main .visual .visual2 img').attr('src','./images/m_visual_b.jpg')
        }else{
            $('main .visual .slick-prev,main .visual .slick-next').show();
            $('main .visual .visual1 img').attr('src','./images/visual_a.jpg')
            $('main .visual .visual2 img').attr('src','./images/visual_b.jpg')

        }
    })

    // 모바일 / pc상태 확인
    let num = $(this).width();
    console.log("이벤트 없음",num)
    if(num <= 767){
        $('main .visual .slick-prev,main .visual .slick-next').hide();
        $('main .visual .visual1 img').attr('src','./images/m_visual_a.jpg')
        $('main .visual .visual2 img').attr('src','./images/m_visual_b.jpg')
    }else{
        $('main .visual .slick-prev,main .visual .slick-next').show();
        $('main .visual .visual1 img').attr('src','./images/visual_a.jpg')
        $('main .visual .visual2 img').attr('src','./images/visual_b.jpg')
    }
    
    // familly site
    $('.f_btn').click(function(){
        $('.f_list').slideToggle();
    })
    
     // 모바일 메뉴
     $('.m_btn').click(function(){
        $('.depth2').hide();
        $(".menu_box").animate({"left":0},300)
        $(".cover").fadeIn();
        $('body,html').css('overflow','hidden')
     })

     $('.cover').click(function(){
         $(".cover").fadeOut();
        $(".menu_box").animate({"left":'-100%'},300)
        $('body,html').css('overflow','auto')
     })

     $(".m_gnb>li>a").click(function(){
        $(this).next().slideToggle().parent().siblings().find(".depth2").slideUp()
     })







})