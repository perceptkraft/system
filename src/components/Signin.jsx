import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignInBox from './SignInBox';

const defaultTheme = createTheme();

export default function Signin() {
  return (
    <div style={{ marginTop: "10%", backgroundColor: "#EEF2F6" }}>
      <ThemeProvider theme={defaultTheme}>
        <SignInBox />
      </ThemeProvider>
    </div>
  );
}