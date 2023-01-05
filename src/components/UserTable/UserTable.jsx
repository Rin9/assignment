import tableStyles from '../../../styles/Table.module.css';

export default function UserTable({ userDataHead, userDataBody }) {
  return (
    <table className={tableStyles.userTable}>
      <thead className={tableStyles.userTable_thead}>
        <tr className={tableStyles.userTable_tr}>
          {userDataHead.map((thName) => {
            return (
              <th className={tableStyles.userTable_th} key={thName}>
                {thName}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className={tableStyles.userTable_tbody}>{userDataBody}</tbody>
    </table>
  );
}
