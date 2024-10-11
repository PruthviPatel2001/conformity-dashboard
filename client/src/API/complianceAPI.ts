import apiClient from "./axiosClient";
import { API_ENDPOINTS } from "./endPoints";

export const fetchComplianceData = async () => {
  try {
    const response = await apiClient.get(API_ENDPOINTS.GET_COMPLIANCE_DATA);
    return response.data;
  } catch (error) {
    console.error("Error fetching compliance data:", error);
    throw error;
  }
};
