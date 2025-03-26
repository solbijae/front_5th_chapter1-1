import"./modulepreload-polyfill-B5Qt9EMX.js";const s={state:{user:JSON.parse(localStorage.getItem("user")||"{}")},getUser(){return this.state.user},setUser(t){this.state.user=t,localStorage.setItem("user",JSON.stringify(t))},clearUser(){this.state.user={},localStorage.removeItem("user")},isLoggedIn(){return!!this.state.user.username}},r=()=>{const t=s.isLoggedIn(),e=window.location.pathname;return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav role="navigation" class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="/" class="${e==="/"?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
        ${t?`<li><a href="/profile" role="link" class="${e==="/profile"?"text-blue-600 font-bold":"text-gray-600"}">프로필</a></li>
       <li><a href="#" id="logout">로그아웃</a></li>`:`<li><a href="/login" class="${e==="/login"?"text-blue-600 font-bold":"text-gray-600"}">로그인</a></li>`}
      </ul>
    </nav>
  `},i=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,n=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${r()}

      <main class="p-4 role="main">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">홍길동</p>
                <p class="text-sm text-gray-500">5분 전</p>
              </div>
            </div>
            <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">김철수</p>
                <p class="text-sm text-gray-500">15분 전</p>
              </div>
            </div>
            <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">이영희</p>
                <p class="text-sm text-gray-500">30분 전</p>
              </div>
            </div>
            <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">박민수</p>
                <p class="text-sm text-gray-500">1시간 전</p>
              </div>
            </div>
            <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">정수연</p>
                <p class="text-sm text-gray-500">2시간 전</p>
              </div>
            </div>
            <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>
        </div>
      </main>

      ${i()}
    </div>
  </div>
`,u=()=>`
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
`,d=()=>`
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
`,b=()=>{const t=s.getUser();return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${r()}

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
                  ${t.username?`value="${t.username}"`:""}
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
                  value="${t.email?t.email:""}"
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
                >${t.bio?t.bio:""}</textarea>
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

        ${i()}
      </div>
    </div>
  `},m=t=>{t.preventDefault();const e=document.getElementById("username").value;s.setUser({username:e,email:"",bio:""}),l("/profile")},p=()=>{s.clearUser(),l("/login")},g=()=>{const t=s.getUser(),e=document.getElementById("username").value,a=document.getElementById("email").value,c=document.getElementById("bio").value;s.setUser({...t,username:e,email:a,bio:c}),l("/profile")},f={"/":()=>n(),"/login":()=>s.isLoggedIn()?(l("/"),n()):d(),"/profile":()=>s.isLoggedIn()?b():(l("/login"),d())},l=t=>{window.history.pushState({},"",t),o()},v=()=>{const t=window.location.pathname;return(f[t]||(()=>u()))()},o=()=>{const t=document.getElementById("root");t.innerHTML=v()};window.addEventListener("popstate",o);document.addEventListener("DOMContentLoaded",o);document.addEventListener("click",t=>{if(t.target.matches("a")){t.preventDefault();const e=t.target.getAttribute("href");l(e)}t.target.matches("#logout")&&(t.preventDefault(),p())});document.addEventListener("submit",t=>{t.target.matches("#login-form")&&(t.preventDefault(),m(t)),t.target.matches("#profile-form")&&(t.preventDefault(),g())});
