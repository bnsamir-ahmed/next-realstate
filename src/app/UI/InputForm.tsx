// "use client";
import React, { useState } from "react";
import Eye from "../svg/Eye";
import Style from "./form.module.css";
interface Inputs {
  labels: string;
  holder: string;
  type: string;
  name: string;
  id:string
  value?:string
  onChange?:React.ChangeEventHandler<HTMLInputElement>
}
const InputForm: React.FC<Inputs> = (props) => {
  // const [password, setPassword] = useState("");
  return (
    <>
    {/* {console.log(password)} */}
      <div className={`flex flex-col relative mb-2 form-group `}>
        <label htmlFor="password_input" className="my-2 font-medium">
          {props.labels}
        </label>
        <input
          id={props.id}
          className={`${Style.inputsForm}`}
          //   className="inputs_login form-control input_password text-pass"
          type={props.type}
          name={props.name}
          placeholder={props.holder}
          required
          value={props.value}
          onChange={props.onChange}
        />
        <span className={Style.eye_btn}>
          <Eye />
        </span>
        {/* <div className="invalid-feedback">Password is required</div> */}
      </div>
    </>
  );
};
export default InputForm;
