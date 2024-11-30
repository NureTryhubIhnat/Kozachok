import css from "./UserMenu.module.css";
import { logout } from "../../../utils/registration";
import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

export default function UserMenu() {
  return (
    <div className={css.navList}>
      <button onClick={logout} className={css.navLink}>
        Logout
      </button>
      <NavLink to="/account" className={css.accLink}>
        <VscAccount />
      </NavLink>
    </div>
  );
}