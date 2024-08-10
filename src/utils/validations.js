export const checkValidation = (email, password) => {
   const emailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
      email
   );
   const passwordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   // const fullNameValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)

   if (!emailValid) return "*Please enter valid Email address";
   if (!passwordValid) return "*Please enter valid Password";
   return null;
};
