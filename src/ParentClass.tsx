import React from "react";
import ChildAdditon from "./ChildAddition";
import ChildIncrement from "./ChildIncrement";
import ClassAjax from "./ClassAjax";
import ClassSerch from "./ClassSerch";




export default class ParentClass extends React.Component<{},{}>{
    constructor(props: {}){
        super(props);
    }
    public render(): JSX.Element {
      
        return(
        <>
        {/* <div>Learning Class based Component</div>
        <ChildAdditon a={10} b={12} />
        <ChildIncrement init={0}/>
        <ClassAjax/> */}
        <ClassSerch/>
        </>
        );
    }
}