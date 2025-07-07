import React from "react";
 
class Userclass extends React.Component{
constructor(props){
    super(props)
}

    render(){
        return(
            <div>
                <h1>name : {this.props.name}</h1>
            </div>
        )
    }
}
export default Userclass