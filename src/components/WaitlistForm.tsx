import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  specialty: string;
}

const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    specialty: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setLoading(false);
    setSuccess(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setSuccess(false);
      setFormData({ name: '', email: '', specialty: '' });
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-semibold gradient-text mb-6">Join the Waitlist</h3>
      
      <div className="space-y-4">
        <input
          type="text"
          required
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
        />
        
        <input
          type="email"
          required
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
        />
        
        <select
          required
          value={formData.specialty}
          onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
          className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
        >
          <option value="">Select Your Specialty</option>
          <option value="cardiology">Cardiology</option>
          <option value="neurology">Neurology</option>
          <option value="oncology">Oncology</option>
          <option value="pediatrics">Pediatrics</option>
          <option value="other">Other</option>
        </select>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={loading}
        className="relative w-full group"
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-secondary blur-md opacity-80 group-hover:opacity-100 transition-opacity" />
        <div className="relative flex items-center justify-center bg-gradient-to-r from-primary to-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-semibold">
          {loading ? (
            <Loader className="w-5 h-5 animate-spin" />
          ) : success ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <>
              <span>Join Waitlist</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </div>
      </motion.button>

      {success && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-green-500 font-medium"
        >
          Thanks for joining! We'll be in touch soon.
        </motion.p>
      )}
    </form>
  );
};

export default WaitlistForm;