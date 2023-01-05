import { useEffect, useState } from 'react';
import UserTable from '../UserTable/UserTable';
import panelStyles from '../../../styles/Panel.module.css';
import tableStyles from '../../../styles/Table.module.css';

export default function UserDetail({ id }) {
  const [userDetail, setUserDetail] = useState(null);

  //get user info by id
  useEffect(() => {
    fetch(`/api/rewards/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setUserDetail(result);
      });
  }, []);

  //generate table body
  const userDataBody = userDetail ? (
    userDetail.map((user) => {
      return (
        <tr className={tableStyles.userTable_tr} key={user.transactionID}>
          <td className={tableStyles.userTable_td}>{user.name}</td>
          <td className={tableStyles.userTable_td}>${user.total}</td>
          <td className={tableStyles.userTable_td}>{user.reward}</td>
          <td className={tableStyles.userTable_td}>{user.date}</td>
        </tr>
      );
    })
  ) : (
    <div>Loading...</div>
  );

  return (
    <div className={panelStyles.container}>
      <h1>User Detail</h1>
      {userDetail ? (
        <UserTable
          userDataHead={['Name', 'Spend', 'Reward', 'Transaction Date']}
          userDataBody={userDataBody}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
