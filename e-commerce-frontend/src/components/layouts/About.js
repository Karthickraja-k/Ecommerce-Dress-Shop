// AboutUs.js
import React from 'react';

const About = () => {
    return (
        <div className="about-us-container">
            <header className="about-header">
                <h1>About OST Textile Store</h1>
                <p>Your destination for quality fabrics and fashion!</p>
            </header>

            <section className="about-content">
                <h2>Our Story</h2>
                <p>
                    Welcome to OST Textile Store, where style meets quality. Founded in [Year], we have dedicated ourselves to providing 
                    the finest textiles for men and children. From luxurious fabrics to trendy apparel, our store is committed to 
                    enhancing your wardrobe, one piece at a time.
                </p>
                <p>
                    Our journey began with a love for textiles and a passion for fashion. Over the years, we have become a trusted name 
                    known for our diverse selection, attention to detail, and exceptional customer service.
                </p>
            </section>

            <section className="categories-section">
                <h2>Shop by Category</h2>
                <div className="categories">
                    <div className="category-card">
                        <h3>Men's Fashion</h3>
                        <p>Explore our collection of stylish men's clothing, from casual wear to formal attire. We offer a variety of fabrics 
                        that blend comfort and style for every occasion.</p>
                    </div>
                    <div className="category-card">
                        <h3>Kids' Collection</h3>
                        <p>Our kids' collection features fun and vibrant fabrics perfect for little ones. Discover outfits that are both 
                        playful and durable, designed to keep up with their adventures!</p>
                    </div>
                </div>
            </section>

            <section className="cta">
                <h2>Want to Know More?</h2>
                <p>Visit our store or explore our extensive selection of textiles online!</p>
                {/* <a href="/shop">Shop Now</a> */}
            </section>
        </div>
    );
};

export default About;

