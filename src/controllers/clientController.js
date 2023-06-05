const clientService = require ('../service/client.service');
const userService = require ('../service/user.service');


const findAllClient = async(req, res) => {
    try {
        const resultFind = await clientService.allClient({ });

        res.json(resultFind.rows);
    } catch (error) {
        return error;
    }
};
const createClient = async (req, res) => {
    const {user_name, pass, first_name, last_name, email, birthdate, telephone } = req.body;


    try {
        const resultUser = await userService.save({ user_name, pass, rol:1});
        const resultClient = await clientService.save({ first_name, last_name, email, birthdate, telephone, id_user: resultUser.rows[0].id })

         res.json(resultClient.rows[0]);
    } catch (error) {
        console.log(error);
            return res.status(500).json(error.message);
    }
};

    const updateClient = async (req, res) => {
        const { id } = req.params;
        const {user_name, pass, first_name, last_name, email, birthdate, telephone} = req.body;

        try {
              await clientService.update({id, first_name, last_name, email, birthdate, telephone });
              const resultClient = await clientService.findOne({ id });
              const resulUser = await userService.update({user_name, pass, id:resultClient.rows[0].id_user});
                
            return res.json(resultClient.rows[0]);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error.message);
        }
    };

    const deleteClient = async ( req, res ) => {
        const { id } = req.params;
        try {
            await clientService.deleteC({ id });
            await userService.deleteU({ id });
            const parseId = await clientService.findOne({ id });
            console.log(parseId.rows[0]);
            //return res.json(parseId.rows[0]);
        
        } catch (error) {
            console.log(error);
            return res.status(500).json(error.message);
        }
    }



    module.exports = {
        findAllClient,
        createClient,
        updateClient,
        deleteClient
    }