"use client";

type TooltipProps = {
  content: string;
  children: React.ReactNode;
};

const Tooltip = ({ content, children }: TooltipProps) => {
  return (
    <div className="relative inline-block">
      <div className="group">
        {children}
        <div className="hidden group-hover:block bg-black/50 text-white text-xs rounded py-1 px-2 absolute left-1/2 transform -translate-x-1/2">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
