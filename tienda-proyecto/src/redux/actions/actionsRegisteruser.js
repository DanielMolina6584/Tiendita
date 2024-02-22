import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { typesLogin } from "../types/types";

export const actionRegisterAsync = (email, pass, firstName, lastName ) => {
  return (dispatch) => {
    const auth = getAuth();
    console.log(auth)
    createUserWithEmailAndPassword(auth, email, pass)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName: firstName});
        dispatch(actionRegisterSync(firstName, email, pass, lastName));
      })
      .catch((error) => {
        console.warn("error", error);
        // ..
      });
  };
};

export const actionRegisterSync = (firstName, email, pass, lastName) => {
  console.log("Usuario Agregado ");
  return {
    type: typesLogin.register,
    payload: { firstName, email, pass, lastName },
  };
};
