interface TextLinkProps {
  label: string;
  hoverColor: string;
  onClick: Function;
}

export default function IconPrimary(props: TextLinkProps) {
  return <a className="text-white text-xl">{props.label}</a>;
}
