const db = require ('../db');

const allClient = ({  }) => {
    return db.query("SELECT C.id, first_name,last_name, email, birthdate, telephone, id_user," +
            "user_name, pass, rol FROM client C, users U WHERE C.id_user = U.id;");
};

const findOne = ({ id }) => {
    return db.query("SELECT C.id, first_name,last_name, email, birthdate, telephone, id_user,"+
     "user_name, pass FROM client C, users U WHERE C.eliminate = FALSE AND  C.id_user = U.id AND C.id=$1;", [+id]);
};

const save = ({ first_name, last_name, email, birthdate, telephone, id_user }) => {
    return db.query(
        "INSERT INTO client (first_name, last_name, email, birthdate, telephone, id_user)"+
        "VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [first_name, last_name, email, birthdate, telephone, id_user]
        );

}

const update = ({id, first_name, last_name, email, birthdate, telephone}) => {
    return db.query(
        "UPDATE client SET first_name=$1, last_name=$2, email=$3, birthdate=$4, telephone=$5 WHERE id=$6 RETURNING *",
        [first_name, last_name, email, birthdate, telephone, id]
        );
}

const deleteC =  ({ id }) => {
    return db.query("UPDATE client SET eliminate=true WHERE id=$1 RETURNING *", [+id]);
}


module.exports = {
    save,
    update,
    findOne,
    allClient,
    deleteC
}