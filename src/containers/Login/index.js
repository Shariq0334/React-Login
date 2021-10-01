import SearchAppBar from "../../components/Appbar/Appbar";
import BasicTextFields from "../../components/input";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MyCard from "../../components/card/card";
import BasicButtons from "../../components/button/button";
import { signInWithEmailAndPassword ,auth } from '../../config/firebase'
import {Link ,useHistory }from "react-router-dom"
import { useState } from 'react'
import swal from 'sweetalert';
import './style.css'
import { Formik } from 'formik';


function LOGIN() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const checkUser = () => {
      setLoading(true)
      signInWithEmailAndPassword(auth, email, password)
         .then((res) => {
            setLoading(false)
            history.push("/")
            swal("Good job!", "You're Logged In", "success");
         })
         .catch((err) => {
            setLoading(false)
            swal("Eroor!",err.code, "error");
         })
   }
    
  
    return (
      <div>
        <SearchAppBar title="LOGIN" />
        <Container className="mt-50"  >
          <Grid container justifyContent="center">
            <Grid item xs={12} lg={6} md={12}>
              <MyCard   >
              <h1 >LOGIN</h1>
                              <div className="mt-20">
                                  <BasicTextFields value={email} onChange={(e) => setEmail(e.target.value)} label="Email" type="email" />
                              </div>   
                              <div className="mt-20">
                                  <BasicTextFields value={password} onChange={(e) => setPassword(e.target.value)}  label="Password" type="password" />
                              </div> 
                              <div className="mt-20" style={{ textAlign: 'center' }}>
                                  <Link style={{textDecoration: 'none'}} to="/"><BasicButtons title="Go To SignUp ? " /></Link>
                              </div>
                              <div className="mt-20">
                                 <BasicButtons onClick={checkUser} title={loading ? "Loading...." : "Login"  }  />
                              </div> 
             
              </MyCard>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
  
  export default LOGIN;