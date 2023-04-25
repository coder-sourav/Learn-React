import React from "react";

interface IProps{
    a:number;
    b:number;
}

export default class ChildAdditon extends React.Component<IProps,{}>{
    constructor(props: IProps){
        super(props);
    }
    public render(): JSX.Element {
        const sum= this.props.a+this.props.b;
        return(
        <><div>Child Component</div>
        <div>{"Additio is" + sum }</div></>
        );
    }
}