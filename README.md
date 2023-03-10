## shop for you

## 📃index

1.[계획의도](#계획의도)  
2.[기술스택](#기술스택)  
3.[기능](#기능)  
4.[발생했던 문제 및 아쉬운 부분](#발생했던-문제-및-아쉬운-부분)  
5.[추가하고 싶은 기능](#추가하고-싶은-기능)

## 🎯계획의도

> 드림코딩의 쇼핑몰만들기 프로젝트를 클론코딩한 후 저만의 쇼핑몰로 커스텀하기 위해 해당 프로젝트를 제작하였습니다.
> 제품을 남성, 여성, 아이, 뷰티로 나누어 각 세션에서 보여주는 것에 초점을 맞추었습니다.

## ✨기술스택

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white"> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white"/> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

## 💻기능

- 여성, 남성, 아이, 뷰티로 나누어 페이지를 보여주기
  - 리액트 라우터를 이용
    ![React-App-router](https://user-images.githubusercontent.com/105909450/223049389-b2aa2e8c-dd06-402f-9434-f689a895cd2b.gif)
    <br/>

* 구글 아이디로 로그인하기
  - firebase의 Authentication
  - 로그인 상태에서만 장바구니 아이콘과 유저의 프로필 이미지를 표시  
     ![Google_Login](https://user-images.githubusercontent.com/105909450/223061643-1f15b32a-9102-4c45-b68a-be5585acba63.gif)
    <br/>

- 제품 추가하기

  - 로그인시 firebase의 realtime database에 저장된 권리자의 UserId를 확인하여, 권리자만이 database에 제품을 추가할 수 있도록 하였다.
    ![product_upload](https://user-images.githubusercontent.com/105909450/223063964-d54553ce-4bb2-4bd7-97df-4868d63917f8.gif)
    <br/>

- 장바구니에 제품을 추가, 수정, 삭제하기
  - firebase의 realtime database에 로그인 상태의 UserId 객체를 추가하여 제품 정보를 업로드하였다.
    ![cart_upload](https://user-images.githubusercontent.com/105909450/223061491-690641fd-b152-46cc-88c5-0f1a786acbc7.gif)
    <br/>

## 📌발생했던 문제 및 아쉬운 부분

1. firebase의 realtime database를 시작할 때 초기 세팅을 잘못하여 제품 정보를 업로드하지 못함

- ✅해결 : test모드로 설정하여 별도의 접근권한을 필요하지 않도록 하였다.
  <br/>

2. useParams 메서드가 undefined을 반환하는 문제

- ✅해결 :

  - useParams으로 가져올 변수 이름과 리액트 라우터 주소의 경로 이름을 동일하게 함
  - 동일한 경로에 여러가지 변수를 설정하여 의도하지 않은 component가 표시됨. 따라서 아래와 같이 수정하였다.

        ```javascript

        {
            path: '/',
            element: <App />,
            errorElement: <NotFound />,
            children: [
                { index: true, path: '/', element: <Home /> },
                {
                    path: '/category/:sort',
                    element: <SortedProducts />,
                    children: [
                        { index: true, path: '/category/:sort', element: <AllProducts /> },
                        { path: '/category/:sort/:category', element: <CategoryProducts /> },
                    ],
                },
                //이하 생략...
            ],
        },

        ```

    <br/>

  - 아쉬운 점 :
    - 쿼리스트링을 사용했다면 useParams을 사용하지 않고 더 단순한 라우터 주소 경로를 만들수 있었을 것 같다.
    - woman, man, ...에 해당하는 페이지를 별도로 구성하고 그에 해당하는 자식 경로와 페이지를 각각 만들어야 하는지에 대해 고민되었으나 그렇게 되면 너무나도 많은 페이지를 만들어야 했기 때문에 위와 같이 구성하였다.
      <br/>

3. useMutation을 사용할 때 두개의 매개변수를 배열안에 두면서 생긴 문제

- ✅해결 : useMutation의 정확한 사용법과 기능을 몰랐기 때문에 발생하였다.
  <br/>

4. Slick Slider의 왼쪽 Arrow가 보이지 않는 문제

- ✅해결 :

  - slick slider를 커스텀하기 위해서 module폴더에 있는 slick slider CSS파일에서 수정하였고, 해당 클래스에 z-index를 추가하여 가장 상위에 보이도록 하였다.
  - 배포할때는 내가 수정한 css가 아니라 서버에 등록된 CSS 파일을 가져오기때문에 커스텀한 Arrow 컴포넌트를 만들었다.

- ❗아쉬운 점 :
  - 왜 왼쪽만 보이지 않았는지에 대해 원인을 찾지 못하였다.
  - ::before 영역을 수정하지 못해서 index.css에서 해당 가상클래스를 직접 수정하였다.(slick-theme.css보다 우선순위가 아래이기 때문에 !important를 추가하였다.)
    <br/>

5. woman페이지에서 man페이지로 이동할때 종종 NotFound페이지가 뜨는 문제

- ❗원인을 찾지 못하여 해결 못하였다.
  <br/>

6. Link를 통해 state를 전달했을 때, 받아온 state가 undefined으로 반환되는 문제

- ✅해결 : state의 객체 구조를 파악하지 못했기 때문에 발생하였다.

  ```javascript
  //Link가 위치한 컴포넌트 내부
  const { sort } = useParams();
  return <Link to='outer' state={{ state: sort }}>

  //state를 받아 사용할 컴포넌트 내부
  const {
      state: { state: sort },
  } = useLocation();
  ```

7. gh-pages 라이브러리를 통한 배포 실패

- ✅해결 : ApiKey와 같은 키들은 git에 추가되지 않도록 별도의 파일에 저장해 두었기 때문에 배포할 때 반영되지 않는다. 따라서 Nelify에서 배포하기로 하였고, 해당 값들은 환경변수로 입력하여 노출되지 않고 반영되도록 하였다.

  <br/>

## 추가하고 싶은 기능

- 즐겨찾기 기능

  - productCard에 하트버튼을 추가하여, 클릭하면 firebase에 업로드하고 별도의 페이지에 표시되도록 하기(Cart와 유사한 방식)
    <br/>

- 쿠폰 적용하기

  - 쿠폰을 누르면 다운로드가 되었다는 표시가 뜨고, 유저의 페이지에서 쿠폰을 확인할 수 있도록 하기
  - 장바구니 페이지에서 쿠폰을 적용한 가격이 표시되도록 하기
    <br/>

- 회원가입, 로그인 기능

  - firebase의 Authentication을 이용하여 회원가입하고, 로그인할 수 있도록 하기
    <br/>

- 반응형으로 구현
  - navbar와 aside를 어떻게 처리할 것인지 생각하지 못하였다.
    <br/>
