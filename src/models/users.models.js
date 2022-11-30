//* {
//*    id: 1,
//*    first_name: 'string',
//*     last_name: 'string',
//*     email: 'string',
//*    password: 'string',
//*     birthday: 'YYYY/MM/DD'
//* }

const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Users = db.define('users', {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
  first_name: {
      type: DataTypes.STRING,
      allwNull: false
  },
  last_name: {
      type: DataTypes.STRING,
      allowNull: false
  },
  email: {
      type: DataTypes.STRING,
      allowNull: false
  },
  password: {
      type: DataTypes.STRING,
      allowNull: false
  },
  birthday: {
      type: DataTypes. DATE,
      allowNull: false
  }
}, {
  timestamps: false //? No agrega las columnas created at y update_at
})

module.exports = Users








