(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const i={state:{user:JSON.parse(localStorage.getItem("user")||"null")},observers:new Set,getUser(){return this.state.user},setUser(e){return localStorage.setItem("user",JSON.stringify(e)),this.state.user=e,this.notify(),e},clearUser(){return localStorage.removeItem("user"),this.state.user=null,this.notify(),null},isLoggedIn(){return!!this.state.user},subscribe(e){this.observers.add(e)},unsubscribe(e){this.observers.delete(e)},notify(){this.observers.forEach(e=>e(this.state.user))}},n=()=>{const e=i.isLoggedIn(),o=window.location.hash,l=o?window.location.hash.slice(1):window.location.pathname;return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav role="navigation" class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="/" class="${l==="/"?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
        ${e?`<li><a href="${o?"#":""}/profile" role="link" class="${l==="/profile"?"text-blue-600 font-bold":"text-gray-600"}">프로필</a></li>
       <li><a href="#" id="logout">로그아웃</a></li>`:`<li><a href="${o?"#":""}/login" class="${l==="/login"?"text-blue-600 font-bold":"text-gray-600"}">로그인</a></li>`}
      </ul>
    </nav>
  `},d=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,c=[{id:1,author:"홍길동",profileImage:"https://placehold.co/40",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",timeAgo:"5분 전"},{id:2,author:"김철수",profileImage:"https://placehold.co/40",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",timeAgo:"15분 전"},{id:3,author:"이영희",profileImage:"https://placehold.co/40",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",timeAgo:"30분 전"},{id:4,author:"박민수",profileImage:"https://placehold.co/40",content:"주말에 등산 가실 분 계신가요? 함께 가요!",timeAgo:"1시간 전"},{id:5,author:"정수연",profileImage:"https://placehold.co/40",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",timeAgo:"2시간 전"}],u=()=>c.map(e=>`
        <div class="bg-white rounded-lg shadow p-4">
          <div class="flex items-center mb-2">
            <img src="${e.profileImage}" alt="프로필" class="rounded-full mr-2">
            <div>
              <p class="font-bold">${e.author}</p>
              <p class="text-sm text-gray-500">${e.timeAgo}</p>
            </div>
          </div>
          <p>${e.content}</p>
          <div class="mt-2 flex justify-between text-gray-500">
            <button>좋아요</button>
            <button>댓글</button>
            <button>공유</button>
          </div>
        </div>
      `).join(""),b=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${n()}

      <main class="p-4" role="main">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>
        
        <div class="space-y-4">
          ${u()}
        </div>
      </main>

      ${d()}
    </div>
  </div>
  `,m=()=>{const e=i.getUser();return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${n()}

        <main class="p-4" role="main">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form id="profile-form">
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >사용자 이름</label
                >
                <input
                  type="text"
                  id="username"
                  name="username"
                  ${e.username?`value="${e.username}"`:""}
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-4">
                <label
                  for="email"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >이메일</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="${e.email?e.email:""}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-6">
                <label
                  for="bio"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >자기소개</label
                >
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  class="w-full p-2 border rounded"
                >${e.bio?e.bio:""}</textarea>
              </div>
              <button
                type="submit"
                class="profile-update-button w-full bg-blue-600 text-white p-2 rounded font-bold"
              >
                프로필 업데이트
              </button>
            </form>
          </div>
        </main>

        ${d()}
      </div>
    </div>
  `},f=()=>`
  <div class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input type="text" placeholder="사용자 이름" id="username" class="w-full p-2 border rounded">
        </div>
        <div class="mb-6">
          <input type="password" placeholder="비밀번호" id="userpassword" class="w-full p-2 border rounded">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </div>
`,p=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen" role="main">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`;export{b as H,f as L,p as N,m as P,i as u};
