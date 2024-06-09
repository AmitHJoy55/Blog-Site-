import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import { BeatLoader, BounceLoader } from "react-spinners";

const AllAdmins = () => {
  const [admins, setAdmins] = useState([]);
  const { mode } = useContext(Context);
  useEffect(() => {
    const fetchAdmins = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/admins",
        { withCredentials: true }
      );
      setAdmins(data.admins);
    };
    fetchAdmins();
  }, []);

  return (
    <article
      className={
        mode === "dark" ? "dark-bg all-admins" : "light-bg all-admins"
      }
    >
      <h2>ALL ADMINS</h2>
      <div className="container">
        {admins && admins.length > 0 ? (
          admins.map((element) => {
            return (
              <div className="card" key={element._id}>
                  <img src={element.avatar.url} alt="admin_avatar" />
                {/* )} */}
                <h3>{element.name}</h3>
                <p>{element.role}</p>
              </div>
            );
          })
        ) : (
          <BeatLoader color="gray" size={50} style={{ padding: "200px 0" }} />
        )}
      </div>
    </article>
  );
};

export default AllAdmins;
