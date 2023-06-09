import React from "react";

interface IProps{
   init:number;
}
interface IState{
    value:number;
}

export default class ChildAdditon extends React.Component<IProps,IState>{
    constructor(props: IProps){
        super(props);
        this.state={
            value:props.init
        }
    }
    public render(): JSX.Element {
        return(
       <>
       <div>Child Increment</div>
       <div>{this.state.value}</div>
       <button onClick={()=>this.increment()}>Increment</button>
       </>
        );
    }
    private increment():void{
        const plus1=this.state.value+1;
        this.setState({value:plus1});
    }
}