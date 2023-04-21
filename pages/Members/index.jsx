import React, { useState } from "react";
import objects from "../../static/data/objects.json";
import styles from "../../styles/Members.module.css";
const Members = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleClick = (user) => {
    setSelectedUser(user);
  };
  return (
    <div id={styles.mem}>
      <div id={styles.secTitle}>members</div>
      <div id={styles.Mbtn}>
        <div id={styles.Mbleft}>
          <div id={styles.Mbrs}>All Members</div>
        </div>
        <div id={styles.Mbright}>
          <div id={styles.Mbrs}>Last Active</div>
        </div>
      </div>

      <div id={styles.memGrid}>
        {objects.objects.map((obj) => (
          <div id={styles.mCard} key={obj.name}>
            <div id={styles.mCdDp}>
              <img src={obj.image} alt={obj.name} />
            </div>
            <div id={styles.pName}>{obj.name}</div>
            <div id={styles.pPost}>{obj.job}</div>
          </div>
        ))}
        {/* <div>
          {objects.objects.map((object) => (
            <div key={object.name}>
              <h2>{object.name}</h2>
              <img src={object.image} alt={object.name} />
              <p>{object.job}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Members;
