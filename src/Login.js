import React from 'react';
import "./Login.css"
import img1 from "./Images/tourist-guide2.png";
import img2 from "./Images/effiel-tower3.png";
import img3 from "./Images/pisa2.png";
import img4 from "./Images/liberty.png";
import { Button } from '@material-ui/core';
import {auth, provider} from './Firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {

    const [state, dispatch] = useStateValue();
  
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((results) => {
            dispatch ({
                type: actionTypes.SET_USER,
                user:results.user,
            })
        })
        .catch((error) => alert(error.message));

    };

    return (
        <div>
            <img className = "effielTower" src = {img2} />
   
            <div>
            <img className = "pisaTower" src = {img3} />

            <div>
            <img className = "liberty" src = {img4} />
           
           
           

        <div className = 'card'>
            <div className = 'container'>
                <img className = "logoImg" src = {img1}/>
            <p className = "loginTitle">Tourist Guide</p>
           
            <Button style = {{margin: '1% 10%', width: '80%', backgroundColor: 'black', height: '6vh'}}
            type = 'submit'
            onClick = {signIn}
            >
             <span className = "signIn">Sign In</span>
            </Button>
             <p className = "info">This app is your Virtual tour guide and your can find your favorite places around the world here</p>
             </div>
            </div>

        </div>
        </div>
        </div>
        
    )
}

export default Login
