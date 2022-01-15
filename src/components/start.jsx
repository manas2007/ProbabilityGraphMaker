import { Component } from "react/cjs/react.production.min";


class Start extends Component
{

    state={}

    render()
    {
        return <div className="home">

        <div className="" style={{position:"absolute",top:20,left:100}}>

        <h1 className="heading1" >Click here to enter the app</h1>
        <button onClick={() =>this.props.eApp()} style={{width:200}} className="btn btn-warning">Click Me</button>

        </div>

     

        </div>
    }
}

export default Start