import { Button } from '@mui/material'
import React from 'react'
import "./Login.css"
import { auth, provider } from './Firebase';
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer'

export default function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            }).catch(error => alert(error.message));
    };
    return (
        <div className='login'>
            <div className='login__logo'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png'
                    alt=''>
                </img>
                <img
                    className='login__tag'
                    src='https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-Meaning.jpg'
                    alt=''>
                </img>
            </div>
            <Button type='submit' onClick={signIn}>
                Log in
            </Button>
        </div>

    )
}
