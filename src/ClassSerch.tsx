import React from "react";
import "./ClassSerch.css";
interface IPerson{
    email:string,
    name:string,
    avatar:string;
}
interface IState{
    search:string,
    loading:string;
    persons:IPerson[];
}

export default class ClassSerch extends React.Component<{}, IState>{
    constructor(props:{}){
        super(props);
        this.state={
            search:"",
            loading:"Not Started",
          persons:[]
        }
    }
    private async ajaxCall(){
       const response=await fetch("https://reqres.in/api/users");
       if(response.ok){
            const json=await response.json();
           const persons=json.data.map( x=>({
            "email":x.email,
            "avatar":x.avatar,
            "name": `${x.first_name} ${x.last_name} `
           }));
           this.setState({
            persons:persons,
            loading:"Completed"

           })

          
       }
    }
    public componentDidMount() {
        this.setState({loading:"Started"});
        this.ajaxCall();
        console.log("Component did mount");
        
    }
    private renderPerson(){
        return(
            <>
            <input type="text" onChange={(event)=>this.setState({search:event.target.value})} />
            <div className="grid-container">
            {this.state.persons.filter(x=>x.name.includes(this.state.search)).map(this.RP)}

            </div>
            </>
        )
    }
    public render(){
        console.log("Rendering");
        return(
            
            <>            
            <div>{this.state.loading}</div>
            {this.state.loading==="Completed" && this.renderPerson()}
            </>
            

        )
    }
    private RP(person:IPerson, index:number){
        return(
        <div className="grid-item" key={index}>
        <img src={person.avatar}></img>
        <div>{person.email}</div>
        <div>{person.name}</div>
        </div>
        )
    }
};