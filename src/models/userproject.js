module.exports = (sequelize, DataTypes) => {
  const UserProject = sequelize.define('UserProject', {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    projectId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Projects',
        key: 'id'
      }
    }
  }, {
    tableName: 'UserProjects'
  });
  
  return UserProject;
};