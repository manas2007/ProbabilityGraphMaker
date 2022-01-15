import Graph from "./graph";
import GraphMaker from "./graphMaker";
import Start from "./start";

const { Component } = require("react/cjs/react.production.min");


class Home extends Component
{
    state={
        customers : [],
        view : 1,
        nums : {},
        probs: {},
        row: [1,1],
        totalNum:[],
        totalProb:[],
        final:[],
        data:[],
    }

    handleChange = (e) =>
    {
        let json = {...this.state};
 
        if(e.target.name.includes("num"))
        {
            json.nums[e.currentTarget.name] = e.currentTarget.value;
        }
        else
        {
            json.probs[e.currentTarget.name] = e.currentTarget.value;
        }
        
        this.setState(json);   
    }
    

    enterApp = () =>
    {
        let json = {...this.state}
        json.view = 2;
        this.setState(json);
    }

    createGraph = () =>
    {
        let json = {...this.state}
        let {nums,probs,totalProb} = json;
        let limit=0;

        // Numbers and Probability Arrays

        for(const key in nums)
        {
            json.totalNum.push(nums[key])
        }
        for(const key in probs)
        {
            totalProb.push(probs[key]);
        }

        // Limit

        for(let i=0 ; i< totalProb.length;i++)
        {
            limit += parseInt(totalProb[i]);
        }

              // Generating random Numbers

            for(let i=0;i<limit;i++)
            {
                let g = this.getRandom(json.totalNum,json.totalProb);
                json.final.push(g);
            }

            // Final Graph Data

            let n = json.totalNum.map((n) => 
            {   
                let occ = json.final.reduce((prev,curr) => 
                {
                    return curr === n ? prev+1 :  prev
                },0)
            
                return {name:n,count:occ}
            })

            json.data = n;
            json.view = 3;

            this.setState(json);
        

    
    }

    // Get Random

    getRandom = (Nums,Probs) =>
    {
        let random = [];

        Nums.map( (n,index) =>
        {
            for(let i=0;i<Probs[index];i++)
            {
                random.push(n);
            }
        });

        var idx = Math.floor(Math.random() * random.length);

        return random[idx];
    }

    newRow = () =>
    {
        let json = {...this.state}
        json.row.push(1);
        this.setState(json);
    }

    returnHome = () =>
    {
        let json = {...this.state}
        json.nums={};
        json.probs={};
        json.totalProb=[];
        json.totalNum=[];
        json.view = 1;
        json.limit = 100;
        this.setState(json);
    }


    render()
    {       
                const {view,data} = this.state;

                   return(<div className="">       

                    {
                        view===2 ? <Graph state= {this.state} cGraph={this.createGraph} handleChange={this.handleChange} nRow={this.newRow} />
            
                         :
            
                        view ===3 ?  <GraphMaker state={this.state}  rHome={()=>this.returnHome()}  />
                        
                         :
            
                        <Start eApp={this.enterApp}/>

                    }
            
                    </div>)
    
    }   
}

export default Home