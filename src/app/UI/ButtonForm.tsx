interface btnProps {
  name: string;
  className: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonForm: React.FC<btnProps> = (props) => {
  return (
    <>
      <button className={props.className} onClick={props.onClick}>
        {props.name}
      </button>
    </>
  );
};
export default ButtonForm;
