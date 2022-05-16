// 클래스형 컴포넌트의 state
import { Component } from 'react';

class StateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number : 0
    };
  }
  render() {
    const { number } = this.state
    return (
      <div>
        <h1>{number}</h1>
        <button // 화살표 함수로 함수선언 후 값 변경 (아마 Vuex와 비슷한 개념인듯 하다.)
        onClick={() => {
          this.setState({number : number + 1});
        }}
        >+1</button>
      </div>
    );
  }
};
export default StateComponent;