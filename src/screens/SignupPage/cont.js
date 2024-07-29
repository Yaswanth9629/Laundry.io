export const validatePhone = phone => {
  if(/[a-zA-Z]/.test(phone)) {
    return false;
  }else{
    if(/[^\d\-+]/.test(phone)) {
      return true;
    }else{
      return true;
    }
    
  }
};
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};