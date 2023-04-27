const baseAdminUrl = "/AdminAuth";
const baseUserUrl = "/UserAuth"
export const AdminEndpoints = {
  adminLogin: `${baseAdminUrl}/AdminLogin`,
  getUsers: `${baseAdminUrl}/GetAllUsers`,
  verifyUsers: `${baseAdminUrl}/VerifyUser`,
  addUserMonitoringData: `${baseAdminUrl}/UserMonitoringData`,
  getUserMonitoringData:`${baseAdminUrl}/MonitoringDetails/`,
  addPowerPlantData: `${baseAdminUrl}/UserPowerData`,
  getPowerPlantData:`${baseAdminUrl}/PowerPlant/`
};
export const UserEndpoints = {
  userLogin:`${baseUserUrl}/UserLogin`,
  userRegistration:`${baseUserUrl}/UserRegistration`
}