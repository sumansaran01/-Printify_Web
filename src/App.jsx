import { useState } from 'react';
import './App.css';
import { FaBars, FaCross, FaPlay } from 'react-icons/fa6';
import { TiTick } from "react-icons/ti";
import { FaTshirt } from 'react-icons/fa';
import { FcShipped } from 'react-icons/fc';
import { IoIosPricetag } from 'react-icons/io';
import { ImCross } from 'react-icons/im';

function App() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
      <header className="header">
        <nav>
          <div className="left">
            <img src="https://th.bing.com/th/id/OIP.8brxPaM55cZl-kCNpv7kuwHaC9?rs=1&pid=ImgDetMain" alt="logo" className='logo' />
          </div>

          <div className='centernav'>
            <div><a href="#catlog">Catalog</a></div>
            <div><a href="#features">Features</a></div>
            <div><a href="#pricing">Pricing</a></div>
            <div><a href="#about">About</a></div>
            <div><a href="#services">Services</a></div>
          </div>
          <div className='right'>
            <button className="log">Login </button>
            <button className="sign">Signup</button>
            <div>
              <FaBars className='bars' onClick={() => setOpen(!open)} />
            </div>
          </div>
        </nav>

        {open && <div className='small-window'>
          <div><a href="#catlog">Catalog</a></div>
          <div><a href="#features">Features</a></div>
          <div><a href="#pricing">Pricing</a></div>
          <div><a href="#about">About</a></div>
          <div><a href="#services">Services</a></div>
        </div>}
      </header>

      <main className="main">
        <section className="hero" id='catlog'>
          <div className='hero-left'>
            <h1>Welcome to Printify Inspired Homepage</h1>

            <ul>
              <li className='tick'><TiTick className='tickicons' />
                100% Free to use</li>
              <li className='tick'><TiTick className='tickicons' />
                900+ High-Quality Products</li>
              <li className='tick'><TiTick className='tickicons' />
                Largest global print network</li>
            </ul>

            <div className='herobtn'>
              <button className="hero-btn">Get Started</button>
              <button className="hero-btn">
                <FaPlay />
                How it Works?
              </button>
            </div>
            <p className='hero-p'>Explore the world of print-on-demand products</p>

          </div>

          <div className='hero-right'>
            <img src="https://konprozgpt.com/wp-content/uploads/2023/07/hero-section-gif.gif" alt="hero gif" />
          </div>
        </section>

        <section className="features" id='features'>
          <h2>Features</h2>
          <div className='featureboxes'>
            <div className='featuresbox'>
              <FaTshirt className='featuresicon' />
              <h3>Print-on-Demand Products</h3>
              <p>Customize and sell print-on-demand products with ease</p>
            </div>
            <div className='featuresbox'>
              <FcShipped className='featuresicon' />
              <h3>Global Shipping</h3>
              <p>Ship products worldwide with our reliable shipping partners</p>
            </div>
            <div className='featuresbox'>
              <IoIosPricetag className='featuresicon' />
              <h3>Competitive Pricing</h3>
              <p>Get the best prices for your print-on-demand products</p>
            </div>
          </div>
        </section>

        <section className="pricing" id="pricing">
          <h2>Pricing</h2>
          <p>Explore affordable pricing options for all our products and services. Whether you're an individual seller or a large business, we have pricing plans that fit your needs.</p>

          <div className="pricing-content">
            <div>
              <h1>Free</h1>
              <p>For merchants starting a business</p>
              <h1>$0 / mon</h1>
              <p className="points"><TiTick className="tickicons" /> Up to 5 stores per account</p>
              <p className="points"><TiTick className="tickicons" /> Unlimited product designs</p>
              <p className="points"><ImCross className="wrongicons" /> Custom branding</p>
              <p className="points"><ImCross className="wrongicons" /> Priority customer support</p>

              <button>Start For Free</button>
              <p>Start your free trial</p>
            </div>

            <div>
              <h1>Premium</h1>
              <p>For growing businesses</p>
              <h1>$29 / mon</h1>
              <p className="points"><TiTick className="tickicons" /> Up to 10 stores per account</p>
              <p className="points"><TiTick className="tickicons" /> Unlimited product designs</p>
              <p className="points"><TiTick className="tickicons" /> Custom branding</p>
              <p className="points"><TiTick className="tickicons" /> Priority customer support</p>

              <button>Upgrade to Premium</button>
              <p>Start your premium trial</p>
            </div>

            <div>
              <h1>Enterprise</h1>
              <p>For large-scale enterprises</p>
              <h1>Contact Us</h1>
              <p className="points"><TiTick className="tickicons" /> Unlimited stores per account</p>
              <p className="points"><TiTick className="tickicons" /> Unlimited product designs</p>
              <p className="points"><TiTick className="tickicons" /> Custom branding</p>
              <p className="points"><TiTick className="tickicons" /> Dedicated account manager</p>

              <button>Contact Sales</button>
              <p>Get in touch for custom solutions</p>
            </div>
          </div>
        </section>


        <section className="about" id='about'>
          <h2>About Us</h2>
          <p>Printify is a global print-on-demand platform that empowers entrepreneurs to create, design, and sell custom products online without worrying about inventory, printing, or shipping. Join us and be part of the growing community of global sellers.</p>
        </section>

        <section className="services" id='services'>
          <h2>Our Services</h2>
          <div className="services-list">
            <ul>
              <li>Custom Design Services</li>
              <li>Product Personalization</li>
              <li>Global Fulfillment Network</li>
              <li>24/7 Customer Support</li>
            </ul>
          </div>
        </section>

        <section className="call-to-action">
          <h2>Ready to Get Started?</h2>
          <button className="btn-cta" onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <p>Click the button to test the counter</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Printify Inspired Homepage</p>
      </footer>
    </div>
  );
}

export default App;
