import React from "react";

class A extends React.Component{
    state={
        todo:"",
        list:[]
    }
    handlechng=(e)=>{
        console.log(e.targrt.value);
        this.setState({todo:e.target.value})
    }
    handlesub=()=>{
        this.setState({list:[...this.state.list,this.state.todo],todo:""})
    }
    
    render(){
        console.log(this.state,"state");

        return(
            <div>
                <input type="text" placeholder="Task" value={this.state.todo} onChange={this.handlechng}></input>
                <button onClick={this.handlesub}>Submit</button>
                
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
                    {
                        this.state.list.map((todo,i)=>{
                            <tr>
                                <td>{i}</td>
                                <td>{todo}</td>
                                <td>Time</td>
                                <td>Action</td>
                            </tr>
                        })   
                    }
                </tbody>
            </table>

            </div>
        )
    }
}
export default A