//클래스형 컴포넌트
//react에서 component를 받아와서 상속
import {Component} from 'react';

class MyComponent extends Component {
  //클래스형 컴포넌트에서는 return 대신에 render를 통해 내보낸다.
  render() {
    const name = 'react';
    const login = true;
    return (
      <div>
        <h1>{name} 첫 컴포넌트 입니다.</h1>
        {login ? (
          <div>
            <h2>로그인에 성공하였습니다.</h2>
            <p>혼기루돈구데스</p>
          </div>
        ) : (
          <div>
            <h2>로그인이 필요합니다.</h2>
            <p>리액트를 시작하였습니다.</p>
          </div>
        )}
      </div>
    )
  }
}
export default MyComponent