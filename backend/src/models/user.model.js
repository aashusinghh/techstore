const connection = require("../db/db");
const bcrypt = require("bcrypt");

const findUserData = async (email) => {
  console.log(email);
  let queryString = "SELECT * from user WHERE email=(?)";

  try {
    const [res] = await connection.query(queryString, [email]);
    // console.log("existingUser", res);

    const existingUser = res[0];

    return existingUser;
  } catch (error) {
    console.log(error);

    return null;
  }
};
const findUserByUserId = async (user_id) => {
  let queryString =
    "SELECT fullname, email, contact, profile_pic, gender from user WHERE user_id=(?)";

  try {
    const [res] = await connection.query(queryString, [user_id]);
    const existingUser = res[0];

    return existingUser;
  } catch (error) {
    console.log(error);

    return null;
  }
};

const saveNewUserData = async (newUser) => {
  const { email, password, fullname } = newUser;
  try {
    let passwordHash = await bcrypt.hash(password, 8);

    queryString = "INSERT into user ( fullname, email, password) values (?);";

    values = [fullname, email, passwordHash];

    const result = await connection.query(queryString, [values]);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const saveUserAccessToken = async ({ accessToken, user_id }) => {
  try {
    let updateQuery = "UPDATE user SET access_token = ? WHERE user_id = ?;";

    let result = await connection.query(updateQuery, [accessToken, user_id]);

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
};

const updateUser = async (user, email) => {
  let query = `UPDATE user SET ? WHERE email='${email}';`;
  try {
    const [res] = await connection.query(query, [user]);
    const data = JSON.parse(JSON.stringify(res));
    if (data.affectedRows === 1) {
      return true;
    }
  } catch (error) {
    console.log(error);

    return false;
  }

  return false;
};

const confirmCurrPassword = async (user_id, userCurrPswd) => {
  let queryString = "Select password from user where user_id=(?)";

  try {
    const [res] = await connection.query(queryString, [user_id]);
    const dbPassword = res[0].password;
    // console.log("dbPassword ", dbPassword);
    // const hashP = await bcrypt.hash(userCurrPswd, 8);

    // console.log("hashP ", hashP);

    const passMatch =  bcrypt.compareSync(userCurrPswd, dbPassword);
    console.log(passMatch);
    return passMatch;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const changePswdInDb = async ( user_id, password) => {
  try {
    let passwordHash = await bcrypt.hash(password, 8);

    let queryString = "UPDATE user SET password=(?) WHERE user_id=(?)";
    const res = await connection.query(queryString, [passwordHash, user_id]);
    // console.log(res);
    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
};
module.exports = {
  findUserData,
  saveNewUserData,
  saveUserAccessToken,
  findUserByUserId,
  updateUser,
  confirmCurrPassword,
  changePswdInDb,
};
