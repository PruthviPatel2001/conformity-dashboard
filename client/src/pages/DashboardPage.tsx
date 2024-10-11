import React, { useEffect, useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import {
  MetricsCard,
  Table,
  ActionItemsCard,
  DoughnutChart,
  LineChart,
  BarChart,
  ProfileDropdown,
  Loader,
  ErrorComponent,
  SearchBar,
} from "../components";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import { Tooltip } from "@mui/material";
import { fetchComplianceData } from "../API/complianceAPI";
import {
  ActionItem,
  ComplianceMetric,
  ComplianceRule,
} from "../types/dashboars.types";

const DashboardPage = () => {
  const currentDate = new Date().toLocaleDateString();

  const [complianceMetrics, setComplianceMetrics] = useState<
    ComplianceMetric[]
  >([]);

  const [actionItems, setActionItems] = useState<ActionItem[]>([]);
  const [complianceRules, setComplianceRules] = useState<ComplianceRule[]>([]);

  const [complianceLabels, setComplianceLabels] = useState<string[]>([]);
  const [complianceData, setComplianceData] = useState<number[]>([]);
  const [currentCompliance, setCurrentCompliance] = useState(0);
  const [complianceRateDifference, setComplianceRateDifference] = useState(0);

  const [controlLabels, setControlLabels] = useState<string[]>([]);
  const [controlData, setControlData] = useState<number[]>([]);

  const [riskLabels, setRiskLabels] = useState<string[]>([
    "High",
    "Medium",
    "Low",
  ]);
  const [riskData, setRiskData] = useState<number[]>([]);

  const [error, setError] = useState<boolean | null>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const loadData = async () => {
    try {
      setLoading(true);
      const response = await fetchComplianceData();

      // Compliance Rule Overview
      setComplianceRules(
        response.complianceRuleOverview.map((rule: any) => ({
          name: rule.ruleName,
          percentage: rule.percentage,
          status: rule.status,
          lastUpdate: rule.lastUpdate,
        }))
      );

      // Action Items
      setActionItems(
        response.actionItems.items.map((item: any, index: any) => ({
          id: index + 1,
          title: item,
        }))
      );

      // Risk Levels
      setRiskData([
        response.riskLevelDistribution.riskLevels.high,
        response.riskLevelDistribution.riskLevels.medium,
        response.riskLevelDistribution.riskLevels.low,
      ]);

      // Compliance Trends (Line Chart)
      const trendsInCompliance =
        response.riskLevelDistribution.trendsInCompliance;

      setComplianceLabels(trendsInCompliance.map((item: any) => item.date));
      setComplianceData(
        trendsInCompliance.map((item: any) => item.compliancePercentage)
      );

      if (trendsInCompliance && trendsInCompliance.length > 0) {
        // Sort the trends by date
        const sortedTrends = trendsInCompliance.sort(
          (a: any, b: any) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        const currentMonthComplianceData = sortedTrends[0]; // Latest compliance data (current month)
        const previousMonthComplianceData = sortedTrends[1]; // Previous month compliance data

        if (currentMonthComplianceData && previousMonthComplianceData) {
          const currentMonthCompliance =
            currentMonthComplianceData.compliancePercentage;
          const previousMonthCompliance =
            previousMonthComplianceData.compliancePercentage;

          // Calculate percentage difference
          const complianceRateDifference =
            currentMonthCompliance - previousMonthCompliance;

          setCurrentCompliance(currentMonthCompliance);
          setComplianceRateDifference(complianceRateDifference);
        }
      }

      // Controls by Compliance (Bar Chart)
      setControlLabels(
        response.riskLevelDistribution.controlsByCompliance.map(
          (control: any) => control.complianceFramework
        )
      );
      setControlData(
        response.riskLevelDistribution.controlsByCompliance.map(
          (control: any) => control.numberOfControls
        )
      );

      // Compliance Metrics (Overview Cards)
      const metricsData = [
        {
          title: "Overall Compliance Score",
          value: `${response.complianceMetrics.overallComplianceScore}%`,
          icon: <SportsScoreIcon />,
          bgColor: "bg-gradient-to-r from-blue-500 to-blue-300",
        },
        {
          title: "Audit Readiness",
          value: response.complianceMetrics.auditReadiness,
          icon: <CheckCircleIcon />,
          bgColor: "bg-gradient-to-r from-green-500 to-green-300",
        },
        {
          title: "Open Compliance Issues",
          value: response.complianceMetrics.openComplianceIssues,
          icon: <WarningIcon />,
          bgColor: "bg-gradient-to-r from-red-500 to-red-300",
        },
        {
          title: "Total Pending Tasks",
          value: response.complianceMetrics.totalPendingTasks,
          icon: <PendingActionsIcon />,
          bgColor: "bg-gradient-to-r from-purple-500 to-purple-300",
        },
      ];

      setComplianceMetrics(metricsData);
    } catch (err: any) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Refresh Data on Click
  const handleRefresh = () => {
    loadData();
  };

  useEffect(() => {
    loadData();

    // Set an interval to load data every 1 min
    const intervalId = setInterval(() => {
      loadData();
    }, 100000);

    return () => clearInterval(intervalId);
  }, []);

  return loading ? (
    <Loader />
  ) : error ? (
    <ErrorComponent />
  ) : (
    <div className="p-6 pl-0 dark:text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">
          Welcome back,
          <br />
          <span className="text-4xl">Pruthvi</span>
        </h1>

        <div className="flex items-center space-x-4">
          <SearchBar />

          <div className="flex items-center space-x-2 text-[#b8b7b7]">
            <CalendarMonthIcon fontSize="small" />
            <span className="text-sm">{currentDate}</span>
          </div>

          <div className="text-[#b8b7b7] cursor-pointer">
            <Tooltip title="Refresh" placement="bottom">
              <CachedOutlinedIcon fontSize="small" onClick={handleRefresh} />
            </Tooltip>
          </div>

          <ProfileDropdown />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {complianceMetrics.map((metric, index) => (
          <div key={index} className="col-span-3 p-4 first:pl-0">
            <MetricsCard
              title={metric.title}
              value={metric.value}
              icon={metric.icon}
              bgColor={metric.bgColor}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-8 shadow-md bg-white dark:bg-[#1E243F] pl-0 max-h-[50vh] rounded-lg overflow-y-auto">
          <Table rules={complianceRules} />
        </div>
        <div className="col-span-4 shadow-md max-h-[50vh] bg-white dark:bg-[#1E243F] rounded-lg p-4 flex flex-col justify-between">
          <DoughnutChart
            labels={riskLabels}
            dataValues={riskData}
            title="Risk Level Overview"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-5 shadow-md bg-white dark:bg-[#1E243F] rounded-lg p-4">
          <LineChart
            title="Compliance Trend (This Year)"
            complianceData={complianceData}
            labels={complianceLabels}
            currentValue={currentCompliance}
            rateDifference={complianceRateDifference}
          />
        </div>

        <div className="col-span-4 shadow-md bg-white dark:bg-[#1E243F] rounded-lg p-4">
          <BarChart
            title="Controls Implementation Overview"
            labels={controlLabels}
            data={controlData}
          />
        </div>

        <div className="col-span-3 shadow-md bg-[#387FF2] pl-0 rounded-lg overflow-y-auto">
          <ActionItemsCard
            pendingCount={actionItems.length}
            actionItems={actionItems}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
