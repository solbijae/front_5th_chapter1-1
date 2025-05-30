## 과제 체크포인트

### 배포 링크
https://solbijae.github.io/front_5th_chapter1-1/hash/#/
<!--
배포 링크를 적어주세요
예시: https://<username>.github.io/front-5th-chapter1-1/

배포가 완료되지 않으면 과제를 통과할 수 없습니다.
배포 후에 정상 작동하는지 확인해주세요.
-->


### 기본과제

#### 1) 라우팅 구현:
- [x] History API를 사용하여 SPA 라우터 구현
  - [x] '/' (홈 페이지)
  - [x] '/login' (로그인 페이지)
  - [x] '/profile' (프로필 페이지)
- [x] 각 라우트에 해당하는 컴포넌트 렌더링 함수 작성
- [x] 네비게이션 이벤트 처리 (링크 클릭 시 페이지 전환)
- [x] 주소가 변경되어도 새로고침이 발생하지 않아야 한다.

#### 2) 사용자 관리 기능:
- [x] LocalStorage를 사용한 간단한 사용자 데이터 관리
  - [x] 사용자 정보 저장 (이름, 간단한 소개)
  - [x] 로그인 상태 관리 (로그인/로그아웃 토글)
- [x] 로그인 폼 구현
  - [x] 사용자 이름 입력 및 검증
  - [x] 로그인 버튼 클릭 시 LocalStorage에 사용자 정보 저장
- [x] 로그아웃 기능 구현
  - [x] 로그아웃 버튼 클릭 시 LocalStorage에서 사용자 정보 제거

#### 3) 프로필 페이지 구현:
- [x] 현재 로그인한 사용자의 정보 표시
  - [x] 사용자 이름
  - [x] 간단한 소개
- [x] 프로필 수정 기능
  - [x] 사용자 소개 텍스트 수정 가능
  - [x] 수정된 정보 LocalStorage에 저장

#### 4) 컴포넌트 기반 구조 설계:
- [x] 재사용 가능한 컴포넌트 작성
  - [x] Header 컴포넌트
  - [x] Footer 컴포넌트
- [x] 페이지별 컴포넌트 작성
  - [x] HomePage 컴포넌트
  - [x] ProfilePage 컴포넌트
  - [x] NotFoundPage 컴포넌트

#### 5) 상태 관리 초기 구현:
- [x] 간단한 상태 관리 시스템 설계
  - [x] 전역 상태 객체 생성 (예: 현재 로그인한 사용자 정보)
- [x] 상태 변경 함수 구현
  - [x] 상태 업데이트 시 관련 컴포넌트 리렌더링

#### 6) 이벤트 처리 및 DOM 조작:
- [x] 사용자 입력 처리 (로그인 폼, 프로필 수정 등)
- [x] 동적 컨텐츠 렌더링 (사용자 정보 표시, 페이지 전환 등)

#### 7) 라우팅 예외 처리:
- [x] 잘못된 라우트 접근 시 404 페이지 표시

### 심화과제

#### 1) 해시 라우터 구현
- [x] location.hash를 이용하여 SPA 라우터 구현
  - [x] '/#/' (홈 페이지)
  - [x] '/#/login' (로그인 페이지) 
  - [x] '/#/profile' (프로필 페이지)
 
#### 2) 라우트 가드 구현
- [x] 로그인 상태에 따른 접근 제어
- [x] 비로그인 사용자의 특정 페이지 접근 시 로그인 페이지로 리다이렉션

#### 3) 이벤트 위임

- [x] 이벤트 위임 방식으로 이벤트를 관리하고 있다.

## 과제 셀프회고

<!-- 과제에 대한 회고를 작성해주세요 -->


### ❗**목표**
>💡main.hash.js는 전체적인 흐름을 한눈에 볼 수 있도록 하나의 파일로 구성하였고, hash.js는 조금 더 다양한 시도를 하기 위해 모듈화하였습니다! 😊
- 기본 과제: SPA의 핵심 개념을 프레임워크의 도움 없이 직접 구현 → JS 역량 강화
  - SPA의 핵심?
        1. 페이지 리로딩 없이 브라우저의 URL만 변경됨
        2. 클라이언트측에서 라우팅 처리 (URL 변경 감지 후 동적 갱신)
        3. CSR로 초기 HTML 페이지를 로드한 후 JS가 클라이언트에서 페이지를 구성하기 때문에 첫 로딩이 상대적으로 길지만, 이후 페이지 전환이 빠름
        4. 일관된 상태 관리가 중요함 (Redux, Vuex, Context API 등을 사용하는 이유)
        5. SEO에 불리 (동적으로 콘텐츠를 로딩하기 때문)
- 심화 과제: 확장성이 있는 라우터, 이벤트 위임, 라우터 가드 등의 개념을 학습
    - 확장성이 있는 라우터란?
        - 쉽게 새로운 기능이나 컴포넌트를 추가할 수 있는 것
        - 동적 라우팅 지원
        - 라우트 가드 지원 (인증/인가/권한 기반 접근 제어)
        - 코드 스플리팅 (레이지 로딩 지원)
        - window.history API를 사용해 URL을 변경하고, 페이지를 렌더링            
            브라우저의 뒤로 가기 / 앞으로 가기 처리
 
<details>
<summary>통과 확인 화면</summary>
<div markdown="1">

<img width="1351" alt="Image" src="https://github.com/user-attachments/assets/59f47852-3b31-4548-88c0-d6a015c454a3" />
<img width="857" alt="Image" src="https://github.com/user-attachments/assets/ddcc9c57-e7c0-426c-ace3-65b8fa1d4724" />

</div>
</details>
        
 


### 💪 기술적 성장
<details>
<summary>TDD 첫 시도!</summary>
<div markdown="1">

- 테스트 코드를 기반으로 코드를 짜보는게 처음이었습니다. 기존에 테스트 코드를 연습해 보았을 때는 이미 구현된 사항을 기반으로 테스트 코드를 작성했기 때문에, 기존 코드가 테스트를 통과하도록 맞추는 느낌이었습니다.

  하지만, 사전에 작성된 테스트를 기반으로 코드를 작성하니, 테스트를 코드에 타협하는 느낌이 아닌, 원하는 방식으로 구현이 될 때까지 계속 노력할 수 있는 점이 좋았습니다.
        
  다만, 옵져버 패턴을 적용하려고 했을 때 테스트 코드의 경우, 즉시 실행을 원했지만, 실제 코드는 notify 후 실제 UI가 그려지거나, 액션이 실행되기까지의 시간이 더 걸려서 오류가 발생하는 것 같았습니다 (실제로, setTimeout()을 테스트 코드에 적용하였을 때 통과되는 것을 확인 했습니다).


</div>
</details>

<details>
<summary>처음으로 디자인 패턴을 고려한 개발</summary>
<div markdown="1">
    - 회사에서 개발을 할 때는 디자인 패턴에 대한 논의가 없었는데, 처음 기술 면접을 경험했을 때 디자인 패턴을 적용한 사례를 소개해달라고 해서 당황했던 기억이 있습니다.
    - 이번 과제에서 어떤 디자인 패턴을 적용해볼지 고민하다 **옵져버 패턴**을 선택해보았습니다.
        - 선택 이유
            - user 상태가 변화 된 후 액션이 실행되는 패턴을 가지고 있음
            - 옵져버의 경우 상태를 observer → 변화시 notify → 자동으로 액션 실행이 가능
        - 이점
            - 상태 변경과 화면 업데이트가 자동으로 연결됨
            - 리액트의 상태 관리 방식과 유사해짐
            - 코드의 결합도가 낮아짐 (상태와 행동이 분리되기 때문)
            - 상태 변경 추적이 용이해짐
            - 여러 컴포넌트에서 상태 변경을 구독할 수 있음
    
    - ✅ **작업 순서**
    
    1. **이벤트 리스너 등록 기능 추가**
        - `userStore`에 옵저버(구독자)를 등록하는 메서드(`subscribe`)와 제거하는 메서드(`unsubscribe`) 추가
        - 상태 변경 시 등록된 옵저버들에게 알리는 메서드(`notify`) 추가
    2. **상태 변경 시 `notify` 호출**
        - `setUser`, `clearUser` 등 상태를 변경하는 메서드에서 `notify` 호출하도록 수정
    3. **구독 기능 적용**
        - UI 컴포넌트나 특정 동작을 수행할 부분에서 `subscribe`을 통해 `userStore` 상태 변화를 감지하고 반응하도록 구현

</div>
</details>

<details>
<summary> BrowserRouter와 Hash Router, 그리고 그에 따른 배포 차이점을 알게되었음!</summary>
<div markdown="1">


  | | 해쉬 라우터(HashRouter)| 브라우저 라우터(BrowserRouter)|
  | --- | --- | --- |
  | **URL 구조** | http://example.com/#/about | http://example.com/about |
  | **새로고침 시 동작** | 클라이언트에서 처리 (서버 요청 없음) | 서버에서 해당 경로를 처리해야 함 |
  | **SEO(검색 엔진 최적화)** | 불리함  | 유리함 |
  | **설정 필요 여부** | 별도 설정 없이 사용 가능 | 서버에서 클라이언트 라우팅 지원 필요 |
  | **사용 사례** | 정적 파일 기반 배포(GitHub Pages 등) | SEO가 필요한 웹사이트, 서버 설정이 가능한 경우 |

- **BrowserRouter**

  - 브라우저 페이지 로딩시 세션 히스토리가 생성됨 (세션 히스토리는 **스택** 형태로 쌓임)

    스택 형태이기 때문에 세션 히스토리를 사용해서 뒤로 가기 / 앞으로 가기 가 가능한 것
            
     즉 세션 히스토리란, 어떤 페이지를 탐색했는가에 대한 히스토리
            
    새로 고침 없이 URL이 업데이트 됨
            
    `pushState`와 `replaceState`는 **URL만 변경할 뿐, 실제 화면(내용)은 자동으로 바뀌지 않음**
            
    →  즉, 페이지 이동 없이 화면이 다시 그려짐 → SPA 구현 가능!
            
   - console 창에 `history`를 입력해보면 현재 페이지에 대한 `History` 정보를 확인할 수 있음
     ![](https://velog.velcdn.com/images/minw0_o/post/ecf72d93-7a8d-44fd-b51b-a1954e539221/image.png)
            
        
  - length: 현재 페이지까지 쌓여있는 history가 몇 개인지를 나타냄
       
     - scrollRestoration: 뒤로 가기 시, 이전에 있던 scroll로 돌아가도록 할 것인지를 나타냄
      - state: history의 state로, pushState와 replaceState 함수의 첫번째 인자로 전달한 값이 여기에 저장됨
   - **언제 사용하면 좋을까?**
            - 깔끔한 URL 구조를 유지하고 싶은 경우
            - SEO(검색 엔진 최적화)가 필요한 경우
            - 서버에서 클라이언트 사이드 라우팅을 지원할 수 있는 경우
        
  - 관련 함수
    - `pushState(state, title, url)`
                - 현재 URL을 변경하면서 히스토리에 추가
                - 뒤로가기 가능
    - `replaceState(state, title, url)`
                - 현재 URL을 변경하지만 히스토리에 추가하지 않음
                - 뒤로가기 불가능



 - **Hash Router**
      - 브라우저의 기본적인 페이지 요청을 하지 않고, 해시(`window.location.hash`)를 기반으로 라우팅함
            
          예) `http://example.com/#/about`
            
      - **언제 사용하면 좋을까?**
            - 서버에서 클라이언트 사이드 라우팅을 처리할 수 없는 환경 (예: 정적 호스팅 서비스)
                
           예) GitHub Pages 같은 서버 설정이 어려운 환경에서 사용
                
   - 정적 vs 동적 배포
        - 정적 배포 (Static Hosting)
            - 개념
                - HTML, CSS, JavaScript 같은 정적인 파일을 서빙하는 방식
                - 별도의 서버가 필요 없이, 클라이언트에서 직접 JavaScript로 페이지를 렌더링함
                - 대표적인 서비스: **GitHub Pages, Vercel, Netlify, AWS S3, Firebase Hosting**
            - 이슈
                - BrowserRouter 사용 시, 새로고침하면 404 에러 발생!
                    - BrowserRouter는 History API를 사용해서 URL을 관리하는데, 정적 호스팅에서는 해당 경로를 직접 제공하지 않기 때문!
                        
                        예) `https://example.com/about` 페이지를 새로고침하면 서버가 `about.html`을 찾지 못해 404 에러 발생
                        
                - 해결 방법
                    - `HashRouter`는 `/#/about` 형식으로 동작하기 때문에, 정적 배포에서 별도의 서버 설정이 필요 없음.
                    - 또는, `BrowserRouter`를 사용하면서 모든 요청을 `index.html`로 리다이렉트하도록 설정하면 해결 가능
        - 동적 배포 (Dynamic Hosting)
            - 개념
                - 서버가 요청을 받아서 적절한 리소스를 제공하는 방식
                - 백엔드 서버 (Express, Django, Spring 등)가 존재하며, 클라이언트에서 요청한 경로를 처리할 수 있음
                - 대표적인 서비스: **Heroku, AWS EC2, DigitalOcean, Vercel (서버리스 API 포함), Render**
            - 동적 배포에서는 `BrowserRouter`를 기본으로 사용하고, 서버에서 적절한 리다이렉트 설정을 추가하는 것이 좋음
        
        **📌 결론: 정적 vs 동적 배포 시 고려할 점**
  
        
        | 구분 | 정적 배포 (Static Hosting) | 동적 배포 (Dynamic Hosting) |
        | --- | --- | --- |
        | 라우터 추천 | HashRouter (권장) | BrowserRouter (권장) |
        | SEO | ❌ 불리함 (`#` 포함) | ✅ 유리함 |
        | 새로고침 시 404 문제 | ❌ `BrowserRouter` 사용 시 발생 | ✅ 서버 설정하면 해결 가능 |
        | 추가 설정 필요 여부 | `HashRouter` 사용 시 불필요, `BrowserRouter` 사용 시 리다이렉트 설정 필요 | `BrowserRouter` 사용 시 서버 설정 필요 |
        | 추천 서비스 | GitHub Pages, S3, Netlify, Firebase Hosting | Express, Nginx, Vercel, AWS EC2 |

</div>
</details>

<details>
<summary>DOMContentLoaded 에 대해 조금 더 알게되었음</summary>
<div markdown="1">

  - 문서의 DOM이 완전히 로드 & 파싱된 후 실행되는 이벤트 리스너
  - 페이지에서 DOM이 준비되었을 떄 호출되기 때문에 window.onload보다 빠르게 실행됨
  - 즉, 이미 HTML 구조가 준비된 상테에서 JS 코드가 실행되도록 보장
  - 이미지, 스타일시트 등 외부 리소스가 로드되는 것과는 관계 없음!!
  - 결론: 페이지의 HTML 콘텐츠가 모두 로드되고 DOM 트리가 완성되면 발생. 외부 자원(이미지 등)은 로드되지 않아도 이 이벤트는 실행됨

</div>
</details>


### 👩‍💻 코드 품질

- 일단 기능 구현 → 배포 → 리팩토링 → PR작성을 목표로 했는데, 배포에서 생각보다 오랜 시간이 걸려서 리팩토링에 시간을 많이 쓰지 못한 것이 아쉬웠습니다.
- 디자인 패턴, 상태관리(리액트와 좀 더 유사하게), 라우터 가드 등에 더 시간을 쓰지 못해 아쉬웠습니다.
- 특히, router 옵져버 관련해서 코드 구현을 하였고, 동작까지 확인했음에도, 테스트 코드를 통과하지 못해 사용이 안되서 아쉬웠습니다.

### 📝 학습 효과 분석

- ✅ **자가 진단 체크 리스트:**
  <details>
  <summary>과제 전</summary>
  <div markdown="1">

       라우팅과 네비게이션
        - [ ]  History API와 해시 기반 라우팅의 동작 원리와 차이점을 설명할 수 있다
        - [x]  브라우저의 History 스택 관리와 사용자 경험을 고려한 라우팅 처리 방법을 이해하고 있다
        - [ ]  SPA에서 라우트 가드를 구현하고 접근 제어를 효과적으로 처리할 수 있다
        - [x]  동적 라우트 파라미터 처리와 중첩 라우팅을 구현할 수 있다
        
        상태 관리
        - [x]  브라우저 스토리지(LocalStorage, SessionStorage)의 특성과 적절한 사용 시나리오를 구분할 수 있다
        - [ ]  컴포넌트 간 상태 공유를 위한 발행-구독 패턴을 구현할 수 있다
        - [ ]  전역 상태 업데이트 시 필요한 컴포넌트만 선택적으로 리렌더링하는 방법을 알고 있다
        - [ ]  상태 변화에 따른 부수 효과(side effects)를 적절히 관리할 수 있다
        
        컴포넌트 설계
        - [x]  재사용 가능한 컴포넌트를 설계하고 구현할 수 있다
        - [ ]  컴포넌트 간의 결합도를 낮추고 응집도를 높이는 설계 원칙을 적용할 수 있다
        - [ ]  이벤트 위임을 활용하여 효율적인 이벤트 처리 시스템을 구현할 수 있다

  </div>
  </details>

  <details>
  <summary>과제 후</summary>
  <div markdown="1">

        라우팅과 네비게이션
        - [x]  History API와 해시 기반 라우팅의 동작 원리와 차이점을 설명할 수 있다
        - [x]  브라우저의 History 스택 관리와 사용자 경험을 고려한 라우팅 처리 방법을 이해하고 있다
        - [x]  SPA에서 라우트 가드를 구현하고 접근 제어를 효과적으로 처리할 수 있다
        - [x]  동적 라우트 파라미터 처리와 중첩 라우팅을 구현할 수 있다
        
        상태 관리
        - [x]  브라우저 스토리지(LocalStorage, SessionStorage)의 특성과 적절한 사용 시나리오를 구분할 수 있다
        - [x]  컴포넌트 간 상태 공유를 위한 발행-구독 패턴을 구현할 수 있다
        - [x]  전역 상태 업데이트 시 필요한 컴포넌트만 선택적으로 리렌더링하는 방법을 알고 있다
        - [ ]  상태 변화에 따른 부수 효과(side effects)를 적절히 관리할 수 있다
        
        컴포넌트 설계
        - [x]  재사용 가능한 컴포넌트를 설계하고 구현할 수 있다
        - [ ]  컴포넌트 간의 결합도를 낮추고 응집도를 높이는 설계 원칙을 적용할 수 있다
        - [x]  이벤트 위임을 활용하여 효율적인 이벤트 처리 시스템을 구현할 수 있다

  </div>
  </details>

        

- React를 공부할 때마다, 현재 업무에서 사용하는 jQuery와 너무 동떨어지게 느껴졌습니다. 그런데 핵심 개념인 router, 전역 상태관리 등 자바스크립트로 리액트를 생각하며 구현해보니 사실 근본적인 부분들은 모두 통하고 있었다는게 와닿았습니다.
    
    결국 React를 포함한 시장에서 사용되는 많은 프레임워크와 라이브러리들은 자바스크립트 기반이기 때문에, 이들을 빠르게 학습하기 위해서는 자바스크립트 자체에 대한 깊은 이해가 중요하다는 것을 다시 한번 느끼게 되었습니다.
    
- main.hash.js에서는 처음에 하나의 파일에서 작업한 그대로 두었기 때문에 변화된 main.js 파일과 비교하며 흐름을 놓치지 않으려고 했습니다. 모듈화를 했을 때 재사용성, 확장성, 캡슐화 등 여러 장점도 있지만, 한번에 흐름을 파악하기 어려웠는데 하나하나 비교하며 작업하니 이해하기 더 수월했습니다.

### 📮 과제 피드백

- 처음에는 기능 구현이 쉽다고 생각했는데, 배포와 리팩토링을 거치다보니 착각이었다는걸 알게됐습니다…!
- 특히, Q&A 세션과, 다른 분들의 구현 방식을 보면서 고려할 사항들이 점점 더 많이 보여서 시야를 조금 더 확장 할 수 있었습니다.

### ✅ 리뷰받고 싶은 내용

- 디자인 패턴 관련
    
    ```jsx
    const userStore = {
      state: {
        user: JSON.parse(localStorage.getItem("user") || "null"),
      },
      observers: new Set(),
    
      getUser() {
        return this.state.user;
      },
    
      setUser(user) {
        localStorage.setItem("user", JSON.stringify(user));
        this.state.user = user;
        this.notify();
        return user;
      },
    
      clearUser() {
        localStorage.removeItem("user");
        this.state.user = null;
        this.notify();
        return null;
      },
    
      isLoggedIn() {
        return !!this.state.user;
      },
    
      subscribe(observer) {
        this.observers.add(observer);
      },
    
      unsubscribe(observer) {
        this.observers.delete(observer);
      },
    
      notify() {
        this.observers.forEach((observer) => observer(this.state.user));
      },
    };
    
    export default userStore;
    ```
    
    **질문1) user에서 옵져버 패턴을 적용해보았습니다. 처음으로 디자인 패턴을 적용해본거라 이런 방식으로 진행하는게 맞을지 궁금합니다.**
    
    **질문2) 또, 멘토님이었다면 어떤 패턴을 사용하셨을지 궁금합니다.**

    **질문 1&2 답변**: 옵저버패턴 잘 적용하셨어요! 다만 옵저버라는 것도 결국 분리 가능한 기능이니까 별도의 모듈로 구현해서 일반화해보면 어떨까욥. userStore는 그 옵저버를 사용하는 것이죠!
  
- main.js, eventListener 구성 관련
    
    ```jsx
    // main.js
    import { render } from "./router";
    import { addListeners } from "./listeners";
    
    addListeners();
    window.addEventListener("popstate", render);
    document.addEventListener("DOMContentLoaded", function () {
      render();
    });
    
    // listeners > index.js
    import { navigate } from "../router";
    import {
      loginAction,
      logoutAction,
      profileUpdateAction,
    } from "../actions/userActions";
    
    export const addListeners = () => {
      document.addEventListener("click", (e) => {
        if (e.target.matches("a")) {
          e.preventDefault();
          const path = e.target.getAttribute("href");
          navigate(path);
        }
        if (e.target.matches("#logout")) {
          e.preventDefault();
          logoutAction();
        }
      });
      document.addEventListener("submit", (e) => {
        if (e.target.matches("#login-form")) {
          e.preventDefault();
          loginAction(e);
        }
        if (e.target.matches("#profile-form")) {
          e.preventDefault();
          profileUpdateAction();
        }
      });
    };
    ```
    
    - main.js에서 DOMContentLoaded가 되기 전에 addEventLister관련 내용을 호출하고 있습니다.
    
    **질문3) `window.addEventListener("popstate", render);` 의 경우 click이나 submit 이벤트와는 차이가 있다고 생각해서 `listeners > index.js`로 분리하지 않고 main.js에 유지하였습니다. 이렇게 정리하는게 더 가독성이 좋을지, 아니면 listners 폴더로 빼는게 좋을지 궁금합니다.**

    **답변**:
    사실 지금은 추상화 된 컴포넌트 기반으로 캡슐화하는데 제약이 있다보니 뭘 어떻게 해도 가독성이 좋아지기 힘들어요.ㅎㅎ
    어떻게 보면 이런 어려움이 이번 과제의 의도이기도 하고요(그래서 우리가 리액트같은 컴포넌트 기반 프레임웍을 쓰는거죠)
    하지만 재연님이 말씀하신 내용대로 이벤트 핸들러라고 모두 같은 레밸의 이벤트핸들러는 아니니 의미적으로 분리하는 것 저는 좋은 것 같습니다.
  
- 폴더/파일 구조 관련
    
    ```jsx
    📦src
     ┣ 📂actions
     ┃ ┗ 📜userActions.js
     ┣ 📂components
     ┃ ┣ 📜Footer.js
     ┃ ┣ 📜Header.js
     ┃ ┗ 📜PostList.js
     ┣ 📂data
     ┃ ┗ 📜posts.js
     ┣ 📂listeners
     ┃ ┗ 📜index.js
     ┣ 📂observer관련 시도
     ┃ ┣ 📂routes
     ┃ ┃ ┣ 📜index.js
     ┃ ┃ ┗ 📜router.js
     ┃ ┣ 📜App.js
     ┃ ┗ 📜main_observer.js
     ┣ 📂pages
     ┃ ┣ 📜Home.js
     ┃ ┣ 📜Login.js
     ┃ ┣ 📜NotFound.js
     ┃ ┗ 📜Profile.js
     ┣ 📂services
     ┃ ┗ 📜userService.js
     ┣ 📂store
     ┃ ┗ 📜userStore.js
     ┣ 📜main.hash.js
     ┣ 📜main.js
     ┣ 📜router.js
     ┗ 📜setupTests.js
    ```
    
    - 적은 기능을 가진 애플리케이션이지만, 최대한 모듈화를 하려고 하다보니 불필요하거나 역할에 맞지 않는 폴더/파일이 생기는 것 같아 파일을 어디까지 세분화하는게 좋을지 고민이 되었습니다. (특히, services 폴더가 필요할지에 대한 의문이 듭니다.)
    
    ```jsx
    // services > userService.js
    export const userService = {
      getLoginFormData() {
        return document.getElementById("username").value;
      },
    
      getProfileFormData() {
        return {
          username: document.getElementById("username").value,
          email: document.getElementById("email").value,
          bio: document.getElementById("bio").value,
        };
      },
    };
    
    // actions > userActions.js
    import userStore from "../store/userStore";
    import { navigate } from "../router";
    import { userService } from "../services/userService";
    
    export const loginAction = (e) => {
      e.preventDefault();
      const username = userService.getLoginFormData();
      userStore.setUser({
        username: username,
        email: "",
        bio: "",
      });
      navigate("/profile");
    };
    
    export const logoutAction = () => {
      userStore.clearUser();
      navigate("/login");
    };
    
    export const profileUpdateAction = () => {
      const user = userStore.getUser();
      const formData = userService.getProfileFormData();
      userStore.setUser({ ...user, ...formData });
      navigate("/profile");
    };
    ```
    
  **질문4) services 폴더의 경우 비즈니스 로직이나 UI 관련된 내용을 분리할 때 사용하는 것으로 알고 있는데, 보통 사용하실 때 이렇게 단순히 UI에서 데이터를 가져오는 부분에서도 사용하시는지 궁금합니다.**    
    앞으로 코드가 얼마나 더 커질지 몰라서 캡슐화 & 데이터를 한곳에서 관리한다는 의미로 일단 분리해두었습니다!

  **답변**:
  사실 구조나 레이어는 필요할때 만들어야하는 것 같아요. 
  레이어를 잘 분리하신 것같고 사실 service라고 말씀하신 내용이 어디 법으로 정해진것은 없어서 사람마다 생각이 다 다릅니다 :)
  일관성인게 잘 구분만 되어 있다면 지금 과제에서는 큰 문제가 없어 보입니다.


    

### ☑️ TODO

- [ ]  전역 상태 업데이트 시 필요한 컴포넌트만 선택적으로 리렌더링
- [ ]  라우터 가드 수정
