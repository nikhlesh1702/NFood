import { Formik, useFormik } from "formik";

const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }
  
    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };

const Signup =() =>{

    const formik = useFormik(
        {
            initialValues:{
                firstName: '',
                lastName:  '',
                email: '',
            },

            onSubmit: values=>{
                alert(JSON.stringify(values, null, 2));
            },

        }
    );

    return(
        <>
        <form className="Signup" onSubmit={formik.handleSubmit}>
            
            <div>
            <div className="Field">
                <label htmlFor="firstName">FirstName</label>

                <input type = "text"
                   id = "firstName"
                   name ="firstName"
                   onChange={formik.handleChange}
                   value={formik.values.firstName}
                />
                
            </div>
            {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
            <div className="Field">
                <label htmlFor="lastName">lastName</label>
                <input type = "text"
                   id = "lastName"
                   name ="lastName"
                   onChange={formik.handleChange}
                   value={formik.values.lastName}
                />  
                
            </div>
            {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
            <div className="Field">
                <label htmlFor="email">Email Address</label>
                <input type="email"
                   id="email"
                   name="email"
                   onChange={formik.handleChange}
                   value={formik.values.email}
                />
                
            </div>
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <button type= "submit" className="Submit">Submit</button>
            </div>
        
        </form>
        </>

    )
}

export default Signup;
