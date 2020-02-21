import React, { Component } from "react";
import axios from "axios";


class postForm extends Component {
constructor(props) {
    super(props)

    this.state = {
         id:'',
         name:'',
         age:'',
         height:''

    }
}
changeHandler = e => {
    this.setState({[e.target.name] : e.target.value })
}

submitHandler =e=> {
    e.preventDefault()
    console.log(this.state)
    axios
    .post('http://localhost:3333/smurfs', this.state)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error))
}


  render() {
      const { id, name, age, height } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input placeholder="id" type="text" name="id" value={id} onChange={this.changeHandler} />
          </div>
          <div>
            <input  placeholder="name" type="text" name="name" value={name} onChange={this.changeHandler}/>
          </div> 
          <div>
            <input  placeholder="age" type="text" name="age" value={age} onChange={this.changeHandler}/>
          </div>
          <div>
            <input  placeholder="height" type="text" name="height" value={height} onChange={this.changeHandler}/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default postForm;
