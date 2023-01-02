import Partner from "../models/PartnerModel.js";

export const getPartners = async (req, res) => {
    try {
        const response = await Partnerr.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPartnerById = (req, res) => {
   
}

export const createPartner = (req, res) => {
    
}

export const updatePartner = (req, res) => {
    
}

export const deletePartner = (req, res) => {
   
}