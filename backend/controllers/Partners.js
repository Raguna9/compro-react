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
    // // const { name, image, urlImage } = req.body;
    // if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    // const name = req.body.title;
    // const file = req.files.file;
    // const fileSize = file.data.length;
    // const ext = path.extname(file.name);
    // const fileName = file.md5 + ext;
    // const urlImage = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    // const allowedType = ['.png','.jpg','.jpeg'];

    // if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    // if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    // file.mv(`./public/images/${fileName}`, async(err)=>{
    //     if(err) return res.status(500).json({msg: err.message});
    //     try {
    //         await Product.create({name: name, image: fileName, url: url});
    //         res.status(201).json({msg: "Partner Added"});
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // })
}

export const updatePartner = (req, res) => {
    
}

export const deletePartner = (req, res) => {
   
}