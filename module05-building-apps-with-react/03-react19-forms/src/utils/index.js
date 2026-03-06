export const validate = ({ name, email, message }) => {
  const newErrors = {};
  if (!name.trim()) newErrors.name = 'Name is required.';
  if (!email.trim()) {
    newErrors.email = 'Email is required.';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.email = 'Invalid email format.';
  }
  if (!message.trim()) newErrors.message = 'Message is required.';
  return newErrors;

  // newErrors= {
  //   name: 'Name is required.',
  //   email: 'Invalid email format.'
  // }
};

export const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
