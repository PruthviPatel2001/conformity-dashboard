import React from "react";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

interface ActionItem {
  id: number;
  title: string;
}

interface ActionItemsCardProps {
  pendingCount: number;
  actionItems: ActionItem[];
}

const ActionItemsCard: React.FC<ActionItemsCardProps> = ({
  pendingCount,
  actionItems,
}) => {
  return (
    <div className=" rounded-lg  p-4 overflow-auto h-[400px]">
      <h2 className="text-xl text-white font-semibold mb-2">Action Items</h2>
      <p className=" text-white mb-4">Pending: {pendingCount}</p>
      <ul className="space-y-4">
        {actionItems.map((item, index) => (
          <li
            key={item.id}
            className="flex justify-between items-center h-16 p-3 rounded-lg transition-transform border border-white"
          >
            <div className="flex-1">
              <span className="font-medium text-sm text-white">
                {index + 1}. {item.title}
              </span>
            </div>
            <button className="flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-white border">
              <ArrowForwardIosOutlinedIcon className="text-white hover:text-[#003C43] rounded-lg p-1 text-xl" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActionItemsCard;
