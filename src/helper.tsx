const baseAdminUrl = "/AdminAuth";
export const AdminEndpoints = {
  adminLogin: `${baseAdminUrl}/AdminLogin`,
  getUsers: `${baseAdminUrl}/GetAllUsers`,
  verifyUsers: `${baseAdminUrl}/VerifyUser`,
  addUserMonitoringData: `${baseAdminUrl}/UserMonitoringData`,
  getUserMonitoringData:`${baseAdminUrl}/MonitoringDetails/`,
  addPowerPlantData: `${baseAdminUrl}/UserPowerData`,
  getPowerPlantData:`${baseAdminUrl}/PowerPlant/`
};
