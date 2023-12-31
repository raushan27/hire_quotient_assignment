import { useRef } from "react";
import PropTypes from "prop-types";

import styles from "./User.module.css";

const User = (props) => {
  const { user, deleteUser, editUser, saveUser, selectOne } = props;

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const roleRef = useRef(null);

  return (
    <tr key={user.id} className={user.selected ? styles.selected : ""}>
      <td>
        <label htmlFor={`check-${user.id}`}>
          <input
            id={`check-${user.id}`}
            type="checkbox"
            data={`${user.selected}`}
            onChange={() => selectOne(user.id)}
            checked={user.selected}
          ></input>
        </label>
      </td>
      <td>
        <input
          className={user.edit ? styles.editable : styles.readOnly}
          readOnly={!user.edit}
          type="text"
          ref={nameRef}
          name="name"
          defaultValue={user.name}
        ></input>
      </td>
      <td>
        <input
          className={user.edit ? styles.editable : styles.readOnly}
          readOnly={!user.edit}
          type="email"
          ref={emailRef}
          name="email"
          defaultValue={user.email}
        />
      </td>
      <td>
        <input
          className={user.edit ? styles.editable : styles.readOnly}
          readOnly={!user.edit}
          type="text"
          ref={roleRef}
          name="role"
          defaultValue={user.role}
        />
      </td>
      <td className={styles.icons}>
        {user.edit ? (
          <button
            onClick={() => saveUser(user.id, nameRef, emailRef, roleRef)}
            className="fa-solid fa-floppy-disk save"
            style={{ color: "#1ae11a" }}
          />
        ) : (
          <button
            onClick={() => editUser(user.id)}
            className="fa-solid fa-pen-to-square edit"
            style={{ color: "#5cb0ff" }}
          />
        )}

        <button
          onClick={() => deleteUser(user.id)}
          className="fa-solid fa-trash delete"
          style={{ color: "#f66060" }}
        />
      </td>
    </tr>
  );
};

User.propTypes = {
  user: PropTypes.object,
  deleteUser: PropTypes.func,
  editUser: PropTypes.func,
  saveUser: PropTypes.func,
  selectOne: PropTypes.func,
};

export default User;
