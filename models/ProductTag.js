const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // productTag's model columns
    proTagID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'proID',
        unique: false
      },
      references: {
        model: 'tag',
        key: 'tagID',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
