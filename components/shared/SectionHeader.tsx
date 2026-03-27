interface SectionProps {
  title: string;
  description?: string;
  className?: string;
}

const SectionHeader = ({ title, description, className }: SectionProps) => {
  return (
    <div className={`${className} pb-8 space-y-2 `}>
      <h2 className="text-[32px] font-bold text-[#1A2B3D]">{title}</h2>
      {description && (
        <p className="text-[#5A6573] text-[15px] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
