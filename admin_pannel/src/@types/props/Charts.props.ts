//=========================PieChart==========================
type PieChartData = {
  id: string;
  label: string;
  value: number;
  color?: string;
};

export type PieChartDataProps = {
  pieChartData: PieChartData[];
};

//==========================LineChart==========================
type LineChartData = {
  id: string;
  color: string;
  data: { x: string; y: number }[];
};

export type TLineChartDataProps = {
  lineChartData: LineChartData[];
};

//==========================BarChart==========================
type BarChartData = {
  day: string;
  value: number;
  color?: string;
};

export type TBarChartDataProps = {
  barChartData: BarChartData[];
};
