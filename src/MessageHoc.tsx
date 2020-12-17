import React, {Component} from 'react';

const initialState = {
  name: 'Many',
  message: 'HOCs are cool!!'
}

type State = Readonly<typeof initialState>

const messageHoc = (WrappedComponent : any) =>{
  return class HOC extends Component {
    readonly state: State = initialState;
    render(){
      return(
        <WrappedComponent name={this.state.name} message={this.state.message}/>
      )
    }
  }

}

export default messageHoc;