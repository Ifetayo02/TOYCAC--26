export const Footer = () => {
  return (
    <footer className="bg-surface-container w-full py-12 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 gap-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 sleek-gradient rounded-md shadow-sm" />
          <div className="text-on-surface-variant font-body text-xs uppercase tracking-widest font-bold">
            TIMSAN Oyo State • Infrastructure v2.0
          </div>
        </div>
        <div className="flex gap-8">
          <a className="text-on-surface-variant font-body text-xs uppercase tracking-widest hover:text-primary transition-colors font-medium" href="#">Contact</a>
          <a className="text-on-surface-variant font-body text-xs uppercase tracking-widest hover:text-primary transition-colors font-medium" href="#">Privacy</a>
          <a className="text-on-surface-variant font-body text-xs uppercase tracking-widest hover:text-primary transition-colors font-medium" href="#">Protocol</a>
        </div>
      </div>
    </footer>
  );
};
