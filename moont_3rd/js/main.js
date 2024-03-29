$(function () { /// jQB ////////


    $('.langbtn').click(function () {
        $('.langbox').stop().slideToggle(300)
        $(this).stop().toggleClass("on");
    }) ///// click /////    


    $('.menu').hide();

    $('.nav').hover(
        function () { ///// over
            $('.menu').slideDown(400)
        },
        function () { ///// out
            $('.menu').stop().slideUp(400)

        }) ///// hover
    
   

    /////// 메인 페이지 오늘 날짜넣기 /////////
    let today = new Date();
    let month = today.getMonth() + 1; //월순번+1=월숫자
    let date = today.getDate(); //날짜
    let day = today.getDay(); //요일순번
    let week = ["일", "월", "화", "수", "목", "금", "토"];
    // 요일변경하기
    day = week[day];

    console.log("날짜:" + month + "/" + date + "/" + day);

    // 날짜 화면 출력: 월,일,요일순
    $(".month").text(month);
    $(".date").text(date);
    $(".day").text(day);



    


///// 배너 블릿버튼 클릭시 배너 이동하기 /////
    // 클릭이벤트 대상 : .indic a
    // 변경대상: .slider li
    $(".indic a").click(function (e) {

        e.preventDefault(); // 기본기능막기

        // 자동넘김지우기
        clearAuto();

        // 1. 클릭된 a요소의 부모li의 순번 구하기
        let idx = $(this).parent().index();
        console.log("클릭된블릿순번:" + idx);

        // 2. 블릿순번과 동일한 순번의 배너슬라이드에 클래스 "on"넣기
        $(".banbox li").eq(idx).addClass("on")
            .siblings().removeClass("on");

        // 3. 블릿변경하기 ////
        $("img", this) //주인공!
            .attr("src", "images/banbtn.png")
            .parents("li").siblings().find("img")
            .attr("src", "images/banbtn1.jpg");


        // 4. 블릿 순번을 전역변수 슬라이드 순번(bseq)과 일치시키기!
        bseq = idx; // 매우중요함!!!!!!


    }); ///////// click ///////////////////



}); ///// jQB ////////////////////////////



// 코드분리방식에 따라 이벤트역시 JS파일에서 설정하는 것이
// 일반적인 방식이다!
// html 요소를 선택해야 하므로 로드구역이 필요하다!

//// 로드구역 /////////////////////////////////
window.addEventListener("DOMContentLoaded", function () {

    // 1. 로드구역 확인
    console.log("로딩완료");

    // 2. 이벤트 대상선정: .abtn
    var abtn = document.querySelectorAll('.abtn');


    // 3. 이벤트 종류: click

    // (1)왼쪽버튼 /////////////////
    abtn[0].onclick = function () {

        // 자동넘김지우기
        clearAuto();

        // 이동함수호출
        goSlide(0);

        // a요소 클릭시 이동속성 없애기!
        return false;

    }; /////// click함수 ///////////

    // (2)오른쪽버튼 ///////////////
    abtn[1].onclick = function () {

        // 자동넘김지우기
        clearAuto();

        // 이동함수호출
        goSlide(1);

        // a요소 클릭시 이동속성 없애기!
        return false;

    }; /////// click함수 ///////////


}); ///////// 로드구역 //////////////////////////////////
///////////////////////////////////////////////////////



// 배너순번 전역변수
var bseq = 0;

function goSlide(gubun) { //gubun(왼쪽:0,오른쪽:1)

    // 1.함수호출, 전달값 확인
    console.log("슬라이드이동!" + gubun);

    // 2.변경대상: .slider li
    var tg = document.querySelectorAll('.banbox li');
    console.log("슬라이드개수:" + tg.length);

    // 3.버튼 구분하여 배너순번 증감하기
    // 오른쪽버튼(gubun이 1이면 true)
    if (gubun) {

        //확인
        console.log("오른쪽!!!");
        // 배너순번 증가
        bseq++;
        // 한계수 설정(마지막 컬렉선번호 다음번호이면 처음으로)
        if (bseq === tg.length) bseq = 0;

    } ////// if //////
    /// 왼쪽버튼 //////////////
    else {

        //확인
        console.log("왼쪽!!!");
        // 배너순번 감소
        bseq--;
        // 한계수 설정(0보다작은 -1일경우 끝번호로)
        if (bseq === -1) bseq = tg.length - 1;
        // 마지막 컬렉션 번호는 개수보다 1작다!
    } ///// else //////

    // 변경된 배너순번 확인!
    console.log("배너순번:" + bseq);


    // 4. 해당순번에 class="on" 넣기

    // 클래스 전부 지우기 ////////
    for (var x of tg) {
        x.classList.remove("on");
    } ////// for of문 /////////

    // 선정된 변경대상 tg에 class를 넣어준다!
    // tg[bseq] 는 해당순번의 li요소
    tg[bseq].classList.add("on");

    /*
    [ 선택요소에 class 제어하기 ]
    
    classList 를 사용하여 원하는 class를 제어한다!
        
    1) add(클래스명) : 클래스 넣기
    2) remove(클래스명) : 클래스 제거하기
    3) toggle(클래스명) : 지정된 클래스가 없으면 넣고
                        있으면 제거함(토글기능)
    - 토글 기능이란? 전등불켜기 버튼 처럼 켰다/껏다
    하는 단순 전환 기능을 한가지 버튼할때 토글버튼이라고
    흔히 부른다!
    */

    ////// 블릿 버튼 순번에 맞게 변경하기 /////
    // 변경대상: .indic img
    // 변경순번: 이미 bseq변수에 순번이 들어와 있다!!!
    $(".indic img").eq(bseq)
        .attr("src", "images/banbtn.png")
        .parents("li").siblings().find("img")
        .attr("src", "images/banbtn1.jpg");



} ////// goSlide 함수 /////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////




// 인터발함수(지우기위해 만든변수)
var autoI;
/*////////////////////////////////////////////
    함수명: autoSlide
    기능: 자동넘기기 셋팅함수(인터발함수)
*/ ////////////////////////////////////////////
var autoSlide = function () {
    autoI = setInterval(function () {
        goSlide(1); //오른쪽방향 넘기기
    }, 3000);
}; ////// autoSlide함수 //////////////////////
//////////////////////////////////////////////

// 할당형함수 아래에서 처음 호출해야함!
autoSlide(); //최초호출!


// 타임아웃변수(쓰나미방지용 지우기변수)
var autoT;
/*////////////////////////////////////////////
    함수명: clearAuto
    기능: 자동넘김 지우기함수(클리어인터발함수)
*/ ////////////////////////////////////////////
var clearAuto = function () {

    // 자동넘김 할당된 변수를 지운다(autoI)
    clearInterval(autoI);
    // 타임아웃 실행쓰나미 방지용 타임아웃 지우기를 꼭한다!
    clearTimeout(autoT);

    // 안건드리면 5초후 다시 자동호출하기!
    // 매번 호출될때 위에서 지우므로 단 하나만 남아있음!
    autoT = setTimeout(autoSlide, 3000);

}; ////// clearAuto함수 /////////////////////////
///////////////////////////////////////////////









































