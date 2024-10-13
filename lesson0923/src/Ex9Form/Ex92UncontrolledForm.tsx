import { useRef } from "react";

export default function Ex92UncontrolledForm() {
  const firstNameRef = useRef(null);

  /*  commented out
  function formSumitFormDataHandler(event) {
    event.preventDefault();
    console.log("Form submitted");

    // read the form data from the form fileds
    const formData = new FormData(event.target);
    // print the form values from the FormData object
    console.log('First Name:', formData.get('firstName'));
    console.log('Last Name:', formData.get('lastName'));
    console.log('Email:', formData.get('email'));
  }
*/

  function formSumitWithRefExampleHandler(event) {
    event.preventDefault(); // prevent the default form submission
    console.log("Form submitted");

    // read the form data from the form fileds
    console.log("First Name:", firstNameRef.current.value);
    console.log("Last Name:", event.target.lastName.value);
    console.log("Email:", event.target.email.value);
    console.log("Password:", event.target.pwd.value);
  }

  return (
    <div>
      <h2>Ex92UncontrolledForm</h2>
      <form onSubmit={formSumitWithRefExampleHandler}>
        <div>
          <input
            type="text"
            ref={firstNameRef}
            name="firstName"
            placeholder="First Name"
          />
        </div>
        <div>
          <input type="text" name="lastName" placeholder="Last Name" />
        </div>
        <div>
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div>
          <input type="text" name="pwd" placeholder="Password" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
