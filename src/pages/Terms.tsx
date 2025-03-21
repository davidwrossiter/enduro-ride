import Footer from "../components/Footer";

function TermsAndConditions() {
  return (
    <div className="font-inter flex flex-col items-center min-h-screen">
      <div className="w-full max-w-[1000px] px-7 pt-[108px] pb-20">
        <h1 className="text-[40px] font-bold mb-8">Terms and Conditions</h1>
        <p className="text-sm mb-6">Last Updated: March 21, 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
            <p className="mb-3">Welcome to Enduro Seal ("we," "our," or "us"). These Terms and Conditions govern your use of our website, located at [your-website-url], and the purchase of products offered through our website.</p>
            <p className="mb-3">By accessing our website and/or purchasing our products, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you disagree with any part of these terms, please do not use our website or purchase our products.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">2. Products and Pricing</h2>
            <p className="mb-3">All products displayed on our website are subject to availability. We reserve the right to discontinue any product at any time.</p>
            <p className="mb-3">Prices for our products are subject to change without notice. We reserve the right to modify or discontinue the Service without notice at any time.</p>
            <p className="mb-3">We shall not be liable to you or to any third-party for any modification, price change, suspension, or discontinuance of the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">3. Amazon Purchases</h2>
            <p className="mb-3">Some products on our website may be available for purchase through Amazon. When you select "Buy on Amazon," you will be redirected to Amazon's website where the transaction will take place.</p>
            <p className="mb-3">Any purchases made through Amazon are subject to Amazon's terms and conditions and privacy policy. We are not responsible for transactions conducted through Amazon.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">4. User Obligations</h2>
            <p className="mb-3">In using our website, you agree to:</p>
            <ul className="list-disc pl-8 mb-3 space-y-2">
              <li>Provide accurate, current, and complete information when purchasing products</li>
              <li>Use the website for lawful purposes only</li>
              <li>Not attempt to disrupt or interfere with the security or functionality of the website</li>
              <li>Not impersonate any person or entity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">5. Intellectual Property</h2>
            <p className="mb-3">All content, features, and functionality on our website, including but not limited to text, graphics, logos, icons, images, and software, are owned by Enduro Seal and are protected by UK and international copyright, trademark, and other intellectual property laws.</p>
            <p className="mb-3">You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">6. Product Information</h2>
            <p className="mb-3">We strive to provide accurate product descriptions and information. However, we do not warrant that product descriptions or other content on the website are accurate, complete, reliable, current, or error-free.</p>
            <p className="mb-3">If a product offered by us is not as described, your sole remedy is to return it according to our return policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">7. Limitation of Liability</h2>
            <p className="mb-3">Enduro Seal will not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
            <ul className="list-disc pl-8 mb-3 space-y-2">
              <li>Your use or inability to use the website or our products</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from the website</li>
              <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available via the website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">8. Indemnification</h2>
            <p className="mb-3">You agree to indemnify, defend, and hold harmless Enduro Seal, its officers, directors, employees, agents, and suppliers from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from any violation of these Terms and Conditions by you.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">9. Governing Law</h2>
            <p className="mb-3">These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law principles.</p>
            <p className="mb-3">Any disputes arising under or in connection with these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts of the United Kingdom.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">10. Changes to Terms and Conditions</h2>
            <p className="mb-3">We reserve the right to update or change our Terms and Conditions at any time. We will notify you of any changes by posting the new Terms and Conditions on this page.</p>
            <p className="mb-3">Your continued use of the website after we post any modifications to the Terms and Conditions will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Terms and Conditions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">11. Contact Information</h2>
            <p className="mb-3">If you have any questions about this Privacy Policy or our privacy practices, you can contact us with this <span><a className="hover:underline text-blue-500" href="/contact">form</a></span>.</p>

          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TermsAndConditions;
