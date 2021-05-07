import { Button } from '@material-ui/core';
import Head from 'next/head';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert)
    }
    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
        
            <LoginContainer>
                <Logo 
                    src="https://i2.wp.com/pluspng.com/img-png/whatsapp-png-whatsapp-logo-png-1000.png"
                />
                <Button 
                    variant="outlined"
                    onClick={signIn}
                >
                Sing In with Google
                </Button>
            </LoginContainer>
        </Container>
    );
}

export default Login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;    
    background-color: white;
    border-radius: 7px;
    padding: 100px;
    align-items: center;
    box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 50px;
`;