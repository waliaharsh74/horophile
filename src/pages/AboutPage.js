import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="About"></PageHero>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="Nice Desk" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
            <p>
              we are dedicated to celebrating the artistry and allure of
              timepieces. Our passion lies in curating a collection of exquisite
              watches that embody the perfect fusion of precision engineering
              and timeless elegance. With a deep appreciation for horology, we
              meticulously handpick each timepiece, ensuring that every watch we
              offer represents the epitome of craftsmanship and sophistication.
              Whether it's a classic design with a touch of vintage charm or a
              contemporary marvel pushing the boundaries of innovation, we
              believe in presenting our customers with an exceptional selection
              that caters to diverse tastes and preferences. Our commitment to
              quality extends beyond the aesthetics of our watches. We
              collaborate with renowned watchmakers and brands known for their
              dedication to excellence, ensuring that every piece we showcase
              upholds the highest standards of performance and durability.
              journey.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
