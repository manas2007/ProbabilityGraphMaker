import { Component } from "react/cjs/react.production.min";


class Graph extends Component
{
    state = this.props.state


    render()
    {
        const {pair,row,nums,probs} = {...this.state}

        return <div className="container text-center ">
        
        <h1 className="heading" >Welcome to Graph Maker</h1>
        <h6>Enter number and their respective probabilities to create a probability distribution graph</h6>

        <div className=""> 
                <div className="row border bg-dark text-white ">
                <div onClick={()=> this.sortName()} className="col-6 border ">Number</div>
                <div  onClick={()=> this.sortCategory()} className="col-6 border ">Probability</div>
                </div>

        {row.map( (r,index)=>(
            <div className="row text-white ">
                <div className="col-6 "> <input type="text" className="form-control" name={"num"+index}  placeholder="#" onChange={this.props.handleChange}/>
                </div>
                <div className="col-6 "> <input type="text" className="form-control" name={"prob"+index}  placeholder="%" onChange={this.props.handleChange}/>
                </div> 
                </div>
        ))} 
                   

                    <div className="buttonn"> <button style={{width:"50%"}} onClick={()=>this.props.nRow()} className="btn btn-warning ">Add Row</button> </div>
                    <div className="buttonn"> <button style={{width:"50%"}} onClick={()=>this.props.cGraph()} className="btn btn-warning ">Create Graph</button> </div>
                     
        </div>
            

         </div>
    }
}

export default Graph