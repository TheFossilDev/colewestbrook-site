interface IconPrimaryProps {
  children: React.ReactNode;
  label: string;
  filled: boolean;
  twBgColor?: string;
  twOutlineColor: string;
  twHoverColor?: string;
}

export default function IconPrimary(props: IconPrimaryProps) {
  return (
    <div
      className={`flex cursor-pointer border-2 rounded-md p-2 m-2 font-semibold text-white items-center justify-around gap-2 ${
        props.twHoverColor ? props.twHoverColor : ""
      } ${props.twBgColor} ${props.twOutlineColor}`}
    >
      {props.children}
      <p>{props.label}</p>
    </div>
  );
}
