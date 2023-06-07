'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('doctor_info', {
        // doctorId: DataTypes.INTEGER,
        // priceId: DataTypes.STRING,
        // provinceId: DataTypes.STRING,
        // paymentId: DataTypes.STRING,
        // addressClinic: DataTypes.STRING,
        // nameClinic: DataTypes.STRING,
        // note: DataTypes.STRING,
        // count: DataTypes.INTEGER,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      doctorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      specialtyId: {
        type: Sequelize.INTEGER,
      },
      clinicId: {
        type: Sequelize.INTEGER,
      },
      priceId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      provinceId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      paymentId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      addressClinic: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nameClinic: {
        type: Sequelize.STRING,
        allowNull: false,
      },      
      note: {
        type: Sequelize.STRING
      },
      count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },


      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('doctor_info');
  }
};