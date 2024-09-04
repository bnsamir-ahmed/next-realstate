import { ReactEventHandler } from "react";
import Style from "./form.module.css";
interface FormProps {
  children: React.ReactNode;
  onSubmit?:React.FormEventHandler<HTMLFormElement>;
}

const Form: React.FC<FormProps> = ({ children  , onSubmit}) => {
  return (
    <>
      <section className="px-120 py-40">
        <div className={`${Style.bgForm} `}>
          <form onSubmit={onSubmit} className={`${Style.form} px-76 py-88`}>
            {children}
          </form>
        </div>
      </section>
    </>
  );
};
export default Form;
