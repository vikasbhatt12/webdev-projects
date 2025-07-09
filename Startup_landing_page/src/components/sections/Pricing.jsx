import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      id: 1,
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        'Web Development',
        'Mobile App Development',
        '5 Team Members',
        '10GB Storage',
        'Basic Support',
        'Monthly Reports',
      ],
      popular: false,
    },
    {
      id: 2,
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'Everything in Starter',
        'Advanced Analytics',
        '15 Team Members',
        '50GB Storage',
        'Priority Support',
        'Weekly Reports',
        'Custom Integrations',
      ],
      popular: true,
    },
    {
      id: 3,
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        'Everything in Professional',
        'Dedicated Account Manager',
        'Unlimited Team Members',
        '500GB Storage',
        '24/7 Premium Support',
        'Daily Reports',
        'Advanced Security',
        'Custom Development',
      ],
      popular: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            Choose the plan that works best for your business needs. No hidden fees or surprises.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 ${!annual ? 'font-semibold text-primary' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200 transition-colors duration-300 focus:outline-none"
              role="switch"
              aria-checked={annual}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${annual ? 'translate-x-6' : 'translate-x-1'}`}
              />
              <span className="absolute inset-0 rounded-full bg-primary opacity-30"></span>
            </button>
            <span className={`ml-3 ${annual ? 'font-semibold text-primary' : 'text-gray-500'}`}>Annual <span className="text-xs text-green-500 font-medium">Save 20%</span></span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 ${plan.popular ? 'ring-2 ring-primary md:scale-105' : ''}`}
              whileHover={{ y: -10 }}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-500 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${annual ? plan.annualPrice : plan.monthlyPrice}</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <button className={`w-full btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}>
                  Get Started
                </button>
              </div>
              <div className="border-t border-gray-100 p-8">
                <h4 className="font-semibold mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
          <p className="text-gray-600 mb-6">
            Contact our team for a personalized quote tailored to your specific requirements.
          </p>
          <button className="btn btn-primary mx-auto">
            Contact Sales
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;