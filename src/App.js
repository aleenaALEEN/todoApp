import React from "react";

class A extends React.Component {
  state = {
    todo: "",
    list: [],
    ind: "",
  };
  handlechng = (e) => {
    console.log(e.target.value);
    this.setState({ todo: e.target.value });
  };
  handlesub = () => {
    // 01 method
    // var newarr=this.state.list
    // newarr.push(this.state.todo)

    // this.setState({list:newarr})

    // 02 method
    this.setState({ list: [...this.state.list, this.state.todo], todo: "" });
  };
  handledel = (i) => {
    console.log("del button is working", i);
    this.state.list.splice(i, 1);
    console.log(this.state.list, "state");
    this.setState({ list: [...this.state.list] });
  };
  shiftup = (i) => {
    console.log("shiftup btn is working", i);

    if(i==0)
    {
      alert('already at the top')
    }
    else{
      var li = this.state.list
      let swap // let c 
      swap = li[i] // let c=a 
      li[i]=li[i-1] // let a=b
      li[i-1]=swap  // let b=c
      this.setState({
        list:li
      })

      // var li = this.state.list;
      // var list = li[i];
      // li.splice(i, 1);
      // i = i - 1;
      // li.splice(i, 0, list);
      // this.setState(this.state.list);
    }
  
  };
  shiftdown = (i) => {
    console.log("shiftdown btn is working", i);
    var li = this.state.list;
    var list = li[i];
    console.log(list, "list2");
    li.splice(i, 1);
    i = i + 1;
    li.splice(i, 0, list);
    console.log(li, "list");    
    this.setState(this.state.list);
  };
  edit = (i) => {
    console.log("edit btn is working", i);
    this.state.ind = i;
    this.setState({ todo: [this.state.list[i]] });
  };
  update = () => {
    console.log("update btn is working");
    console.log(this.state.ind, "index");
    var newList = this.state.list;
    newList[this.state.ind] = this.state.todo;
    this.setState({ list: newList, todo: "" });
  };
  render() {
    console.log(this.state.todo,"state");
    return (
      <div>
        <input
          type="text"
          placeholder="Task"
          onChange={this.handlechng}
          value={this.state.todo}
        ></input>
        <button className="btn btn-primary" onClick={this.handlesub}>
          submit
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            this.update();
          }}
        >
          Update
        </button>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>ToDo</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((todo, i) => (
              //    console.log("map")
              <tr>
                <td>{i}</td>
                <td>{todo}</td>
                <td>Time</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      this.shiftup(i);
                    }}
                  >
                    Shift up
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      this.shiftdown(i);
                    }}
                  >
                    Shift down
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.handledel(i);
                    }}
                  >
                    Del
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      this.edit(i);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default A;
