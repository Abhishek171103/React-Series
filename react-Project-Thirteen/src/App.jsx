import './App.css'
import { useForm } from 'react-hook-form';                  // react-hook-form library se useForm hook import karna

function App() {

  const {                               // useForm hook ke dwara form handling ke liye functions aur state variables milte hain
    register,                          // input fields ko register karne ke liye
    handleSubmit,                      // form submit hone par onSubmit function call karne ke liye
    watch,                             // form fields ki value ko track karne ke liye
    formState: { errors, isSubmitting },  // form state ke errors aur isSubmitting state ko access karne ke liye  
  } = useForm();                           // useForm hook call karna

  // onSubmit function jo form submit hone par call hota hai

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000));   // 5 seconds ka delay
    console.log("Submitting the form", data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>    {/* handleSubmit function ke dwara form submit karna hota hai */}
        <div>
          {/* register function ke dwara input field ko register karna hota hai */}
          <label htmlFor="First_Name">First Name</label>
          <input type="text" className={errors.First_Name ? "input-error" : ""}
                            {...register("First_Name", 
                                      { required: true, 
                                        minLength: {value: 4, message: "Minimum 4 characters required"},
                                        maxLength: {value: 20, message: "Maximum 20 characters allowed"}
                                      })} />
          {errors.First_Name && <p className="error-message">{errors.First_Name.message}</p>}  {/* Agar First_Name field mein error hai to error message show karna */}
          <br /><br />

          <label htmlFor="Middle_Name">Middle Name</label>
          <input type="text" {...register("Middle_Name")} />
          <br /><br />

          <label htmlFor="Last_Name">Last Name</label>
          <input type="text" {...register("Last_Name", { required: true })} />
          <br /><br />

          <label htmlFor="Password">Password</label>
          <input type="password" className={errors.Password ? "input-error" : ""} 
                                  {...register("Password", 
                                  { required: true,
                                    minLength: { value: 8, message: "Minimum 8 characters required" },
                                    pattern: { value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/, message: "Password must contain at least one number, one lowercase letter, one uppercase letter, and one special character" }
                                  })} />
          {errors.Password && <p className="error-message">{errors.Password.message}</p>} {/* Agar Password field mein error hai to error message show karna */}
          <br /><br />

          <input type="submit" value="Submit" disabled={isSubmitting}     
                                              value={isSubmitting ? "Submitting..." : "Submit"} />  {/* Button ka text bhi change kar dena */} {/* Form submit hone par button disable kar dena */}
        </div>
      </form>
    </>
  )
}

export default App
