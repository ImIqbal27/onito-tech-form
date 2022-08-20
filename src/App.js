import './App.css';
import { Formik , Form , Field   } from 'formik';
import * as yup from 'yup';
import CErrorMessage from './components/CErrorMessage';
import Star from './components/Star';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const validateSchema = yup.object({ 
  personalDetails: yup.object({
    name: yup.string().required("Name is required !"),
    age: yup.string().required("Age is required !"),
    sex: yup.string().required("Sex is required !"),
    
  }),

})

function App() {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    setFormData(formData)

}, [formData]);


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

     
        onSubmit={(values, { resetForm })=>{

          var newFormData = [...formData, values];
          setFormData(newFormData);
          toast.success("Successfully added !", {
            position: toast.POSITION.TOP_CENTER
          });
          resetForm();
          


          console.log(formData);
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
              <CErrorMessage  name="personalDetails.age" /> 

              <label>Sex<Star /></label>
              <Field as="select" name="personalDetails.sex">
                   <option value=""> Enter sex    </option>
                   <option value="male">Male</option>
                   <option value="female">Female</option>
                 </Field>   <br /> <br />
                 <CErrorMessage name="personalDetails.sex" />  
                 
              
              <label>Mobile </label>
              <Field type="number" name="personalDetails.mobile"/>             
              <label id="govt-issued-id">Govt Issued ID </label>
              <Field as="select" name="personalDetails.govtIssuedIdType" >
                   <option value=""> ID Type   </option>
                   <option value="Aadhaar Card">Aadhaar Card</option>
                   <option value="Driving License">Driving License</option>
                   <option value="CGHS/ECHS Card">CGHS/ECHS Card</option>
                 </Field>  
                 <Field type="number" name="personalDetails.govtIssuedId" placeholder="Enter Govt Id" id="govt-id"/>
                  <br />


{/* *************************** Contact Details ********************************************** */}
                <strong><u>Contact Details </u></strong><br /><br />
                <label>Guardian Details</label>
                <Field as="select" name="contactDetails.guardianLevel"  id="guardian-level">
                   <option value=""> Enter level  </option>
                   <option value="Level-1">Level-1</option>
                   <option value="Level-2">Level-2</option>
                   <option value="Level-3">Level-3</option>
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
                   <option value="Islam">Islam </option>
                   <option value="Hinduism ">Hinduism </option>
                   <option value="Christianity ">Christianity </option>
                   <option value="Buddhism ">Buddhism </option>
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
                   <option value="A-">A-</option>
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

      <br />  <br />
{/* ********************************** Table Data ********************************************* */}
<legend  className="text-center"> User Information  </legend>
<table   className="table table-striped table-bordered table-hover table-dark">
  
  <thead>
    <tr>
     <th>Sl</th>
     <th>Name</th>
     <th>Age</th>
     <th>Sex</th>
     <th>Mobile</th>
     <th>Govt Issued ID  Type</th>
     <th>Govt Issued ID </th>
     {/* **** */}
     <th>Guardian Level</th>
     <th>Guardian Name</th>
     <th>Guardian Email</th>
     <th>Guardian Contact Number</th>
     <th>Address</th>
     <th>State</th>
     <th>City</th>
     <th>Country</th>
     <th>Pincode</th>
     {/* ****** */}
     <th>Occupation</th>
     <th>Religion</th>
     <th>Marital Status</th>
     <th>Blood Group</th>
     <th>Nationality</th>

     {/* ***** */}
    </tr>

  </thead>
  {formData && formData?.map((data, index) =>


<tbody >
    <tr>
        <td>{index + 1}</td>
        {/* *********Personal details************* */}
        <td>{data.personalDetails.name}</td>
        <td>{data.personalDetails.age}</td>
        <td>{data.personalDetails.sex}</td>
        <td>{data.personalDetails.mobile}</td>
        <td>{data.personalDetails.govtIssuedIdType}</td>
        <td>{data.personalDetails.govtIssuedId}</td>
       {/* ***************Contact details************ */}

       <td>{data.contactDetails.guardianLevel}</td>
       <td>{data.contactDetails.guardianName}</td>
      <td>{data.contactDetails.email}</td>
      <td>{data.contactDetails.emergencyContactNumber}</td>
     
      
      {/* ************Address details******************* */}
      <td>{data.addressDetails.address}</td>
        <td>{data.addressDetails.state}</td>
        <td>{data.addressDetails.city}</td>
        <td>{data.addressDetails.country}</td>
        <td>{data.addressDetails.pincode}</td>
        {/* ***************Others details***************** */}
       
        <td>{data.otherDetails.occupation}</td>
        <td>{data.otherDetails.religion}</td>
        <td>{data.otherDetails.maritalStatus}</td>
        <td>{data.otherDetails.bloodGroup}</td>
        <td>{data.otherDetails.nationality}</td>
       
       
    </tr>
</tbody>


)}
 
</table>
<ToastContainer />
    </div>
  );
}

export default App;
