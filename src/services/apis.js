const BASE_URL = process.env.REACT_APP_BASE_URL;

// AUTH ENDPOINTS

export const endpoints = {
    
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}

// src/services/apis.js

export const feedbackEndpoint = {
  SUBMIT_FEEDBACK: BASE_URL +"/feedback/submit-feedback",
  ALL_FEEDBACK: BASE_URL+ "/feedback/all-feedback",
};
