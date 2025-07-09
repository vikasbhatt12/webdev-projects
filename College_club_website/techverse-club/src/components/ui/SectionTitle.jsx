const SectionTitle = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;