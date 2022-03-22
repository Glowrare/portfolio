<template>
  <section id="portfolio">
    <container>
      <h2 class="sec-header fade-from-left">What I have done.</h2>
      <div class="desc-slider mb-5">
        <vueper-slides
          ref="descriptionSlider"
          :breakpoints="descBreakpoints"
          :arrows="false"
          @slide="
            $refs.listSlider &&
              $refs.listSlider.goToSlide($event.currentSlide.index, {
                emit: false,
              })
          "
          class="no-shadow"
          :bullets="false"
        >
          <vueper-slide v-for="(project, i) in projects" :key="i">
            <template #content>
              <div class="vueperslide__content-wrapper desc__wrapper p-5">
                <div class="vueperslide__title desc__wrapper-title">
                  {{ project.desc }}
                </div>
                <ul class="desc__wrapper-links">
                  <li v-for="(link, i) in project.links" :key="i">
                    <a :href="link.url" target="_blank">{{ link.type }}</a>
                  </li>
                </ul>
              </div>
            </template>
          </vueper-slide>
        </vueper-slides>
      </div>
      <div class="list-slider">
        <vueper-slides
          ref="listSlider"
          :breakpoints="listBreakpoints"
          :visible-slides="3"
          :slide-ratio="1 / 4"
          :bullets="false"
          :dragging-distance="50"
          @slide="
            $refs.descriptionSlider &&
              $refs.descriptionSlider.goToSlide($event.currentSlide.index, {
                emit: false,
              })
          "
          :gap="2.5"
          class="no-shadow slider-container--list"
        >
          <vueper-slide
            v-for="(project, i) in projects"
            :key="i"
            @click="$refs.listSlider && $refs.listSlider.goToSlide(i)"
          >
            <template #content>
              <div class="vueperslide__content-wrapper list__wrapper">
                <h3 class="vueperslide__title">{{ project.name }}</h3>
                <ul>
                  <li v-for="(lang, i) in project.langs" :key="i">
                    {{ lang }}
                  </li>
                </ul>
              </div>
            </template>
          </vueper-slide>
        </vueper-slides>
      </div>
    </container>
  </section>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  props: ["projects"],
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      descBreakpoints: {
        1200: {
          slideRatio: 1 / 2,
        },
        769: {
          slideRatio: 1 / 1,
        },
        481: {
          slideRatio: 1 / 1,
        },
      },
      listBreakpoints: {
        1200: {
          slideRatio: 1 / 4,
          visibleSlides: 3,
        },
        768: {
          slideRatio: 1 / 2,
          visibleSlides: 2,
        },
        481: {
          slideRatio: 1 / 2,
          visibleSlides: 1,
        },
      },
    };
  },
};
</script>
<style scoped>
.desc__wrapper {
  background: transparent;
  border: 10px solid var(--brand-dark);
  font-size: 36px;
  font-size: clamp(24px, 2rem + 1vw, 36px);
}
.desc__wrapper .desc__wrapper-links {
  list-style: none;
}
.slider-container--list {
  /* height: 500px; */
}
.list__wrapper {
  background: var(--brand-dark);
  color: var(--brand-light);
}
.list__wrapper h3 {
  font-weight: 600;
  font-size: 48px;
  font-size: clamp(36px, 2.5rem + 1.5vw, 48px);
}
</style>