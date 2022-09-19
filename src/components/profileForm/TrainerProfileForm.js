

export const TrainerProfileForm = () => {
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
        <button type="submit">Submit</button>
    </p>
 
 
     </fieldset>
  </form>
    </>
)
}