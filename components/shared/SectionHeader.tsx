interface SectionProps {
  title: string;
  description?: string;
  className?: string;
}

const SectionHeader = ({ title, description, className }: SectionProps) => {
  return (
    <div className={`${className} pb-8 space-y-2 `}>
      <h2 className="text-[32px] font-bold text-gray-800">{title}</h2>
      {description && (
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
