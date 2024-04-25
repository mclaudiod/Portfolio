import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

export const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-zinc-50" : "text-zinc-400";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-zinc-50 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-purple-800 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};
