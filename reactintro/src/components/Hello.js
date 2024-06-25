import React from "react";

const Hello = () => {
    // return(
    //     <div>
    //         <h1>
    //             Hii Shhiamaaa This a JSX component
    //         </h1>
    //     </div>
    // )   this is how the component is created using JSX

    return React.createElement('div' ,{id : 'nonJsxDiv', className: "dummyCLass"} , React.createElement('h1' , null , 'Now this is a Non JSX element'))
}


export default Hello