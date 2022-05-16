//클래스형 컴포넌트
import {Component} from 'react';

class MyLogin extends Component {
  //클래스에서 props값을 가져올때는 this.props를 통해서 들고온다.
  render() {
    const {login , name} = this.props;
    return login ? (
          <div>
            <h2>로그인에 성공하였습니다.</h2>
            <p>{name} 데스웅</p>
          </div>
        ) : (
          <div>
            <h2>로그인이 필요합니다.</h2>
            <p>리액트를 시작하였습니다.</p>
          </div>
        );
  }
}
export default MyLogin;