import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { typesLogin } from "../types/types";

export const actionRegisterAsync = (email, pass, name, phone ) => {
  return (dispatch) => {
    const auth = getAuth();
    console.log(auth)
    createUserWithEmailAndPassword(auth, email, pass)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName: name},{ phoneNumber: phone });
        dispatch(actionRegisterSync(name, email, pass, phone));
      })
      .catch((error) => {
        console.warn("error", error);
        // ..
      });
  };
};

export const actionRegisterSync = (name, email, pass, phone) => {
  console.log("Usuario Agregado ");
  return {
    type: typesLogin.register,
    payload: { name, email, pass, phone },
  };
};
