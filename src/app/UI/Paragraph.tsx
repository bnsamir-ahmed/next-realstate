import Style from "./paragraph.module.css";

interface ParagraphProps {
  className: string;
  title: string;
}

const Paragraph: React.FC<ParagraphProps> = (props) => {
  return <p className={props.className}>{props.title}</p>;
};

export default Paragraph;
