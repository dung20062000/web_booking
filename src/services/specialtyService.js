import db from "../models/index";
require("dotenv").config();

let createSpecialtyService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (
                !data.name ||
                !data.imageBase64 ||
                !data.descriptionHTML ||
                !data.descriptionMarkdown
            ) {
                resolve({
                    errCode: 1,
                    errMessage: "missing parameter",
                });
            } else {
                await db.Specialty.create({
                    name: data.name,
                    image: data.imageBase64,
                    descriptionHTML: data.descriptionHTML,
                    descriptionMarkdown: data.descriptionMarkdown,
                });
                resolve({
                    errCode: 0,
                    errMessage: "create special success",
                });
            }
        } catch (err) {
            reject(err);
        }
    });
};

let getAllSpecialtyService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Specialty.findAll();
            if (data && data.length > 0) {
                data.map((item) => {
                    item.image = Buffer.from(item.image, "base64").toString(
                        "binary"
                    );
                    return item;
                });
                // console.log('check data', data);
            }
            resolve({
                errCode: 0,
                errMessage: "ok",
                data,
            });
        } catch (err) {
            reject(err);
        }
    });
};

let getDetailSpecialtyByIdService = (inputId, location) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputId || !location) {
                resolve({
                    errCode: 1,
                    errMessage: "missing parameter",
                });
            } else {
                let data = await db.Specialty.findOne({
                    where: {
                        id: inputId,
                    },
                    attributes: ["descriptionMarkdown", "descriptionHTML"],
                });

                if (data) {
                    let doctorSpecialty = [];
                    if (location === "ALL") {
                        doctorSpecialty = await db.Doctor_Info.findAll({
                            where: {
                                specialtyId: inputId,
                            },
                            attributes: ["doctorId", "provinceId"],
                        });
                    } else {
                        //find doctor by location
                        doctorSpecialty = await db.Doctor_Info.findAll({
                            where: {
                                specialtyId: inputId,
                                provinceId: location,
                            },
                            attributes: ["doctorId", "provinceId"],
                        });
                    }

                    data.doctorSpecialty = doctorSpecialty;
                } else data = {};
                resolve({
                    errCode: 0,
                    errMessage: "ok",
                    data,
                });
            }
        } catch (err) {
            reject(err);
        }
    });
};
module.exports = {
    createSpecialtyService: createSpecialtyService,
    getAllSpecialtyService: getAllSpecialtyService,
    getDetailSpecialtyByIdService: getDetailSpecialtyByIdService,
};
