const RSO = require('../models/rsos.model')

exports.createRSO = async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).send({
                message: 'Content can not be empty!'
            })
        }

        const { name, description, email1, email2, email3, email4, email5 } =
            req.body

        const newRSO = new RSO({
            name: name,
            description: description,
            email1: email1,
            email2: email2,
            email3: email3,
            email4: email4,
            email5: email5
        })

        await RSO.createRSO(newRSO)
        res.status(201).json({
            status: 'Success',
            message: 'Created a new RSO'
        })
    } catch (err) {
        res.status(500).json({
            status: 'Error',
            message: 'Could not create event',
            error: err
        })
    }
}

exports.getRSOs = async (req, res) => {
    try {
        const rsos = await RSO.getRSOs()
        res.status(201).json({
            status: 'Success',
            message: 'Created a new RSO',
            rsos: rsos[0]
        })
    } catch (err) {
        res.status(500).json({
            status: 'Error',
            message: 'Could not get RSOs',
            error: err
        })
    }
}
