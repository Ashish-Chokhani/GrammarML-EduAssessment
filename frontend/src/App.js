// import React, { useState } from 'react';
// import axios from 'axios';
// import MainPage from './MainPage';
// import './App.css'; // Import the CSS file
// import { Navbar, Container, Form, Button, Row, Col } from 'react-bootstrap'

// function Header() {
//   return (
//       <header>
//           {/* <div className="Greddit">
//               <Navbar bg="primary" variant={"dark"} expand="lg" >
//                   <Navbar.Brand href="#" className="mx-3">IIIT</Navbar.Brand>
//               </Navbar>
//           </div> */}
//       </header>
//   )
// }

// const AuthenticationPage = () => {
//   const [password, setPassword] = useState('');
//   const [authenticated, setAuthenticated] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://0.0.0.0:8000/api/login', { password });
//       if (response.data.authenticated) {
//         setAuthenticated(true);
//         setError('');
//       } else {
//         setPassword('');
//         setError('Incorrect password');
//       }
//     } catch (error) {
//       setPassword('');
//       setError('An error occurred');
//     }
//   };

//   const handleLogout = () => {
//     setPassword('');
//     setAuthenticated(false); // Reset authentication state
//   };

//   return (
//     <div className="container" >
//       <div className="login-box">
//         {!authenticated ? (
//           <>
//             <Header />
//             <h2>Login</h2>
//             {error && <div className="error-message">{error}</div>}
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter password"
//               />
//               <br />
//               <br />
//               <button type="submit">Submit</button>
//             </form>
//           </>
//         ) : (
//           <MainPage onLogout={handleLogout} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default AuthenticationPage;


import React, { useState } from 'react';
import axios from 'axios';
import MainPage from './MainPage';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import './App.css';

const theme = createTheme();

const AuthenticationPage = () => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://0.0.0.0:8000/api/login', { password });
      if (response.data.authenticated) {
        setAuthenticated(true);
        setError('');
      } else {
        setPassword('');
        setError('Incorrect password');
      }
    } catch (error) {
      setPassword('');
      setError('An error occurred');
    }
  };

  const handleLogout = () => {
    setPassword('');
    setAuthenticated(false);
  };

  return (
    !authenticated ? (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#1976d2', color: '#fff' }}
              >
                Sign In
              </Button>

            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    ) : 
    (
      <MainPage onLogout={handleLogout} />
    )
  );
};

export default AuthenticationPage;