import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen dark:bg-slate-800 dark:text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>

        <form>
          {/* Name Field */}
          <div className="form-control mb-4">
            <label className="label" htmlFor="name">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Email Field */}
          <div className="form-control mb-4">
            <label className="label" htmlFor="email">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          {/* Message Field */}
          <div className="form-control mb-4">
            <label className="label" htmlFor="message">
              <span className="label-text">Message</span>
            </label>
            <textarea
              id="message"
              placeholder="Type your message here..."
              className="textarea textarea-bordered w-full"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Send Message</button>
          </div>
        </form>

        {/* Back Button */}
        <div className="form-control mt-4">
          <button 
            className="btn btn-secondary w-full"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
