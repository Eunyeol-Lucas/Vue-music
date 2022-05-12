⏰ **시행 날짜:** 2022.05.12

🍀 **개발환경:** Visual Studio Code

👄 **개발언어:** **html, css, JavaScript, Vue, Vuex TailwindCSS, Axios**

**🛠 개발 도구**

- Visual Studio Code
- Google Chrome Browser
- last.fm API

---

## 🎯 구현 기능

### 1. 검색창 (DOM & Event)

- 사용자가 input에 value를 입력할 경우, 해당 입력값을 기준으로 데이터를 실시간 요청합니다.

### 2. API 요청 (Ajax)

- 사용자가 입력한 검색어(keyword)를 포함하여 앨범 검색 요청을 보냅니다.
- (참고 문서) https://www.last.fm/api/show/album.search
- 앨범 검색을 위한 ajax 요청에는 `axios`를 활용합니다.

### 3. 검색 결과 (DOM & Event)

- 검색 결과를 input 창 아래에 띄웁니다.
- 검색 결과가 나타나기 전 skeleton loader를 띄워 사용자에게 데이터가 요청 중임을 알립니다.
- 무한 스크롤을 통해 페이지 스크롤 시 새로운 데이터를 서버에 요청합니다.

### 4.  실시간 검색 요청

- Enter 버튼 없이 사용자가 검색어를 입력하면 debounce를 통해 일정 시간 이후 자동으로 서버에 요청을 보냅니다.

### 5. 무한 스크롤

- 검색어와 관련된 모든 데이터를 한 번에 요청하는 것이 아니라, intersectionObserver API를 활용하여 무한 스크롤을 구현합니다.
- 가장 마지막 자료가 viewport에 나타나는 경우, 서버로 한 번에 서버에 20개씩 데이터를 요청합니다.

### 6. Dark & Light 모드

- tailwindCSS를 활용하여 dark 모드와 light 모드를 구현합니다.
- 최초 속성은 사용자의 환경에 맞추어 setting 합니다.



---

## 🌏 실제 페이지

## ![Screenshot-2363974](README.assets/Screenshot-2363974.png)

---

## 🚨 Error

- 서버에 무한정 요청이 가는 문제 발생
- 
