## shop for you

## 📃index

1.[계획의도](#계획의도)  
2.[기술스택](#기술스택)  
3.[기능](#기능)  
4.[발생했던 문제 및 아쉬운 부분](#발생했던-문제-및-아쉬운-부분)  
5.[추가하고 싶은 기능](#추가하고-싶은-기능)

## 🎯계획의도

드림코딩의 쇼핑몰만들기 프로젝트를 클론코딩한 후 저만의 쇼핑몰로 커스텀하기 위해 해당 프로젝트를 제작하였습니다.

제품을 남성, 여성, 아이, 뷰티로 나누어 각 세션에서 보여주는 것에 초점을 맞추었습니다.

## ✨기술스택

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white"> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white"/> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

## 💻기능

- 여성, 남성, 아이, 뷰티로 나누어 페이지를 보여주기
  - 리액트 라우터를 이용

* 구글 아이디로 로그인하기
  - firebase의 Authentication
  - 로그인 상태에서만 장바구니 아이콘과 유저의 프로필 이미지를 표시

- 제품 추가하기

  - 로그인시 firebase의 realtime database에 저장된 권리자의 UserId를 확인하여, 권리자만이 database에 제품을 추가할 수 있도록 함
    <br/>

- 장바구니에 제품을 추가, 수정, 삭제하기
  - firebase의 realtime database에 로그인 상태의 UserId 객체를 추가하여 제품 정보를 업로드함

## 📌발생했던 문제 및 아쉬운 부분

1. firebase의 realtime database를 시작할 때 초기 세팅을 잘못하여 제품 정보를 업로드하지 못함

- ✔해결 : test모드로 설정하여 별도의 접근권한을 필요하지 않도록 함
  <br/>

2. useParams 메서드가 undefined을 반환하는 문제

- ✔해결 :
  - useParams으로 가져올 변수 이름과 리액트 라우터 주소의 경로 이름을 동일하게 함
  - 동일한 경로에 여러가지 변수를 설정하여 의도하지 않은 component가 표시됨. 따라서 아래와 같이 수정하였다.
  - 아쉬운 점 : 쿼리스트링을 사용했다면 useParams을 사용하지 않고 더 단순한 라우터 주소 경로를 만들수 있었을 것 같다.
    <br/>

3. useMutation을 사용할 때 두개의 매개변수를 배열안에 두면서 생긴 문제

- ✔해결 : useMutation의 정확한 사용법과 기능을 몰랐기 때문에 발생하였다.
  <br/>

4. Slick Slider의 왼쪽 Arrow가 보이지 않는 문제

- ✔해결 : slick slider를 커스텀하기 위해서 module폴더에 있는 slick slider CSS파일에서 수정하였고, 해당 클래스에 z-index를 추가하여 가장 상위에 보이도록 하였다.
- ❗아쉬운 점 : 왜 왼쪽만 보이지 않았는지에 대해 원인을 찾지 못하였다.
  <br/>

5. woman페이지에서 man페이지로 이동할때 종종 NotFound페이지가 뜨는 문제

- ❗원인을 찾지 못하여 해결 못함

## 추가하고 싶은 기능

- 즐겨찾기 기능
  - productCard에 하트버튼을 추가하여, 클릭하면 firebase에 업로드하고 별도의 페이지에 표시되도록 함(Cart와 유사한 방식)
