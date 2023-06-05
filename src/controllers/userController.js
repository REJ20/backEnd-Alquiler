const db = require ('../db');
const userService = require ('../service/user.service');


/*const getClient = async (req, res, next) => {
    try {
        const result = await db.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};*/

const createClient = async (req, res, next) => {
    const {user_name, pass, rol} = req.body;

    try {
        const result = await userService.save({user_name, pass, rol});

         res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
    };

const deleteClient = async (req, res, next) => {
   const { id } = req.params;

   try {
    const result = await db.query("DELETE FROM users WHERE id = $1", [id]);

    if (result.rowCount === 0) 
    return res.status(404).json({
        message: "User not found",
    });

    return res.sendStatus(204);

   } catch (error) {
    next(error);
   }
};

const updateClient = async (req, res, next) => {
    const { user_name, pass, rol } = req.body;

    try {
        const result = await userService.update({ user_name, pass, rol });
        if (result.rows.length === 0) 
        return res.status(404).json({
        message: "User not found",
    });
        return res.json(result.rows[0]);

    } catch (error) {
        next(error);
    }
};

module.exports = {
              //getClient,
              createClient,
              deleteClient,
              updateClient
}