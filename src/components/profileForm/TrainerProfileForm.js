

export const TrainerProfileForm = () => {
    return (
    <>
    <h3>This page should only show the form for the trainer to create their profile.</h3>
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
        <button type="submit">Submit</button>
    </p>
 
 
     </fieldset>
  </form>
    </>
)
}