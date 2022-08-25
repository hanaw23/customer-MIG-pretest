import LogoutIcon from "../svg/LogoutIcon";

export default function LogoutButton(props) {
  return (
    <button className={props.className} onClick={props.action}>
      <LogoutIcon />
    </button>
  );
}
