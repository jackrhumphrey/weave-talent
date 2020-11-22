import * as React from "react";

import { Input, List } from "semantic-ui-react";

import Header from "./Header";

function Resources() {
    return (
        <>
            <Header />

            <div className="content">

            <div className="subheader" style={{fontSize:"2em"}}>Resources</div>

            <br></br>

            <div className="subheader">Voluntary work</div>

            <List>
    <List.Item><a href="https://volunteerwellington.nz">Volunteer Wellington</a></List.Item>

    <List.Item><a href="https://www.breastcancerfoundation.org.nz/how-you-can-help/get-involved/volunteer">Breast Cancer Foundation</a></List.Item>

</List>
              

            <div className="subheader">Free courses</div>

            <List>
    <List.Item><a href="https://www.careers.govt.nz/work-connect">Work Connect</a></List.Item>

    <List.Item><a href="https://www.wecc.org.nz/services-and-resources/employment-support">Skilled Newcomers Programme</a></List.Item>

    <List.Item><a href="https://summeroftech.co.nz/">Summer Of Tech</a></List.Item>

    <List.Item><a href="https://www.wgtn.ac.nz/lals/centres-and-institutes/eli/skilled-migrant-programme">Skilled Migrant program</a></List.Item>


</List>

</div>


        </>
    )
}

export default Resources;
