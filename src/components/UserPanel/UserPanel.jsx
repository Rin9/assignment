import Link from 'next/link';
import { useEffect, useState } from 'react';
import UserTable from '../UserTable/UserTable';
import panelStyles from '../../../styles/Panel.module.css';
import tableStyles from '../../../styles/Table.module.css';

export default function UserPanel() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('/api/rewards')
      .then((res) => res.json())
      .then((result) => {
        //sort the query result by userID
        const sortedResult = result.sort((a, b) => a.userID - b.userID);
        let crtUserID = 0;
        //this object to generate the result
        const generated = {};
        //loop through data
        for (let i = 0; i < sortedResult.length; i++) {
          const crtUser = sortedResult[i];
          //if current userid equals to current user, add on the spend and reward
          if (Number(crtUserID) === Number(crtUser.userID)) {
            generated[crtUserID].total += crtUser.total;
            generated[crtUserID].reward += crtUser.reward;
          } else {
            //if current userid not equals to current user, means user hasn't been added to the result object, add it in
            generated[crtUser.userID] = {
              userID: crtUser.userID,
              name: crtUser.name,
              total: crtUser.total,
              reward: crtUser.reward,
            };
            //update the current userid
            crtUserID = crtUser.userID;
          }
        }
        setUserData(generated);
      });
  }, []);

  //generate data body
  const userDataBody = userData ? (
    Object.values(userData).map((user) => {
      return (
        <tr className={tableStyles.userTable_tr} key={user.userID}>
          <td className={tableStyles.userTable_td}>{user.name}</td>
          <td className={tableStyles.userTable_td}>${user.total}</td>
          <td className={tableStyles.userTable_td}>{user.reward}</td>
          <td className={tableStyles.userTable_td}>
            <Link
              className={tableStyles.userTable_button}
              href={`/detail/${user.userID}`}
              target="_blank"
            >
              Detail
            </Link>
          </td>
        </tr>
      );
    })
  ) : (
    <div>Loading...</div>
  );

  return (
    <div className={panelStyles.container}>
      <h1>User Data</h1>
      {userData ? (
        <UserTable
          userDataHead={['Name', 'Total Spend', 'Total Reward', 'Operation']}
          userDataBody={userDataBody}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
