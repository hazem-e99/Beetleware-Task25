import { motion } from "framer-motion";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { MoveUp } from "lucide-react";
import PropTypes from "prop-types";

export function AnalyticsCard({ data, percentage }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="bg-card border border-border rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 2xl:px-[27px] 2xl:py-[59.5px]"
    >
      <h3 className="text-base text-[17.859px] sm:text-lg md:text-xl font-bold mb-2 text-center">
        Simple analytics
      </h3>
      <p className="text-xs text-[16px] sm:text-sm text-textP mb-4 sm:mb-6 md:mb-8 text-center">
        Make informed decisions backed by data through our analytics tools.
      </p>

      <div className="bg-muted p-3 sm:p-4 rounded-lg">
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500/10 border border-emerald-500">
            <MoveUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
          </div>
          <span className="text-base sm:text-lg md:text-xl font-bold text-emerald-500">
            {percentage}
          </span>
        </div>

        <div className="h-28 sm:h-32 md:h-40">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="natural"
                dataKey="value"
                stroke="#10b981"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}

AnalyticsCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  percentage: PropTypes.string.isRequired,
};
