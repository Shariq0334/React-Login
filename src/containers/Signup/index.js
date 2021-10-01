import SearchAppBar from "../../components/Appbar/Appbar";
import BasicTextFields from "../../components/input";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MyCard from "../../components/card/card";
import { Formik } from 'formik';
import BasicButtons from "../../components/button/button";
import { fire,db, createUserWithEmailAndPassword,auth } from '../../config/firebase'
import {Link, useHistory }from "react-router-dom"
import { useState } from 'react'
import swal from 'sweetalert';
import { addDoc, collection } from "firebase/firestore"; 
import './style.css'

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("")
  const history = useHistory();
  const register =  () => {
    setLoading(true)
    createUserWithEmailAndPassword(auth,email, password)
        .then((res)  => {
          try {
            const docRef =  addDoc(collection(db, "users"), {
              fullName: fullName,
              email: email,
              password:password,
              contact:contact
            });
          
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
            console.log("Resolved", res)
            setLoading(false)
            swal("Good job!", "Your Account is created!", "success");
            history.push('/')
        })
        .catch((err) => {
            console.log("Error", err)
            setLoading(false)
            swal("Error!",err.code, "error");
        
        })
}

  return (
    <div>
      <SearchAppBar title="SIGNUP" />
      <Container className="mt-50"  >
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={6} md={12}>
            <MyCard>
            <div>
     <h1>SIGNUP FORM !</h1>
     <Formik
       initialValues={{ email: '', password: '' ,fullName: '', contact: ''}}
       validate={values => {
         const errors = {};
         if (!values.fullName){
          errors.fullName = 'Name is too short';
         }
        else if (!values.email) {
           errors.email = 'Required';
         } 
         else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         else if (!values.password){
          errors.password = 'Password is empty';
         }
         else if (!values.contact){
          errors.contact = 'Please put contact info';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           
              <div className="mt-20">      
           <BasicTextFields
            value={values.fullname} name="fullName" onChange={handleChange} onBlur={handleBlur} label="Full Name" type="text" />
               {errors.fullName && touched.fullName && errors.fullName}
               </div>
             
               <div className="mt-20">                
           <BasicTextFields
           label="Email"
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           </div>
           <div className="mt-20">
           <BasicTextFields
           label="Password"
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           </div>

           <div className="mt-20">
             <BasicTextFields 
             label="Contact"
              type="number"
              name="contact"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.contact} />
              {errors.contact && touched.contact && errors.contact}
             </div>
             <div className="mt-20" style={{ textAlign: 'center' }}>
                                <Link style={{textDecoration: 'none'}} to="/Login"><BasicButtons title="Already have a account ? " /></Link>
                            </div>
             <div className="mt-20">
           <BasicButtons onClick={register} title={loading ? "Loading..." : "SignUp"} type="submit" disabled={isSubmitting}/>
             </div>
          
         </form>
       )}
     </Formik>
   </div>
            {/* <h1 >Signup</h1>
                            <div  className="mt-20">
                                <BasicTextFields value={fullName} onChange={(e) => setFullName(e.target.value)} label="Full Name" type="text" />
                            </div>
                            <div className="mt-20">
                                <BasicTextFields value={email} onChange={(e) => setEmail(e.target.value)} label="Email" type="email" />
                            </div>   
                            <div className="mt-20">
                                <BasicTextFields value={password} onChange={(e) => setPassword(e.target.value)}  label="Password" type="password" />
                            </div> 
                            <div className="mt-20">
                                <BasicTextFields value={contact} onChange={(e) => setContact(e.target.value)}   label="Contact" type="number" />
                            </div> 
                            <div className="mt-20" style={{ textAlign: 'center' }}>
                                <Link style={{textDecoration: 'none'}} to="/Login"><BasicButtons title="Already have a account ? " /></Link>
                            </div>
                            <div className="mt-20">
                               <BasicButtons onClick={register} title={loading ? "Loading..." : "SignUp"}  />
                            </div>  */}
                  </MyCard>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Signup;
