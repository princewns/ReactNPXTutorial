//화살표 함수로 컴포넌트 작성

const ArrowLogin = (props) => {
// props로 값을 받아와서 사용 및 출력하기
  return props.login ?(
      <div>
        <h2>로그인에 성공하였습니다.</h2>
        <p>혼기루돈구데스</p>
        <p>{props.login}</p>
      </div>
    ) : (
      <div>
        <h2>로그인이 필요합니다.</h2>
        <p>리액트를 시작하였습니다.</p>
        <p>{props.login}</p>
      </div>
    );
};

export default ArrowLogin