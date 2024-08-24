import Style from "./form.module.css";
interface FormProps {
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ children }) => {
  return (
    <>
      <section className="px-120 py-40">
        <div className={`${Style.bgForm} `}>
          <form action={""} className={`${Style.form} px-76 py-88`}>
            {children}
          </form>
        </div>
      </section>
    </>
  );
};
export default Form;
