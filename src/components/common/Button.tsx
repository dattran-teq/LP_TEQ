type Props = {
  content: string;
  onClick?: () => void;
};

const Button: React.FC<Props> = (props) => {
  return (
    <button
      className="bg-black text-white rounded text-base py-[14px] px-7 font-normal w-fit"
      onClick={props.onClick}
    >
      {" "}
      {props.content}
    </button>
  );
};
export default Button;
