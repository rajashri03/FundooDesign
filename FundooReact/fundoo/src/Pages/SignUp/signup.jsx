import React  from "react";
import './signup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Signup()
{
    return(
        <div class="signup">
            <img src="img/Google.png" alt="google"/>
            <h2>Sign In</h2>
            <span class="acc">Use your Google Account</span>
            <TextField id="outlined-basic" label="Email or Phone"  variant="outlined" />
            <br></br>
            <TextField id="outlined-basic" label="Password"  variant="outlined" />
             <a href="" class="forget">Forgot Email?</a>
             <p>Not your computer? Use Guest mode to sign in privately. <a href="">Learn More</a></p>
             <div class="signupfooter">
                 <a href="">Create Account</a>
                 <Button variant="contained">Next</Button>
             </div>
        </div>

    )
}
export default Signup