import React from "react";
interface IState{
    loading:string;
    email:string;
    photo:string;
}

export default class ClassAjax extends React.Component<{}, IState>{
    constructor(props:{}){
        super(props);
        this.state={
            loading:"Not Started",
            email:"",
            photo:""
        }
    }
    private async ajaxCall(){
       const response=await fetch("https://reqres.in/api/users");
       if(response.ok){
            const json=await response.json();
           
            this.setState({email:json.data[0].email,photo:json.data[0].avatar,loading:"Completed"});
          
       }
    }
    public componentDidMount() {
        this.setState({loading:"Started"});
        this.ajaxCall();
        console.log("Component did mount");
        
    }
    public render(){
        console.log("Rendering");
        return(
            
            <>            
            <div>{this.state.loading}</div>
            {this.RP()};
            </>
            

        )
    }
    private RP(){
        return(
        <>
        <div>{this.state.email}</div>
        <img src={this.state.photo}></img>
        
        </>
        )
    }
};