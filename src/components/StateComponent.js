// 클래스형 컴포넌트의 state
import { Component } from 'react';

class StateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number : 0,
      name : ''
    };
  }
  render() {
    const { number, name } = this.state
    return (
      <div>
        <h1>{number}</h1>
        <button // 화살표 함수로 함수선언 후 값 변경 (아마 Vuex와 비슷한 개념인듯 하다.)
        //함수 형식으로 setState의 내용 전달
        // prevState = > ({state : 값})와 같은 형식으로 전달(return)
        //객체 형식으로 전달
        onClick={() => {
          this.setState((prevState) => ({number : prevState.number + 1}));
        }}
        >+1</button>

        {/* 버튼을 눌렀을때 값이 0으로 초기화 되는 버튼 */}
        <button onClick={() => {
          this.setState({number : 0});
        }}>0</button>
        {/* 버튼을 눌렀을때 값이 -1씩 감소하는 버튼 */ }
        <button onClick={() => {
          this.setState({number : number - 1});
        }}>-1</button>
        <h3>{name}</h3>
        <button onClick={() => {
          this.setState((prevState) => ({
            name : "응애"
          }));
          if(name) this.setState({name : ''});
        }}>응애</button>
      </div>
    );
  }
};
export default StateComponent;