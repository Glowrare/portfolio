<template>
  <section
    id="about"
    class="about-me d-flex align-items-center"
    :style="{ backgroundImage: `url(${lightTheme ? BannerImageLight : BannerImage})`, backgroundAttachment: 'fixed' }"
  >
    <container>
      <div class="row justify-content-center">
        <div class="col-12 col-lg-3 text-center order-1 order-lg-0 position-relative fade-in">
          <img src="@/assets/bio-image.png" alt="Ajibolanle" class="img-fluid" />
        </div>
        <div class="col-12 col-lg-6 col-md-8">
          <div class="mb-4 mb-md-5">
            <h1 class="title mb-0 lh-1 fw-bold fade-from-top position-relative">I am Ajibolanle<span class="dot">.</span></h1>
            <p class="subtitle mb-0 lh-1 fade-from-right position-relative">Frontend Developer</p>
          </div>
          <div class="desc-box fade-from-bottom position-relative">
            <p>One of the reasons I love coding is that coding makes it possible to bring ideas to life.</p>
          </div>
        </div>
      </div></container
    >
  </section>
</template>

<script>
import BannerImage from '@/assets/hero-banner.jpg';
import BannerImageLight from '@/assets/hero-banner-light.jpg';
export default {
  data() {
    return {
      BannerImage,
      BannerImageLight,
    };
  },
  props: ['lightTheme'],
};
</script>

<style scoped>
.title {
  color: var(--brand-dark-alt);
  font-size: 96px;
  font-size: clamp(48px, 4rem + 3.5vw, 96px);
}
.subtitle {
  font-weight: 600;
  font-size: 48px;
  font-size: clamp(36px, 2.5rem + 1.5vw, 48px);
}
.dot {
  color: var(--brand-dark);
}
.desc-box p {
  font-weight: 500;
  font-size: 36px;
  font-size: clamp(24px, 2rem + 1vw, 36px);
}
</style>
