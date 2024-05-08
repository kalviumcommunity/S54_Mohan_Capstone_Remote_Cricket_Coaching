export const createCookie = (uid, email) => {
  const loginTime = new Date(); // Record the login time
  const expirationTime = new Date(loginTime.getTime() + 6 * 60 * 60 * 1000); // 6 hours from login time
  
  // Set uid and email as separate cookies
  document.cookie = `uid=${uid}; expires=${expirationTime.toUTCString()}; path=/`;
  document.cookie = `email=${email}; expires=${expirationTime.toUTCString()}; path=/`;
};


export const deleteCookie = () => {
  document.cookie = 'uid=;  expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};

