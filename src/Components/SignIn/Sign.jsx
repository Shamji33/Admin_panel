import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Copyright(props) {
  return React.createElement(
    Typography,
    Object.assign(
      { variant: 'body2', color: 'text.secondary', align: 'center' },
      props
    ),
    'Copyright © ',
    React.createElement(
      Link,
      { color: 'inherit', href: 'https://mui.com/' },
      'Your Website'
    ),
    ' ',
    new Date().getFullYear(),
    '.'
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignInUi() {

    const { isLogin, err } = useSelector(state => state.AuthReducer);
    const dispatch = useDispatch();

    const navigate = useNavigate();

  const handleSubmit = function (event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    dispatch(userLogin( data.get('email'),data.get('password')));
  };

  if(err){
    return(
        <Container>
            <Button onClick={()=>{navigate("/SignUp")}} variant='primary'>
                Sign Up
            </Button>
            <p className='text-center text-danger p-5'>{err}</p>
          
        </Container>
    )



  }
  else if(isLogin){

    navigate('/');

  }
  else{
    return React.createElement(
        ThemeProvider,
        { theme: defaultTheme },
        React.createElement(
          Container,
          { component: 'main', maxWidth: 'xs' },
          React.createElement(CssBaseline, null),
          React.createElement(
            Box,
            {
              sx: {
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              },
            },
            React.createElement(
              Avatar,
              { sx: { m: 1, bgcolor: 'secondary.main' } },
              React.createElement(LockOutlinedIcon, null)
            ),
            React.createElement(
              Typography,
              { component: 'h1', variant: 'h5' },
              'Sign in'
            ),
            React.createElement(
              Box,
              { component: 'form', onSubmit: handleSubmit, noValidate: true, sx: { mt: 1 } },
              React.createElement(TextField, {
                margin: 'normal',
                required: true,
                fullWidth: true,
                id: 'email',
                label: 'Email Address',
                name: 'email',
                autoComplete: 'email',
                autoFocus: true,
              }),
              React.createElement(TextField, {
                margin: 'normal',
                required: true,
                fullWidth: true,
                name: 'password',
                label: 'Password',
                type: 'password',
                id: 'password',
                autoComplete: 'current-password',
              }),
              React.createElement(
                FormControlLabel,
                {
                  control: React.createElement(Checkbox, { value: 'remember', color: 'primary' }),
                  label: 'Remember me',
                }
              ),
              React.createElement(
                Button,
                {
                  type: 'submit',
                  fullWidth: true,
                  variant: 'contained',
                  sx: { mt: 3, mb: 2 },
                },
                'Sign In'
              ),
              React.createElement(
                Grid,
                { container: true },
                React.createElement(
                  Grid,
                  { item: true, xs: true },
                  React.createElement(
                    Link,
                    { href: '#', variant: 'body2' },
                    'Forgot password?'
                  )
                ),
                React.createElement(
                  Grid,
                  { item: true },
                  React.createElement(
                    Link,
                    { href: '#', variant: 'body2' },
                    "Don't have an account? Sign Up"
                  )
                )
              )
            )
          ),
          React.createElement(Copyright, { sx: { mt: 8, mb: 4 } })
        )
      );
  }
}
