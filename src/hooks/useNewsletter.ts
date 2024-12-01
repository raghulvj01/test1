import { useState } from 'react';

interface NewsletterState {
  email: string;
  loading: boolean;
  success: boolean;
  error: string | null;
}

export const useNewsletter = () => {
  const [state, setState] = useState<NewsletterState>({
    email: '',
    loading: false,
    success: false,
    error: null,
  });

  const subscribe = async (email: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setState(prev => ({
        ...prev,
        loading: false,
        success: true,
        email: '',
      }));
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setState(prev => ({ ...prev, success: false }));
      }, 3000);
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Something went wrong. Please try again.',
      }));
    }
  };

  return {
    ...state,
    subscribe,
    setEmail: (email: string) => setState(prev => ({ ...prev, email })),
  };
};

export default useNewsletter;