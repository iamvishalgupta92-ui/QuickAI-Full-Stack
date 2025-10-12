import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 mt-20">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
          <img className="h-9" src={assets.logo} alt="logo"/>
          <p className="mt-6 text-sm">
            Quick.AI⚡Building the Future of Creativity <br />From content creation📝to design, Quick.AI empowers creators and businesses to achieve more with less effort. Unlock🔑 the full potential of AI today.
          </p>
        </div>

        <div className="flex-1 flex items-start md:justify-end gap-20">
          {/* Quick Links */}
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Quick Links</h2>
            <ul className="text-sm space-y-2">

              {/* LinkedIn */}
              <li>
                <a 
                  href="https://www.linkedin.com/feed/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-blue-600"
                >
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                    alt="LinkedIn" 
                    width="16" 
                    height="16" 
                  />
                  LinkedIn
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a 
                  href="https://www.instagram.com/viishallgupta" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-pink-500"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                    alt="Instagram" 
                    width="16" 
                    height="16" 
                  />
                  Instagram
                </a>
              </li>

              {/* Contact Us (fixed Gmail compose link) */}
              <li>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=iamvishalgupta91@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-red-500"
                >
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/732/732200.png" 
                    alt="Contact" 
                    width="16" 
                    height="16" 
                  />
                  Contact Us
                </a>
              </li>

              {/* TRCAC College */}
              <li>
                <a 
                  href="https://www.trcac.org.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-green-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" viewBox="0 0 64 64">
                    <path d="M32 4L2 20v40h60V20L32 4zM4 58V22l28-14 28 14v36H4z"/>
                    <path d="M32 34a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-14a6 6 0 1 1 0 12 6 6 0 0 1 0-12z"/>
                    <path d="M32 42c-11 0-20 4-20 9v5h40v-5c0-5-9-9-20-9zm-18 11v-1c0-3 8-7 18-7s18 4 18 7v1H14z"/>
                  </svg>
                  trcac.org.in
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-5">🚀 Join our newsletter</h2>
            <div className="text-sm space-y-2">
              <p>📩 Stay updated — news, insights & tools weekly in your inbox.</p>
              <div className="flex items-center gap-2 pt-4">
                <input 
                  className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 h-9 rounded px-2" 
                  type="email" 
                  placeholder="Enter Your Active Email to Join" 
                />
                <button className="bg-primary w-24 h-9 text-white rounded cursor-pointer">✨ Join</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Innovated by Vishal Gupta | TRCAC | ⚡ Powered by AI | 2025
      </p>
    </footer>
  )
}

export default Footer
