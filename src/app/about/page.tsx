import React from "react";

const About = () => {
  return (
    <div>
      <section className="h-screen flex items-center justify-start bg-cover bg-cener text-white px-10" style={{ backgroundImage: "url(/about-bg.webp)" }}>
        <div className="bg-black bg-opacity-60 p-8 rounded-md max-w-lg">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p>
            Welcome to our exclusive collection of timeless watches, where
            craftsmanship meets elegance. At <b>Watch World</b>, we are
            passionate about creating watches that combine precision, style, and
            durability. Each piece is thoughtfully designed to enhance your
            personality, whether you&apos;re seeking a classic design or a modern
            statement. With a commitment to quality and attention to detail, we
            aim to deliver timepieces that not only tell time but also tell a
            story. Explore our collection and find the perfect watch to
            accompany you on every occasion.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;