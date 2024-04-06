import * as Yup from "yup";

const onlyNumbersRegx = /^-?[0-9]*$/;
const onlyCharactersRegx = /^[aA-zZ\s]+$/;

export const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email address")
    .required("Email field is required"),
  password: Yup.string()
    .trim("Please don't enter a whitespace character")
    .strict(true)
    .min(8, "Password should be at least 8 characters long")
    .required("Password is Required"),
});

export const forgotValidation = Yup.object().shape({
  email: Yup.string().email("Email field is required").required(),
});

export const changePasswordValidation = Yup.object().shape({
  new_password: Yup.string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters."),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("new_password"), null], "Confirm Password must match")
    .trim("Please don't enter a whitespace character")
    .strict(true)
    .min(8, "Confirm Password should be at least 8 characters long")
    .required("Confirm Password is Required"),
});

export const addOfficerValidation = Yup.object().shape({
  first_name: Yup.string().required("First Name is  required field"),
  last_name: Yup.string().required("Last Name is  required field"),
  email: Yup.string()
    .email("Email field is required")
    .required("email field is required"),
  dob: Yup.string().required("Date of Birth is required"),
  location: Yup.string().required("Location is  required field"),
  rank: Yup.string().required("Rank is  required field"),
  // agency: Yup.string().required("Agency is required"),
  division: Yup.string().required("Division is required"),
  unit: Yup.string().required("Unit is  required"),
  badge_no: Yup.string()
    .matches(onlyNumbersRegx, "Only Number allowed")
    .min(7, "Badge Number Must 7 Digit")
    .required("Badge Number is Required"),
  temp_password: Yup.string().required("Temporary password is required"),
  phone_no: Yup.string()
    .matches(onlyNumbersRegx, "Phone Number must be a Number")
    .min(7, "Phone Number should be at least 7 characters long")
    .max(15, "Phone Number must not be more than 15 characters")
    .required("Phone Number is Required"),
});

export const createValidation = Yup.object().shape({
  title: Yup.string().required("Title field is required"),
  url: Yup.string().url("Enter valid URL"),
  start_date: Yup.string().required("Start Date is required"),
  end_date: Yup.string().required("End Date is required"),
  description: Yup.string()
    .max(800, "Maximum 800 characters allowed")
    .min(100, "Minimu 100 characters allowed")
    .required("Discription is required"),
  attech_files: Yup.array().min(1, "Upload image/video/pdf is required"),
});

export const createSubAdminValidation = Yup.object().shape({
  sub_admin_name: Yup.string().required("Name field is required"),
  email: Yup.string()
    .email("Enter a valid Email")
    .required("Email field is required"),
  phone_no: Yup.string()
    .matches(onlyNumbersRegx, "Phone Number must be a Number")
    .min(10, "Phone Number should be at least 10 characters long")
    .max(15, "Phone Number must not be more than 15 characters")
    .required("Phone Number is Required"),
  location: Yup.string().required("Location is required"),
  temporary_password: Yup.string().required("Temporary password is required"),
});

export const addReminderValidation = Yup.object().shape({
  title: Yup.string().required("Title field is required!"),
  url: Yup.string().url("Enter valid URL").required("URL field is required!"),
  start_date: Yup.string().required("Start date field is required!"),
  end_date: Yup.string().required("End date field is required!"),
  attech_files: Yup.array().min(1, "Upload image/video/pdf is required"),
  discription: Yup.string()
    .max(800, "Maximum 800 characters allowed")
    .min(100, "Minimu 100 characters allowed")
    .required("Discription is required"),
});

export const profileValidation = Yup.object().shape({
  juri_name: Yup.string()
    .required("Agency Name is required")
    .matches(
      onlyCharactersRegx,
      "Agency name only contains characters numbers are not allowed"
    ),
  location: Yup.string().required("Address is required"),
  precinct_number: Yup.string()
    .required("Precinct number is required")
    .matches(onlyNumbersRegx, "That doesn't look like a Percint number"),
  phone_no: Yup.string()
    .matches(onlyNumbersRegx, "Phone Number must be a Number")
    .min(7, "Phone should be at least 7 characters long")
    .max(15, "Phone must not be more than 15 characters")
    .required("Phone is Required"),
  no_of_officer: Yup.string()
    .required("Number of Officer is required")
    .matches(onlyNumbersRegx, "That doesn't look like a Percint number"),
  contact_person: Yup.string().required("contact person is required"),
  deputy_general: Yup.array()
    .of(
      Yup.string()
        .matches(onlyCharactersRegx, "Please enter a valid Name")
        .min(3, "Name should be at least 3 characters long")
        .max(20, "Name must not be more than 20 characters")
        .required("Name is Required")
    )
    .min(1, "At least one name is required"),
});
