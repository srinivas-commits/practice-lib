const db = require("../models");
const { verifyJwtToken } = require("./users.controller");
const Hostal = db.hostal;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    var access = verifyJwtToken(req, 'admin');

    if (access) {
        if (!req.body.block) {
            console.log(req.body.block);
            res.status(400).send({ message: "Content cannot be empty! " });
            return;
        }

        // Create a Tutorial
        const hostal = new Hostal({
            block: req.body.block,
            hostalNo: req.body.hostalNo,
            studentId: req.body.studentId,
            status: req.body.status,
            roomCost: req.body.roomCost,
            fromDate: req.body.fromDate,
            toDate: req.body.toDate
        });

        // Save Tutorial in the database
        hostal
            .save(hostal)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Tutorial."
                });
            });
    } else {
        res.status(403).send('unauthorized');
    }
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    var access = verifyJwtToken(req, '');
    if (access) {
        const block = req.query.block;
        var condition = block ? { block: { $regex: new RegExp(block), $options: "i" } } : {};
        debugger;
        Hostal.find(condition)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving tutorials."
                });
            });
    } else {
        res.status(403).send('unauthorized');
    }
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    var access = verifyJwtToken(req, 'admin');
    if (access) {
        const id = req.params.id;

        Hostal.findById(id)
            .then(data => {
                if (!data)
                    res.status(404).send({ message: "Not found Tutorial with id " + id });
                else res.send(data);
            })
            .catch(err => {
                res
                    .status(500)
                    .send({ message: "Error retrieving Tutorial with id=" + id });
            });
    } else {
        res.status(403).send('unauthorized');
    }
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    var access = verifyJwtToken(req, 'admin');
    //console.log(access);
    if (access) {
        if (!req.body) {
            return res.status(400).send({
                message: "Data to update can not be empty!"
            });
        }

        const id = req.params.id;

        Hostal.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
            .then(data => {
                console.log(req.params.id);
                console.log(data);
                if (!data) {
                    res.status(404).send({
                        message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
                    });
                } else res.send({ message: "Tutorial was updated successfully." });
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error updating Tutorial with id=" + id
                });
            });
    } else {
        res.status(403).send('unauthorized');
    }
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Hostal.findByIdAndRemove(id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            } else {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Hostal.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Tutorials were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all tutorials."
            });
        });
};