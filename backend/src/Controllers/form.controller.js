const FormModel = require("../models/form.model");
const multer = require("multer");


const createBasicDetails = async (req, res) => {
    const { name, email, phone, address } = req.body;
    const { line1, line2, city, state, pincode, country } = address;

    const details = new FormModel({
        name, email, phone, address, line1, line2, city, state, pincode, country, userId,

    })

    try {
        if (!name || !email || !phone || !address) {
            return res.status(404).send({ result: "Please fill required details" })
        }
        else {
            await details.save();
            return res.send(200).send({ result: "step1 processed...!" })
        }
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}


  


