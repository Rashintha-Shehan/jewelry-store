import React from "react";
import "./AboutUs.css";
import AboutUsBanner from "../assets/AboutUsBanner.jpg"; // Ensure the correct path to the image

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-hero" style={{ backgroundImage: `url(${AboutUsBanner})` }}>
        <h1>ABOUT US</h1>
        <p>Craftsmanship Meets Timeless Elegance</p>
        <p>
          We are not just a jewelry brand; we are the storytellers of your most
          cherished moments, the keepers of your milestones, and the creators of
          enduring beauty. Welcome to Axels, where exquisite craftsmanship meets
          timeless elegance.
        </p>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2>Our Journey</h2>
          <p>
            The journey of Axels is a tale of relentless passion and unwavering
            dedication. It began with a vision—to redefine luxury as more than
            just a material possession but as a tangible expression of the
            heart's deepest emotions. Founded by artisans, designers, and
            dreamers, Axels emerged in response to the impersonal nature of
            mass-produced jewelry. Our pieces carry your memories, milestones,
            and personal stories.
          </p>
          <p>
            Over the years, Axels has become synonymous with grace and
            sophistication, celebrating love, commitment, and personal identity.
            As we evolve, we invite you to be part of our journey—explore our
            collections and share in our passion for artistry.
          </p>
        </div>
      </section>

      
      <section className="values-section">
        <h2>Company Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Excellence</h3>
            <p>
              We strive for perfection in craftsmanship and service, ensuring
              lasting beauty in every piece.
            </p>
          </div>
          <div className="value-item">
            <h3>Integrity</h3>
            <p>
              We operate with transparency and honesty, building trust with
              customers and partners.
            </p>
          </div>
          <div className="value-item">
            <h3>Artistry</h3>
            <p>
              Each piece is a work of art, embodying creativity and passion.
            </p>
          </div>
          <div className="value-item">
            <h3>Customer-Centric</h3>
            <p>
              Your needs drive us. We listen, understand, and exceed
              expectations.
            </p>
          </div>
          <div className="value-item">
            <h3>Ethical Sourcing</h3>
            <p>
              Sustainability and ethical practices guide us in crafting jewelry
              that respects both people and the planet.
            </p>
          </div>
          <div className="value-item">
            <h3>Personalization</h3>
            <p>
              We believe in making jewelry that tells your unique story.
            </p>
          </div>
        </div>
      </section>

      <section className="work-with-us">
  <h2>Let's Work Together!</h2>
  <button className="work-button">Get in Touch</button>
</section>

    </div>
  );
};

export default AboutUs;
