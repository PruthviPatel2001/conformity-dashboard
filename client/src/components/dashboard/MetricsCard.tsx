interface MetricsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor: string;
}

const MetricsCard: React.FC<MetricsCardProps> = ({
  title,
  value,
  icon,
  bgColor,
}) => (
  <div
    className={`flex  justify-between p-4 rounded-lg shadow-lg ${bgColor} text-white h-32`}
  >
    <div>
      <h2 className="text-base font-semibold">{title}</h2>
      <p className="text-3xl font-bold mt-4">{value}</p>
    </div>
    <div className="text-5xl mt-4">{icon}</div>
  </div>
);

export default MetricsCard;
