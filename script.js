// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
 // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.
 const avatarImg = document.createElement('img');
 avatarImg.className = "discussion__avatar--image ";
 avatarImg.src = obj.avatarUrl;
 avatarImg.alt = 'avatar of ' + obj.author;
 avatarWrapper.append(avatarImg);
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  //title
  const contentTitle = document.createElement('h2');
  contentTitle.className = "discussion__title";
  discussionContent.append(contentTitle);
 //링크
 const contentLink = document.createElement('a');
 contentLink.href = obj.url;
 contentLink.textContent = obj.title;
 contentTitle.append(contentLink);
  //정보
  const contentInformation = document.createElement('div');
  contentInformation.className = "discussion__information";
  contentInformation.textContent = obj.author;
  discussionContent.append(contentInformation);

  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";

 
  //체크박스
  const contentAnswered = document.createElement('p');
  contentAnswered.className = "discussion__answered";
  discussionAnswered.append(contentAnswered);
  if( obj.answer ===null ){
    contentAnswered.textContent = "☒";
  }else{
    contentAnswered.textContent = "☑";
  }
  contentInformation.textContent = `${obj.author} / ${new Date(obj.createdAt).toLocaleString("ko-KR")}`;
  //new date= 인수 없이 호출하면 현재 날짜와 시간이 저장된 Date 객체가 반환됩니다. 여기서는 obj.createdAt를 넣어줌 , 그리고 toLocaleString은 시간을 현지화 시킨 것

 li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  element.innerHTML = "";
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다. 렌더링이란 즉 화면에 노출시켜주는 것을 의미함
const ul = document.querySelector("ul.discussions__container");
render(ul);