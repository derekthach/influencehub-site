interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container px-4 sm:px-6">
        {children}
      </div>
    </section>
  );
} 