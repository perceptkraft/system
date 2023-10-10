import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        email: data.get('email'),
        password: data.get('password'),
    });
};

const SignInBox = () => {

    return (
        <div style={{ backgroundColor: 'white' }}>
            <Container component="main" maxWidth="xs" style={{ border: '1px solid white', borderRadius: '25px' }}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5" style={{ fontWeight: 'bolder' }}>
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            color='secondary'
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container marginBottom="50px" marginTop="30px">
                            <Grid item xs={6}>
                                <Button href="#" variant="body2" color='secondary'>
                                    Forgot password?
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button href="#" variant="body2">
                                    {"Sign Up! Here"}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </div>
    )
}

export default SignInBox
