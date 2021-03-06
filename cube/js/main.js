// 큐브 트립 메인 JS - main.js //

// 각상징물 정보를 객체에 셋팅한다.
var korea = {
    "감사":"안녕하세요~선생님 코로고나 때문에 수업을 온라인으로 듣게 되니 아쉽습니다. <br>요즘 자바스크립트 들어온 뒤로는 머릿속에 지우개가 있는 거 같습니다.  <br>이해하기가 너무 어렵네요. htmㅣ이랑 css는 그나마 쉬운 거였네요 이것도 어렵지만..... <br>코로나가 얼른 끝나도 다 같이 수업하는 날이 빨리 왔으면 좋겠습니다.  <br>앞으로도 좋은 수업 감사히 잘 듣겠습니다. <br>선생님도 건강!! 꼭 챙기세요~",
    "태극기":"대한민국의 국기. 흰색 배경 중앙에 파란색과 빨간색의 태극을, 네 귀퉁이에는 검은색의 사괘를 그린 것이다. 1882년 조미수호통상조약에서 최초로 사용되었으며, 1883년 1월 27일(음력) 조선의 정식 국기로 선포되었다. 대한제국이 1910년 국권을 상실한 이후 일본 정부에 의해 사용이 금지되었으나 일제강점기 내내 독립운동의 상징으로 기능하였으며, 1945년 광복과 함께 자유롭게 게양할 수 있게 되었다. 북한 역시 광복 이후부터 1948년에 인공기가 제정되기 전까지 2년간 태극기를 사용하였으나 현재는 (북한의 입장에서) 적인 대한민국의 상징이기 때문에 사용이 금지되어 있다.",
    "애국가":"1절 -  동해물과 백두산이 말으고 <br>닳도록 하느님이 보호하사 우리대한만세 <br>2절 - 남산 우헤 저 소나무 철갑을 <br>두른 듯 바람이슬 불변함은 우리 긔상일세 <br>3절 - 가을 하날 공활한대 그름 업시  <br>놉고 밝은 달은 우리가슴 일편단심일세 <br>4절 - 이 긔상과 이 마음으로 님군을 섬기며 <br>괴로우나 질거우나 나라사랑하세 <br>후렴 - 무궁화 삼천리 화려강산 <br>대한사람 대한으로 길이 보전하세", 
    "무궁화":"대한민국의 국화로 알려져 있지만 사실 대한민국에 명백히 규정된 국화는 없다. 다만 각종 상징물에 무궁화를 자주 사용하고, 관습법적으로 국화로 인정되는 편. 인도-중국 서남부가 원산지이나 한반도 전역에 폭넓게 분포하며, 예로부터 민가를 중심으로 다양한 목적으로 널리 재배되었다. 고대에는 신성시 되던 식물로 하늘에 제사를 지내는 신단 주위에도 많이 심어졌다.",
    "국가문장":"졸업증서 및 학위증서에 쓰인 경우는 거의 없고, 화폐에 쓰인 경우는 기념주화를 제외하고는 없다. 태극기와 애국가, 국새 같은 다른 국가상징물에 비해서 아는 사람이 적다. 국가대표 선수들 경기복에서 국기나 협회 휘장을 흔히 볼 수 있고 이것이 보이는 경우는 없지만 다른 국가에서는 대표 선수들 경기복에 국가 문장을 다는 경우도 있다. 평범한 일반인이 국장을 가장 흔히 접할 수 있는 문서는 다름아닌 여권 표지. 대한민국뿐만 아니라 많은 나라에서 여권 표지에 국장을 새겨놓고 있다.",
    "국가옥쇄":"나라도장, 또는 국새는 국가를 상징하는 도장으로, 주로 아시아권에서 나라를 상징하는 목적으로 제조된 도장을 뜻한다. 국가적으로 가장 중요한 도장으로, 외교 조약문을 비준, 체결하는 일과 같은 국가의 중대사에 사용된다. <br>전근대엔 여러가지 종류가 있었으며 군주(君主)의 소유물이었다. 근대 이후 국새는 특정 인물이 아닌 국가, 정부의 공공 소유물이 되었다."    
};////// korea //////

window.addEventListener('DOMContentLoaded',function(){
    
    console.log('로딩완료!');
    
}); ///// 로드구역 /////////////////////////////////////////
//////////////////////////////////////////////////////////    

// 함수명 :chgkorea
// 기능 : 메뉴 클릭시 상징물들에 맞게 큐브 회전시키고 설명이 나오게함

function chgkorea(me){
  
    // 선택된 요소의 값담기
    var sv = me.innerText;
    
    // 함수호출확인, 전달값 확인
    console.log('나야나'+sv);
    
    // 변경대상 .cube
    var tg = document.getElementsByClassName('cube')[0];
    // 클래스니까 선택후 몇번째 꼭 해야함!! .item(순번) 또는 [순번]
    
    // 3. 큐브에 맞게 회전하기
    if(sv==="감사"){
        tg.style.transform = "translate(-50%,-50%) rotateX(0deg) rotateY(0deg)";
    }
    else if(sv==="태극기"){
        tg.style.transform = "translate(-50%,-50%) rotateX(-90deg) rotateY(720deg)";
    }
    else if(sv==="국가옥쇄"){
        tg.style.transform = "translate(-50%,-50%) rotateX(360deg) rotateY(-90deg)";
    }
    else if(sv==="국가문장"){
        tg.style.transform = "translate(-50%,-50%) rotateX(-360deg) rotateY(90deg)";
    }
    else if(sv==="무궁화"){
        tg.style.transform = "translate(-50%,-50%) rotateX(720deg) rotateY(-180deg)";
    }
    else if(sv==="애국가"){
        tg.style.transform = "translate(-50%,-50%) rotateX(90deg) rotateY(-360deg)";
    }
    
    // 큐브 트랜지션 서정하기
    tg.style.transition = "all 1.5s ease-in-out";
    
    
    // 상징물 박스 변수 할당하기
    // 대상 .ebox
    var ebox = document.getElementsByClassName('ebox')[0];
    
    if(sv === '출발'){
        ebox.style.opacity = '0';
        ebox.style.transition = 'none';
        
        // 출발이면 소스 실행하지 않기
        return false;
    }///// if /////
    
    // 상징물 셋팅하기
    // 대상 #emb
    document.getElementById('emb').innerHTML = sv;
    
    // 상징물상세정보 셋팅하기
    // 대상 #embtxt
    document.getElementById('embtxt').innerHTML = korea[sv];
    
    // 상징물 정보박스 보이기(처음 이동시 바로 숨기기)
    
    // 트랜지션 없이 투명하게!!!
    ebox.style.opacity= '0';
    ebox.style.transition = 'none';
    
    // 트랜지션 나타나기
    // setTimeout(함수,시간)
    setTimeout(function(){
        console.log('여기실행!!!!');
        ebox.style.opacity = "1";
        cbox.style.transition = "opacity .8s ease-in-out";
    },1500);///// 타임아웃함수/////
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}///// chgkorea 함수 /////