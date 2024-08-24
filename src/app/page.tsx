"use client";
import Form from "./UI/Form";
import Style from "./form.module.css";
import Paragraph from "./UI/Paragraph";
import Class from "./UI/paragraph.module.css";
import InputForm from "./UI/InputForm";
import { useState } from "react";
import ButtonForm from "./UI/ButtonForm";
import btn from "./UI/button.module.css";

export default function Home() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const handlePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (password === passwordConfirm ) {
      console.log("password is correct");
    } else {
      console.log("password is not correct");
    }
    console.log("lll");
  };
  return (
    <main className="">
      <Form>
        <div className="text-center mb-20">
          <Paragraph
            title="Create Your Password"
            className={`${Class.textPrim_XlBold} fs-33`}
          />
        </div>
        <InputForm
          id={"password"}
          labels={"password"}
          holder={"Enter Confirm Password"}
          name={"password"}
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputForm
          id={"password_confirm"}
          labels={"Confirm Password"}
          holder={"Enter Confirm Password"}
          name={"password"}
          type={"password"}
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <ButtonForm
          className={`${btn.btn_register}`}
          name="save"
          onClick={handlePassword}
        />
      </Form>
    </main>
  );
}
