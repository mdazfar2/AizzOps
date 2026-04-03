import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#f9fafb] px-6 pt-36 pb-20 text-[#111827]">
      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Privacy Policy for Md. Azfar Alam Portfolio
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Effective Date: 3 April 2026
        </p>

        {/* INTRO */}
        <p className="text-gray-700 leading-7 mb-8">
          This website (
          <a
            href="https://azfaralam.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7c3aed] font-medium hover:underline"
          >
            azfaralam.vercel.app
          </a>
          ) values your privacy. This policy explains how I collect, use, and
          protect your information while using this portfolio.
        </p>

        {/* SECTION 1 */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">
            1. Information I Collect
          </h2>
          <p className="text-gray-700 leading-7">
            I may collect basic non-personal data such as browser type, pages
            visited, and interaction data for analytics purposes. Personal
            information is only collected if you contact me directly via email or
            external platforms.
          </p>
        </section>

        {/* SECTION 2 */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">
            2. Use of Information
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>To maintain and improve the website experience.</li>
            <li>To understand user interaction and improve content.</li>
            <li>To respond to inquiries or messages.</li>
          </ul>
        </section>

        {/* SECTION 3 */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">
            3. Sharing of Data
          </h2>
          <p className="text-gray-700 leading-7">
            I do not sell, trade, or share your personal data with third parties.
            Your information is only used for communication or improving the
            website.
          </p>
        </section>

        {/* SECTION 4 */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">
            4. Cookies
          </h2>
          <p className="text-gray-700 leading-7">
            This website may use cookies or analytics tools to understand
            visitor behavior and improve performance. You can disable cookies
            through your browser settings.
          </p>
        </section>

        {/* SECTION 5 */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">
            5. Security
          </h2>
          <p className="text-gray-700 leading-7">
            I take reasonable measures to protect your data, but no method of
            transmission over the internet is completely secure.
          </p>
        </section>

        {/* SECTION 6 */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">
            6. Contact Information
          </h2>
          <p className="text-gray-700 leading-7">
            If you have any questions, feel free to contact me at{" "}
            <a
              href="mailto:azfaralam.ops@gmail.com"
              className="text-[#7c3aed] font-medium hover:underline"
            >
              azfaralam.ops@gmail.com
            </a>
          </p>
        </section>

      </div>
    </main>
  );
}
