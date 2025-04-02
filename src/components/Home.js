import React from "react";
import styled from "styled-components";
import Product from "./Product";

function Home() {
  return (
    <Container>
      <Content>
        <BGBanner src="/images/banner1.jpg" alt="Banner" />

        <HomeRow>
          <Product
            id="660tls3"
            title="Relativity: The Special And The General Theory by Albert Einstein | Physics & Calculus Core | Paperback Edition"
            priceB={129}
            priceS={250}
            rating={4}
            image="/images/P1img.png"
          />

          <Product
            id="376kkm4"
            title="Kenwood Kitchen Machine| KMix - KMX750WH -1000W|4 Attachments|Metal Body| 1 Year Warranty| White| Free Demo & Installation"
            priceB={37620}
            priceS={49999}
            rating={3}
            image="/images/P2img.png"
          />
        </HomeRow>

        <HomeRow>
          <Product
            id="164bws4"
            title='boAt Wave Sigma 3 2.01" HD Display, Multiple Featured Smart Watch for Men & Women(Brown Leather)'
            priceB={1649}
            priceS={2799}
            rating={4}
            image="/images/P3img.png"
          />

          <Product
            id="549aed4"
            title="Amazon Echo Dot (5th Gen) | Smart speaker with Bigger sound, Motion Detection, Temperature Sensor| Blue"
            priceB={5499}
            priceS={5999}
            rating={4}
            image="/images/P4img.png"
          />

          <Product
            id="349aua5"
            title="Adidas Unisex Adult HT2422 Tiro League TSBE Football White, 5"
            priceB={1499}
            priceS={3199}
            rating={5}
            image="/images/P5img.png"
          />
        </HomeRow>

        <HomeRow>
          <Product
            id="115soo5"
            title="Samsung Odyssey OLED G9 49-inch(124.4cm) Dual QHD 5120 x 1440 Curved 1800R Gaming Monitor, 240Hz, 0.03ms, HDR10+, HAS (LS49CG930SWXXL, Silver)"
            priceB={105999}
            priceS={149999}
            rating={5}
            image="/images/P6img.jpg"
          />
        </HomeRow>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;
  margin-bottom: 10px;
`;

const Content = styled.div``;

const BGBanner = styled.img`
  width: 100%;
  height: auto;
  z-index: -1;
  margin-bottom: -250px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const HomeRow = styled.div`
  display: flex;
  z-index: 1;
  margin-left: 5px;
  margin-right: 5px;
`;

export default Home;
