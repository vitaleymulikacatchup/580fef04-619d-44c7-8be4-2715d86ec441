"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Archive, MapPin, Museum, Sparkles, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="large"
      sizing="large"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Exhibits", id: "feature" },
            { name: "Collections", id: "product" },
            { name: "Visit", id: "contact" },
            { name: "About", id: "about" }
          ]}
          logoSrc="https://pixabay.com/get/gf8e97b69ac6b698cb46765aa688f52fb1d27f411c6fe9a5d88cc146ee3887d287ad557bb10bf6af242844094a18814ed99356d565648e15fcf86f2faf65017ee_1280.jpg"
          logoAlt="Greek Mythology Museum"
          brandName="Myth Museum"
          button={{ text: "Plan Visit", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Journey Through Ancient Myths"
          description="Explore the captivating world of Greek mythology through our extraordinary collection of artifacts, sculptures, and interactive exhibits"
          tag="Discover Legends"
          tagIcon={Sparkles}
          buttons={[
            { text: "Explore Exhibits", href: "feature" },
            { text: "Plan Your Visit", href: "contact" }
          ]}
          imageSrc="https://pixabay.com/get/gd8adac37b69056bd06004eae1135e7bd2d5d19afd1a2e5729e166419a362f0aacfdd98f5fdffe1b595935cb91973e30874b17a8f97e32bebe44e79811ccdb0f5_1280.jpg"
          imageAlt="Ancient Greek museum interior with marble statues"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Mission"
          description="At the Greek Mythology Museum, we bring ancient legends to life through immersive experiences and world-class artifacts. Our mission is to preserve, educate, and inspire visitors to connect with the timeless stories that have shaped Western civilization for over three millennia."
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Immersive Exhibitions"
          description="Discover our carefully curated collections that bring Greek mythology to life"
          tag="Featured Exhibits"
          tagIcon={Museum}
          features={[
            {
              id: "01",
              title: "Hall of the Olympians",
              description: "Meet the twelve Olympic gods through stunning marble sculptures and interactive digital displays",
              imageSrc: "https://pixabay.com/get/g7b33916fa98069b365e54af0cce4c026dc3bd2750c923b84804b93d963c6847127d28fa2581719949c5df8e546edfbbc3b8ae0b79431e0191fdca58b966d3b9e_1280.jpg",
              imageAlt: "Zeus statue in museum hall"
            },
            {
              id: "02",
              title: "Heroes & Legends",
              description: "Follow the epic journeys of Perseus, Hercules, and other legendary heroes through artifacts and storytelling",
              imageSrc: "https://pixabay.com/get/gecf8fe7158dbd7337a846cccc1fd9f36572d31371bc95b31863db0254b3b852b439f2a9e2e53bd66166a84375482e238f1d55ad60d1212558243aa0dfb39a402_1280.jpg",
              imageAlt: "Athena goddess artifacts"
            },
            {
              id: "03",
              title: "Temple Reconstructions",
              description: "Walk through detailed recreations of famous temples including the Parthenon and Temple of Apollo",
              imageSrc: "https://pixabay.com/get/g297137687be10744c0ef43de2a459627e3cbab0c517d90da4a204b91518ae5daaddcb39ce0086fa000b1712c0a58b42f6db4c677d396338e95fbe96fad91f9b1_1280.jpg",
              imageAlt: "Apollo sculpture temple display"
            },
            {
              id: "04",
              title: "Archaeological Treasures",
              description: "Examine authentic ancient artifacts from archaeological sites across Greece and the Mediterranean",
              imageSrc: "https://pixabay.com/get/gb3352d01480e1d96ff4dcfcdc7f7e3fbf282c3175c4b3b53c54e517ecfa0d2a75f22d4beb1c8e27d45fb16172ac3a71c7384b09a20edc8566e9c860340d98249_1280.jpg",
              imageAlt: "Ancient Greek pottery collection"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Museum Collections"
          description="Browse our extraordinary collection of Greek mythology artifacts and exhibits"
          tag="Collections"
          tagIcon={Archive}
          products={[
            {
              id: "1",
              name: "Parthenon Gallery",
              price: "Permanent",
              imageSrc: "https://pixabay.com/get/gbbdcbc2fc65611237eea34ba76b194f5e8aaa03f930f617a96373b7b9ce7a06e4652c1e11d672132be199fcdab70c6d7fae7384ce9e0cd1958724758e024b075_1280.jpg",
              imageAlt: "Parthenon temple model display"
            },
            {
              id: "2",
              name: "Ancient Coins Collection",
              price: "Featured",
              imageSrc: "https://pixabay.com/get/gaa71f37f44a6aff96d42c3bd7300d63f9d382bdc380623b4e7dbfb75cbe4b270e4b981c3d85d7d9c72ff5b60f0f521453b4edb0983ae641b57c5948c2bbaba08_1280.jpg",
              imageAlt: "Ancient Greek coins display"
            },
            {
              id: "3",
              name: "Mythology Manuscripts",
              price: "Special",
              imageSrc: "https://pixabay.com/get/gf1495bbf9d931097ad2283ac5b55be3756df81c4db8a29f07cd5530941edcc721f35bab5692833b493a73a63c48b555e09e89323bce77b634f11911378b573a4_1280.jpg",
              imageAlt: "Ancient Greek mythology scrolls"
            },
            {
              id: "4",
              name: "Marble Relief Gallery",
              price: "Permanent",
              imageSrc: "https://pixabay.com/get/ga11aa32ac924eccbad32bf6fa7f16e2e0201d97720a8727291898ef80453c9797fd0f22376f20121920b362e81efde358db184617dd4c0fd2212a0c3281b9734_1280.jpg",
              imageAlt: "Ancient Greek marble relief sculptures"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Visitor Experiences"
          description="Hear what our visitors say about their journey through ancient Greek mythology"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "History Teacher",
              company: "Lincoln High School",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g7a502f33e9363712b8f4365ac6ea2c53de1c06c8aeeb4c9422a5cbeedfaf046bb933e5acd59092411a7c47fe295981c7c34c0ed5321882ff6655a071c639a8de_1280.jpg",
              imageAlt: "Museum visitor Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Art Historian",
              company: "University of Athens",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g4896b5d57aa715a3adcc05840678319fd1acaafb9c545cade6829317bde0ea98889367991eadb6aed6610fd3a01e6266b0ee89a2a035d7d76ecb766ae598ffa0_1280.jpg",
              imageAlt: "Art historian Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Travel Blogger",
              company: "Ancient Wonders Blog",
              rating: 5,
              imageSrc: "https://pixabay.com/get/geee68e16b1f19b8ab583e848b197f1ac3346b1e6a28a68a35413badbfa142db8348eec7b2d6396cc489fa52cb29195364fc6ed3bfd5df0e1d325302a9ded81a3_1280.jpg",
              imageAlt: "Travel blogger Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Museum Director",
              company: "Classical Studies Institute",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g9ddff725d41ec15e909100f8d466c5f19acb4601c345c880f2f3294bf3b3b589c9c83d8917079b32dfca954f0aea1e00f2be4d41bbb8fef4ce8de3438a06623f_1280.jpg",
              imageAlt: "Museum director David Thompson"
            },
            {
              id: "5",
              name: "Maria Kostakis",
              role: "Archaeologist",
              company: "Greek Ministry of Culture",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g9c7fb88bb81904473502e7db9616d12e26492fdc84443a20f094e6ad79604f3fe9fb61f583263334a9a41b3bcfd9f3781c84aee9faefbc16b110a59c9dd6e14d_1280.jpg",
              imageAlt: "Archaeologist Maria Kostakis"
            },
            {
              id: "6",
              name: "James Wilson",
              role: "Parent & Visitor",
              company: "Family Education",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g302cebddf2691f8acfe10844b913034c07c41cfac82bf6b24d902b0ea16107ac6bee95f5d7c8e322094e0c6e461301287604c692c6127b439ecab7b68bcf1ae8_1280.jpg",
              imageAlt: "Family visitor James Wilson"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          title="Plan Your Mythological Journey"
          description="Subscribe to our newsletter for updates on new exhibitions, special events, and educational programs"
          tagIcon={MapPin}
          imageSrc="https://pixabay.com/get/gfe9c00aedfac978860d15cadff6f2e7166bfca5063761b25176476d019d88b1972dd1942c1f39c0fe909dfc500262586aa867ddcc6616aaa14d9f7a50c990146_1280.jpg"
          imageAlt="Greek Mythology Museum exterior building"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Get Updates"
          termsText="By subscribing, you'll receive updates about our exhibitions and events. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Visit",
              items: [
                { label: "Plan Your Visit", href: "contact" },
                { label: "Exhibitions", href: "feature" },
                { label: "Collections", href: "product" },
                { label: "Hours & Admission", href: "contact" }
              ]
            },
            {
              title: "Learn",
              items: [
                { label: "Educational Programs", href: "about" },
                { label: "Virtual Tours", href: "feature" },
                { label: "Research Library", href: "about" },
                { label: "School Visits", href: "contact" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "About Us", href: "about" },
                { label: "Newsletter", href: "contact" },
                { label: "Support", href: "contact" },
                { label: "Membership", href: "contact" }
              ]
            }
          ]}
          logoSrc="https://pixabay.com/get/gf8e97b69ac6b698cb46765aa688f52fb1d27f411c6fe9a5d88cc146ee3887d287ad557bb10bf6af242844094a18814ed99356d565648e15fcf86f2faf65017ee_1280.jpg"
          logoWidth={140}
          logoHeight={45}
          copyrightText="© 2025 Greek Mythology Museum | Preserving Ancient Legends"
        />
      </div>
    </ThemeProvider>
  );
}