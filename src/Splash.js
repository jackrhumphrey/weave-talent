import * as React from "react";

import { Form, Input, Button } from "semantic-ui-react";

import { withRouter, useHistory } from "react-router-dom";

function Splash() {

    const [form, setForm] = React.useState(false);

    const history = useHistory();

    return (
        <div className="container">
            <div className="splash">
                <div className="splashInner">
                    <div className="splashText">Weave Talent</div>
                    <div className="splashLower">
                        {!form ?
                            <div className="splashButtons">
                                <div>
                                    <Button size='huge' onClick={() => setForm(true)} color="green" style={{ borderRadius: 0 }}>Jobseekers</Button>
                                </div>
                                <div>
                                    <Button size='huge' onClick={() => setForm(true)} color="black" style={{ borderRadius: 0 }}>Employers</Button>
                                </div>
                            </div>
                            : <>


<Form style={{width: "400px",margin:"auto"}}>
    <Form.Field>
      <label>Email</label>
      <input />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input  type='password' />
    </Form.Field>
    <div style={{textAlign: "center"}}><Button onClick={() =>     history.push("/Resources")} color="green" style={{ borderRadius: 0 }}>Login</Button> <Button onClick={() =>     history.push("/Resources")} color="black" style={{ borderRadius: 0 }}>Sign up</Button></div>
</Form>
                            </>}
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="content">
                </div>
            </div>
        </div>
    )
}

export default withRouter(Splash);
