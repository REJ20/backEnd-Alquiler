const db = require ('../db');

const allUsers = ({  }) => {
    return db.query("SELECT * FROM users");
};


const save = async ({ user_name, pass, rol }) => {
    return db.query(
        "INSERT INTO users (user_name, pass, rol) VALUES ($1, $2, $3) RETURNING *",
        [user_name, pass, rol]
        );
}

const update = async ({ user_name, pass, id}) => {
    const result = await db.query(
        "UPDATE users SET user_name=$1, pass=$2 WHERE id=$3 RETURNING *", 
        [user_name, pass, id]);
   
}

const deleteU = ({ id }) => {
    return db.query(
        "UPDATE users SET eliminate=true WHERE id=$1 RETURNING *", [+id]);
}




module.exports = {
     save,
     update, 
     allUsers,
     deleteU
}

