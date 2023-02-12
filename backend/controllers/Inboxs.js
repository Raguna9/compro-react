import Inbox from "../models/InboxModel.js";

export const getInboxs = async (req, res) => {
    try {
        const response = await Inbox.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getInboxById = async (req, res) => {
    try {
        const response = await Inbox.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createInbox = async (req, res) => {
    const { email, subject, messageContent } = req.body;
    try {
        await Inbox.create({
            email: email,
            subject: subject,
            messageContent: messageContent
        });
        res.status(201).json({ msg: "Inbox Berhasil Ditambahkan" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const updateInbox = async (req, res) => {
    const inbox = await Inbox.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!inbox) return res.status(404).json({ msg: "Inbox tidak ditemukan" });
    const { email, subject, messageContent } = req.body;
    try {
        await Inbox.update({
            email: email,
            subject: subject,
            messageContent: messageContent
        }, {
            where: {
                id: inbox.id
            }
        });
        res.status(200).json({ msg: "Inbox updated successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const deleteInbox = async (req, res) => {
    const inbox = await Inbox.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!inbox) return res.status(404).json({ msg: "No Data Found" });
    try {
        await Inbox.destroy({
            where: {
                id: inbox.id
            }
        });
        res.status(200).json({ msg: "Inbox deleted successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
