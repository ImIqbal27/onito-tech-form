import './App.css';
import { Formik , Form , Field   } from 'formik';
import * as yup from 'yup';
import CErrorMessage from './components/CErrorMessage';
import Star from './components/Star';


const validateSchema = yup.object({ 
  personalDetails: yup.object({
    name: yup.string().required("Name is required !"),
    age: yup.string().required("Age is required !"),
    sex: yup.string().required("Sex is required !"),
    
  }),

})

function App() {
 

  return (
    <div>
      <Formik 
       validationSchema={validateSchema}
      initialValues={{

        personalDetails:{
          name: "",
          age: "",
          sex:"",
          mobile:"",
          govtIssuedIdType:"",
          govtIssuedId:"",
        } ,
        contactDetails:{
          guardianLevel:"",
          guardianName:"",
          email:"",
          emergencyContactNumber:"",
        },
        addressDetails:{
          address:"",
          state:"",
          city:"",
          country:"",
          pincode:"",
        } ,
        otherDetails:{
          occupation:"",
          religion:"",
          maritalStatus:"",
          bloodGroup:"",
          nationality:"" ,
      },

      }}  

     
        onSubmit={(values)=>{

          
           console.log(values);
           }}>

          {(values)=>(


              <Form>
{/* ***************************Personal Details**************************************** */}
        <strong><u>Personal Details </u></strong><br /><br />
              <label>Name<Star /></label>
              <Field type="text" name="personalDetails.name" id="name" placeholder="Enter Name" />
              <CErrorMessage name="personalDetails.name"  />
             
              <label>Date of Birth or Age<Star /></label>
              <Field type="text" name="personalDetails.age" placeholder="DD/MM/YYYY  or Age in Years" id="ageField"/>  
              {/* <CErrorMessage  name="personalDetails.age" />  */}

              <label>Sex<Star /></label>
              <Field as="select" name="personalDetails.sex">
                   <option value=""> Enter sex    </option>
                   <option value="male">Male</option>
                   <option value="female">Female</option>
                 </Field>   <br /> <br />
                 {/* <CErrorMessage name="personalDetails.sex" />   */}
                 
              
              <label>Mobile </label>
              <Field type="number" name="personalDetails.mobile"/>             
              <label id="govt-issued-id">Govt Issued ID </label>
              <Field as="select" name="personalDetails.govtIssuedIdType" >
                   <option value=""> ID Type   </option>
                   <option value="id-1">Id -1</option>
                   <option value="id-2">Id -2</option>
                 </Field>  
                 <Field type="number" name="personalDetails.govtIssuedId" placeholder="Enter Govt Id" id="govt-id"/>
                  <br />


{/* *************************** Contact Details ********************************************** */}
                <strong><u>Contact Details </u></strong><br /><br />
                <label>Guardian </label>
                <Field as="select" name="contactDetails.guardianLevel"  id="guardian-level">
                   <option value=""> Enter level  </option>
                   <option value="level-1">level-1</option>
                   <option value="level-2">level-2</option>
                 </Field>  
                 <Field type="text" name="contactDetails.guardianName" placeholder="Enter Guardian Name" id="guardian-level-name"/>

               
                
              {/* ***************************** */}
              <label id="guardian-email">Email  </label>
              <Field type="email" name="contactDetails.email"  placeholder="Enter Email"/>
            
               
              <label id="emergency-contact-number-label">Emergency Contact  Number  </label>
              <Field type="text" name="contactDetails.emergencyContactNumber" placeholder="Enter Emergency Number" id="emergencyContactNumber"/>
             

              <br /> <br />


{/* *****************************Address Details**************************************** */}
                <strong><u>Address Details </u></strong><br /> <br />
                <label>Address</label>
                <Field type="text" name="addressDetails.address" id="address" placeholder="Enter address"/>

                <label>State </label>
              <Field as="select" name="addressDetails.state" id="state">
                   <option value=""> Enter state  </option>
                   <option value="State-1">State-1</option>
                   <option value="State-2">State-2</option>
                   <option value="State-3">State-3</option>
                 </Field>  
                 
                
                <label>City </label>
               <Field as="select" name="addressDetails.city"  id="city-field">
                   <option value=""> Enter city/town/village  </option>
                   <option value="city-1">City-1</option>
                   <option value="city-2">City-2</option>
                   <option value="city-3">City-3</option>
                 </Field>  

                 <br /><br />

               <label>Country </label>
              <Field as="select" name="addressDetails.country">
                   <option value=""> Enter country  </option>
                   <option value="India">India</option>
                   <option value="Bangladesh">Bangladesh</option>
                   <option value="America">America</option>
                   <option value="UK">UK</option>
                   <option value="Russia">Russia</option>
                 </Field>  

             
                 <label id="pincode">Pincode </label>
                 <Field type="text" name="addressDetails.pincode" placeholder="Enter pincode"/>  <br /> <br />




{/* ****************************Others Details************************************ */}
                 <strong><u>Others Details </u></strong><br /><br />
                 <label>Occupation </label>
                 <Field type="text" name="otherDetails.occupation" id="occupation" placeholder="Enter occupation"/>  

                 <label htmlFor="">Religion</label>
                 <Field as="select" name="otherDetails.religion" id="religion">
                   <option value=""> Enter religion  </option>
                   <option value="religion-1">Religion-1</option>
                   <option value="religion-2">Religion-2</option>
                   <option value="religion-3">Religion-3</option>
                   <option value="religion-4">Religion-4</option>
                 </Field>  


                 <label htmlFor="">Marital Status</label>
                 <Field as="select" name="otherDetails.maritalStatus" id="marital-status-field">
                   <option value=""> Enter Marital Status  </option>
                   <option value="bachelor">Bachelor</option>
                   <option value="married">Married</option>
                 </Field> 


                 <label htmlFor="">Blood Group</label>
                 <Field as="select" name="otherDetails.bloodGroup" id="bloodGroup">
                   <option value=""> Group  </option>
                   <option value="A+">A+</option>
                   <option value="A-">A</option>
                   <option value="AB+">AB+</option>
                   <option value="AB-">AB-</option>
                   <option value="O+">O+</option>
                   <option value="O-">O-</option>
                 </Field>  <br /> <br />


                 <label>Nationality</label>
                 <Field as="select" name="otherDetails.nationality" placeholder="Nationality" id="nationality">
                  
                   <option value="India">India</option>
                   <option value="Bangladesh">Bangladesh</option>
                   <option value="America">America</option>
                   <option value="UK">UK</option>
                   <option value="Russia">Russia</option>
                 </Field>  
                 <br />
  
        
             <div id="button-submit-cencel">
             <button id="cencel">CENCEL<br />(<u>ESC</u>)</button>
              <button type='submit'  id="submit">SUBMIT <br />(S)</button>
             </div>
            
              </Form>
          )}
      </Formik>



    </div>
  );
}

export default App;
