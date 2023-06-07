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

//crear findOne

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
            const client = await clientService.findOne({id});
            if(!client.rows[0]) return res.status(404).json({});

            await Promise.all([
                clientService.deleteC({ id }),
                userService.deleteU({ id: client.rows[0].id_user })
            ])

            return res.status(200).json({});
        
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