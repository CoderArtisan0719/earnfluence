import { ValidatinProps, FormDataProps } from "@/types";

export const validateEmail = (email: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const validateDob = (dob: string) => /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/.test(dob);

export const validateUsername = (username: string) => /^[a-zA-Z0-9_\-\.]{3,28}$/.test(username);

export const validatePhone = (phone: string) => phone.length > 0;

export const validateCountry = (country: string) => country.length > 0;

export const validateFollow = (follow: string) => follow.length > 0;

export const validateFollowUsername = (followUsername: string) => followUsername.length > 0;

export const validateFollowRange = (followRange: string) => followRange.length > 0;

export  const handleValidation = (formData: FormDataProps): ValidatinProps => {
  let tempErrors: ValidatinProps = {};
  if (!validateEmail(formData.email)) tempErrors.email = 'Invalid email address';
  if (!validateDob(formData.dob)) tempErrors.dob = 'Date format should be MM/DD/YYYY';
  if (!validateUsername(formData.username)) tempErrors.username = 'Username can only contain letters, numbers, periods, underscores, and hyphens';
  if (!validatePhone(formData.phone)) tempErrors.phone = 'Phone number is required';
  if (!validateCountry(formData.country)) tempErrors.country = 'Phone number is required';
  if (!validateFollow(formData.follow)) tempErrors.follow = 'Required';
  if (!validateFollowUsername(formData.followUsername)) tempErrors.followUsername = 'Required';
  if (!validateFollowRange(formData.followRange)) tempErrors.followRange = 'Required';
  if (!formData.fullname) tempErrors.fullname = 'Legal name is required';
  // setErrors(tempErrors);
  return tempErrors;
};
