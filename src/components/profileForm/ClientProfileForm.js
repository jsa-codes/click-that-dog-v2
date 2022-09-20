import "./ClientProfileForm.css"

export const ClientProfileForm = () => {
    return (
    <>
    <form>
    <fieldset>
      <legend>PLEASE ENTER YOUR INFORMATION BELOW</legend>
       
 
    <p>
        <label>Full Name: <input name="fullName" /></label>
      </p>
    
    <p>
        <label>Email:<input type="email" name="email" /></label>
      </p>
    <p>
        <label>Phone Number:<input type="phoneNumber" name="phoneNumber" /></label>
      </p>
      <p>
        <label>Dog's Name:<input type="dogName" name="dogName" /></label>
      </p>
      <p>
        <label>Breed:<input type="breed" name="breed" /></label>
      </p>
      <p>
        Dog's Gender :
        <label><input type="radio" name="gender" value="male" /> Male</label>
        <label><input type="radio" name="gender" value="female" /> Female</label>
      </p>
      <p>
        <label>Dog's Age:<input type="age" name="age" /></label>
      </p>
 
      <p>
        <button type="submit">Submit</button>
      </p>
 
 
     </fieldset>
  </form>
    </>
)
}