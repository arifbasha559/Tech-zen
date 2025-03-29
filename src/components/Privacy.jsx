import React from 'react';

const Privacy = () => {
    return (
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-4">At Tech-Zen, your privacy is very important to us. This Privacy Policy outlines the types of information we collect and how we use and protect it.</p>

            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Personal information (e.g., name, email address) when you subscribe or register.</li>
                <li>Technical information, such as your IP address, browser type, and device information.</li>
                <li>Usage data related to your interaction with our website.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Provide, maintain, and improve our services.</li>
                <li>Personalize your experience on our site.</li>
                <li>Communicate with you regarding updates and promotions.</li>
                <li>Monitor site performance and usage trends.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
            <p className="mb-4">We take data protection seriously and implement security measures to protect your information from unauthorized access or disclosure.</p>

            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
            <p className="mb-4">We may use third-party services to enhance your experience, but we ensure that these parties adhere to data protection regulations.</p>

            <h2 className="text-2xl font-semibold mb-4">5. Your Consent</h2>
            <p className="mb-4">By using our website, you consent to the collection and use of your information as outlined in this Privacy Policy.</p>

            <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
            <p className="mb-4">We may update this Privacy Policy from time to time. Please review this page periodically for any changes.</p>

            <p className="text-sm text-gray-500">Last updated: March 29, 2025</p>
        </div>
    );
};

export default Privacy;
