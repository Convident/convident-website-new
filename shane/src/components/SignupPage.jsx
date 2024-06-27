import React from "react";
import Header from "./header/Header";
import { useForm } from "react-hook-form";


const SignupPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data, e) => {
        e.target.reset();
        console.log("Message submited: " + JSON.stringify(data));
      };

    return(
        <div style={{ backgroundColor: "white"}}> 
            <Header />
            <div style={{marginTop: "100px", padding: "50px", font: "Poppins", fontSize: "50px", color: "black", display: "flex", justifyContent: "center", alignItems: "center"}}>
                Join our Beta-Testing Program!
                </div>
                <div className="job" style={{textAlign: "center", marginTop: "10px", marginLeft: "300px", marginRight: "300px",  font: "Poppins", display: "flex", justifyContent: "center", alignItems: "center"}}>
                You’ll have exclusive first access to our app when we have a
demo available for testing! It won’t cost you anything until we 
launch our demo! And you will have a discount for the product if you are one of our loyal users!
<br></br>
<br></br>
Please submit your email in the textbox below, and accept
the confirmation email to get access to our demo!
                     </div>
                     <>        
                     <form className="contact_form" onSubmit={handleSubmit(onSubmit)} style={{marginTop: "30px"}}>
        <div className="first">
          <ul>
            

            <li>
              <input
                {...register(
                  "email",
                  {
                    required: "Email is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  },
                  { required: true }
                )}
                type="email"
                placeholder="Email"
              />
              {errors.email && <span role="alert">{errors.email.message}</span>}
            </li>
            {/* End email name field */}

          </ul>
        </div>

        <div className="tokyo_tm_button" style={{marginTop: "30px"}}>
          <button type="submit" className="white-fill-bg fill-black" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            Send Message
          </button>
        </div>
        {/* End tokyo_tm_button */}
      </form>
      {/* End contact */}
    </>



                     </div>
                    
    );
};

export default SignupPage;
