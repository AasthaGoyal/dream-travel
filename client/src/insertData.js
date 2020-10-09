import React from "react";
import { render } from "@testing-library/react";

function insertData() {

    
        return(
            <div>
                <h1>Into to Node and MongoDB</h1>
                <form method="post" action="/addname">
                <label>Enter Your Name</label><br/>
                <input type="text" name="firstName" placeholder="Enter first name..." required/>
                <input type="text" name="lastName" placeholder="Enter last name..." required/>
                <input type="submit" value="Add Name"/>
                </form>
            </div>
        );
    
}

export default insertData;