const { getComplianceData } = require("../services/complianceService");

const fetchComplianceData = (req, res) => {
  try {
    const data = getComplianceData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching compliance data" });
  }
};

module.exports = {
  fetchComplianceData,
};
