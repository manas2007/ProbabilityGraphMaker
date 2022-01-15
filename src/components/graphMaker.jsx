import { Component } from "react/cjs/react.production.min";
import {BarChart,XAxis,YAxis,CartesianGrid,Tooltip,Legend,Bar} from "recharts"


class GraphMaker extends Component
{
    state = this.props.state

    render()
    {
        const {totalNum,totalProb} = {...this.state}
       
        return <div className=" container ">

        <div className="row text-center">

        <div className="col-6 left" style={{marginTop:300}}>

        <h1>CHART GENERATOR</h1>

        <div className="row border bg-dark text-white ">
        <div onClick={()=> this.sortName()} className="col-6 border ">Number</div>
        <div  onClick={()=> this.sortCategory()} className="col-6 border ">Probability</div>
        </div>

        <div className="row">
            <div className="col-6">
                {totalNum.map( (n)=>(     
            <input type="text" value={n} className="form-control" name="num1"  placeholder="#" onChange={this.handleChange}/>
                
                ))}
        </div>
        <div className="col-6">
                {totalProb.map( (p)=>(     
                <input type="text" value={p} className="form-control" name="prob1"  placeholder="%" onChange={this.handleChange}/>
                ))}
        </div>
        </div>
            


            <div className="buttonn"> <button style={{width:"50%"}} onClick={() => this.props.rHome()} className="btn btn-warning ">Return</button> </div>
        

        </div>

        <div className="col-6 chart">

        <h3>Random Number Frequency Chart</h3>

        <BarChart width={600} height={550} data={this.state.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="count" />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
        </BarChart>

        </div>

        </div>

    


         </div>
    }
}

export default GraphMaker