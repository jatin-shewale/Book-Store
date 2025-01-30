import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-6 text-base-content rounded dark:bg-slate-900 dark:text-white">
        {/* Navigation Links */}
        <nav className="grid grid-flow-col gap-6 text-lg">
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Browse Books</a>
          <a className="link link-hover">Gift Cards</a>
        </nav>

        {/* Social Media Links */}
        <nav className="my-4">
          <div className="grid grid-flow-col gap-4">
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.354 3.608 1.329.975.975 1.267 2.242 1.329 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.354 2.633-1.329 3.608-.975.975-2.242 1.267-3.608 1.329-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.354-3.608-1.329-.975-.975-1.267-2.242-1.329-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.354-2.633 1.329-3.608.975-.975 2.242-1.267 3.608-1.329 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.611.072-3.071.463-4.236 1.628-1.165 1.165-1.556 2.625-1.628 4.236-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.072 1.611.463 3.071 1.628 4.236 1.165 1.165 2.625 1.556 4.236 1.628 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.611-.072 3.071-.463 4.236-1.628 1.165-1.165 1.556-2.625 1.628-4.236.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.072-1.611-.463-3.071-1.628-4.236-1.165-1.165-2.625-1.556-4.236-1.628-1.28-.058-1.688-.072-4.947-.072z"></path>
                <circle cx="12" cy="12" r="3.6"></circle>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.5c0-1.378-.037-3.15-1.917-3.15-1.919 0-2.211 1.5-2.211 3.051v4.599h-3v-9h2.879v1.234h.041c.402-.762 1.381-1.562 2.842-1.562 3.034 0 3.594 1.995 3.594 4.59v4.738z"></path>
              </svg>
            </a>
          </div>
        </nav>

        {/* Footer Text */}
        <aside className="mt-2">
          <p className="text-center">
            <span className="font-bold text-lg">The Book Haven</span> <br />
            © 2024 - All rights reserved. Your trusted source for great reads.
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
