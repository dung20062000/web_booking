import express from "express";
import homeController from "../controllers/homeController";
import userController from"../controllers/userController"
import doctorController from"../controllers/doctorController"
import patientController from"../controllers/patientController"
import specialtyController from"../controllers/specialtyController"
import clinicController from"../controllers/clinicController"

let router = express.Router();

let initWebRoutes = (app) => {

    router.get('/', homeController.getHomePage);
    router.get('/aboutme', homeController.getAboutMe);
    router.get('/crud',  homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD)
    router.get('/edit-crud', homeController.getEditCRUD)
    router.post('/put-crud', homeController.putCRUD)
    router.get('/delete-crud', homeController.deleteCRUD)

    //rest API
    router.post('/api/login',userController.handleLogin)
    router.get('/api/get-all-users', userController.handleGetAllUser)
    router.post('/api/create-new-user', userController.handleCreateNewUser)
    router.put('/api/edit-user', userController.handleEditUser)
    router.delete('/api/delete-user', userController.handleDeleteUser)
    router.get('/api/allcode', userController.handleGetAllCode)

    
    router.get('/api/top-doctor-home', doctorController.handleGetTopDoctorHome)
    router.get('/api/get-all-doctors', doctorController.handleGetAllDoctors)
    router.post('/api/save-info-doctors', doctorController.handleSaveInfoDoctors)
    router.get('/api/get-detail-doctor-by-id', doctorController.handleGetDetailDoctorByID)

    router.post('/api/bulk-create-schedule', doctorController.handleBulkCreateSchedule)
    router.get('/api/get-schedule-by-date', doctorController.handleGetScheduleByDate)
    router.get('/api/get-extra-info-doctor-by-id', doctorController.handleGetExtraInfoDoctorById)
    router.get('/api/get-profile-doctor-by-id', doctorController.handleGetProFileDoctorById)

    router.get('/api/get-list-patient-for-doctor', doctorController.handleGetListPatientForDoctor)
    router.post('/api/send-remedy', doctorController.sendRemedy)

    router.post('/api/patient-book-appointment', patientController.postBookingAppointment)
    router.post('/api/verify-book-appointment', patientController.postVerifyBookingAppointment)

    router.post('/api/create-new-specialty', specialtyController.createSpecialtyController)
    router.get('/api/get-specialty', specialtyController.handleGetAllSpecialty)
    router.get('/api/get-detail-specialty-by-id', specialtyController.handleGetDetailSpecialtyById)

    router.post('/api/create-new-clinic', clinicController.createClinicController)
    router.get('/api/get-clinic', clinicController.handleGetAllClinic)
    router.get('/api/get-detail-clinic-by-id', clinicController.handleGetDetailClinicById)




    return app.use("/", router)
}

module.exports = initWebRoutes