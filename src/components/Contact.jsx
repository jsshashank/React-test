import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="prose max-w-none">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out via email or LinkedIn.</p>
      <ul className="list-disc list-inside mt-3 text-indigo-600 font-medium">
        <li>Email: <a href="mailto:your.email@example.com" className="hover:underline">your.email@example.com</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/yourprofile</a></li>
      </ul>
    </section>
  );
}
