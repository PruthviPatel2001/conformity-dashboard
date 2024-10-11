import React from "react";
import { ComplianceRule } from "../../types/dashboars.types";

interface TableProps {
  rules: ComplianceRule[];
}

const Table: React.FC<TableProps> = ({ rules }) => {
  return (
    <div className="overflow-auto rounded-lg">
      <h2 className="text-xl font-semibold p-4 border-b border-gray-200 dark:border-gray-600">
        Compliance Rule Overview
      </h2>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
        <thead className="bg-gray-100 dark:bg-[#1E243F]">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
              Rule Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
              Completion (%)
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
              Status
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
              Last Update
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-[#1E243F] dark:divide-gray-600">
          {rules.map((rule, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 transition-colors duration-200 dark:hover:bg-gray-700"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                {rule.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                {rule.percentage}%
              </td>
              <td
                className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                  rule.status === "Compliant"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {rule.status}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                {rule.lastUpdate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
