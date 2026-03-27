interface SectionProps {
  title: string;
  description?: string;
  className?: string;
}

const SectionHeader = ({ title, description, className }: SectionProps) => {
  return (
    <div className={`${className} pb-5 md:pb-8 space-y-1 md:space-y-2 `}>
      <h2 className="text-[22px] md:text-[32px] font-bold text-[#1A2B3D]">
        {title}
      </h2>
      {description && (
        <p className="text-[#5A6573] text-[12px] md:text-[15px] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
