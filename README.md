# 💙 감정 일기장

<br/>
<br/>

![감정일기썸네일](https://github.com/eeeyooon/emotion-diary/assets/102462534/0e62639a-ac12-4033-8fcc-6165f261dbdf)

<br/>
<br/>

## 프로젝트 개요

💡 프로젝트 주제 : 하루의 일상과 그날 느낀 감정을 함께 기록하는 감정 일기장

📆 프로젝트 구현 기간 : 2023.06.21 ~ 2023.07.02

🏷 프로젝트 목표 : React 실습 및 적재적소에 Hooks를 사용하는 연습과 localStorage를 이용하여 웹 브라우저를 DB처럼 이용하는 방법, 파이어베이스를 통한 배포, Open Graph 설정까지 경험해보기.

<br/>

[💙💬 감정 일기장 사용해보기](https://eeeyooon-emotion-diary.web.app/)

<br/>

## 기술 스택

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat&logo=ReactRouter&logoColor=white"/> <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=Firebase&logoColor=white"/>

<br/>

## 주요 기능

1. 이모티콘(감정)과 함께 일기 작성/수정/삭제
2. 감정별 필터링 및 날짜순으로 정렬

<br/>
<br/>

## 레이아웃 디자인

![레이아웃 디자인](https://github.com/eeeyooon/emotion-diary/assets/102462534/afb92d17-fa6f-4458-a5e9-5e8b0425a61f)

<br/>
<br/>

## 공통 컴포넌트

<br/>

### MyButton

<br/>

![공통 컴포넌트 - 버튼](https://github.com/eeeyooon/emotion-diary/assets/102462534/c79acf85-a786-46b0-bf27-1526612d8532)

<br/>

### MyHeader

<br/>

![공통 컴포넌트 - 헤더](https://github.com/eeeyooon/emotion-diary/assets/102462534/a8121b05-69c8-47de-a46f-ae36e5345bde)

<br/>
<br/>

## 프로젝트 최적화

`230627`

<br/>

React-Developer-Tools를 활용하여 연산이 낭비되고 있거나, 최적화가 안되어 있는 부분을 찾아 체크하고 최적화 작업을 진행함.

1. Home의 Control Menu가 불필요하게 재렌더링됨.
2. DiaryItem이 필터값을 바꿀 때 불필요하게 재렌더링됨.
3. 일기 수정 시, content가 바뀔 때마다 emotionItem이 재렌더링됨.

➡ `React.memo`를 사용하여, 전달 받는 prop의 값이 바뀌지 않으면 렌더링이 일어나지 않도록 메모이제이션을 해주었다.

<br/>

## 구현 화면


### 일기 작성

<br/>

![일기작성](https://github.com/eeeyooon/emotion-diary/assets/102462534/020b13fe-e6ee-4ab1-8360-7a5ccbf1074a)

<br/>

### 일기 수정

![일기수정](https://github.com/eeeyooon/emotion-diary/assets/102462534/31184fac-80b5-4012-a702-5cd2ebb33c33) 

<br/>

### 일기 삭제

![일기삭제](https://github.com/eeeyooon/emotion-diary/assets/102462534/a192e161-3d2e-4ce5-806f-e7807b25b5ae) 

<br/>

### 정렬 및 필터링

![정렬및필터링](https://github.com/eeeyooon/emotion-diary/assets/102462534/5acda445-584d-408c-b6df-489c21d57408)

<br/>
<br/>
