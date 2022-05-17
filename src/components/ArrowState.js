// 함수형 컴포넌트에서 state 값 사용 방법
// useState 는 리액트 16.8에서 추가됨
import { useState } from "react"; 

const ArrowState = (props) => {
  // useState()의 반환값이 [값, 값을 수정하는 메소드]
  // number의 값은 useState(0)안에 할당한 값, 비구조화를 통해 할당
  // setNumber는 setState와 동일한 역할
  const [number, setNumber] = useState(0);
  const [name, setState] = useState('홍길동');
  return(
    <div>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number+1);
      }}>+1</button>

      <h3>{name}</h3>
      <button onClick={() => {
        if(name === '홍길동') {
          setState('승춘향');
        }
        else { setState('홍길동'); }
      }}>이름바꾸기</button>
    </div>
  )
};

export default ArrowState;