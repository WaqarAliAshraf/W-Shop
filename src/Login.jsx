import React, { useState } from 'react';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import banner2 from "./Asserts/images/banner-2.webp";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleLogin = () => {
    // Perform validation checks
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    // Update error messages
    setEmailError(isEmailValid ? '' : 'Invalid email format');
    setPasswordError(isPasswordValid ? '' : 'Password must be at least 6 characters');

    // If both fields are valid, proceed with login
    if (isEmailValid && isPasswordValid) {
      setLoading(true);

      // Simulate login delay
      setTimeout(() => {
        // Redirect to /landingpage
        navigate('/landingpage');
        setLoading(false);
      }, 2000);
    }
  };

  const validateEmail = (email) => {
    // Simple email validation using regex
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    // Password validation logic (e.g., minimum length)
    return password.length >= 6;
  };

  return (
    <section className='login'>
      <div className="container-fluid">
        <div className="row  text-center backgroung-color align-items-center">
          <div className="col-sm-12 col-lg-6 ">
            <Typography variant='h2' fontWeight="bold">W SHOP</Typography>
            <form style={{ visibility: loading ? 'hidden' : 'visible' }}>
              <TextField
                fullWidth
                className="email"
                id="outlined-basic"
                label="Email"
                type="email"
                variant="outlined"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
                sx={{
                  mt: 4,
                  '& .MuiInputLabel-root': {
                    color: '#fff', // Change color of the label
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#fff', // Change border color
                      borderWidth: '4px', // Make border bold
                    },
                    '&:hover fieldset': {
                      borderColor: '#fff', // Change border color on hover
                      borderWidth: '4px', // Make border bold on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#fff', // Change border color when focused
                      borderWidth: '4px', // Make border bold when focused
                    },
                    '& input': {
                      color: '#fff', // Change text color to white
                    },
                    '& input::placeholder': {
                      color: '#fff', // Change placeholder text color to white
                    },
                  },
                }}
              />

              <FormControl
                sx={{
                  mt: 4,
                  '& .MuiInputLabel-root': {
                    color: '#fff', // Change color of the label
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#fff', // Change border color
                      borderWidth: '4px', // Make border bold
                    },
                    '&:hover fieldset': {
                      borderColor: '#fff', // Change border color on hover
                      borderWidth: '4px', // Make border bold on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#fff', // Change border color when focused
                      borderWidth: '4px', // Make border bold when focused
                    },
                    '& input': {
                      color: '#fff', // Change text color to white
                    },
                  },
                  '& .MuiIconButton-root': {
                    color: '#fff', // Change color of the icon
                  },
                }}
                fullWidth
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!passwordError}
                  helperText={passwordError}
                />
              </FormControl>
              <Button
                fullWidth
                variant="outlined"
                type='button'
                onClick={handleLogin}
                sx={{
                  mt: 4,
                  pt: 2,
                  pb: 2,
                  color: '#fff', // Change text color to white
                  borderColor: '#fff', // Change border color to white
                  borderWidth: '4px',
                  '&:hover': {
                    color: '#fff', // Change text color on hover
                    backgroundColor: '#63BAB8', // Change background color on hover
                    borderColor: '#63BAB8', // Change border color on hover
                    borderWidth: '4px'
                  },
                }}
              >
                Login
              </Button>
            </form>
            {loading && (
              <div className="d-flex justify-content-center">
                <div class="spinner-grow" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
          </div>
          <div className="col-6 d-none d-lg-flex  for-p">
            {/* <img src={banner2} alt="" className='img-fluid' /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
