<template>
  <section id="portfolio">
    <container>
      <h2 class="sec-header fade-from-left">What I have done.</h2>
      <div class="desc-slider mb-5">
        <vueper-slides
          ref="descriptionSlider"
          :breakpoints="descBreakpoints"
          :arrows="false"
          :touchable="false"
          :infinite="false"
          :slide-ratio="1 / 5"
          @slide="onSlideChange"
          class="no-shadow fade-in"
          :bullets="false"
        >
          <vueper-slide v-for="(project, i) in projects" :key="i">
            <template #content>
              <div class="vueperslide__content-wrapper desc__wrapper p-3">
                <div class="vueperslide__title desc__wrapper-title">
                  <p class="m-0">{{ project.desc }}</p>
                </div>
                <ul class="desc__wrapper-links mt-3">
                  <li v-for="(link, idx) in project.links" :key="idx">
                    <a
                      :href="i === activeIndex ? link.url : null"
                      :tabindex="i === activeIndex ? 0 : -1"
                      target="_blank"
                      class="py-1 px-4"
                      >{{ link.type }}</a
                    >
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
          :slide-ratio="1 / 5"
          :bullets="false"
          :dragging-distance="50"
          @slide="onSlideChange"
          :gap="1.5"
          class="no-shadow slider-container--list fade-from-bottom"
          style="margin: 0 30px"
        >
          <template #arrow-left>
            <img
              src="@/assets/arrow-left.svg"
              alt=""
              class="img-fluid slide-arrow slide-arrow--left"
            />
          </template>

          <template #arrow-right>
            <img
              src="@/assets/arrow-right.svg"
              alt=""
              class="img-fluid slide-arrow slide-arrow--right"
            />
          </template>
          <vueper-slide
            v-for="(project, i) in projects"
            :key="i"
            @click="$refs.listSlider && $refs.listSlider.goToSlide(i)"
          >
            <template #content>
              <div class="vueperslide__content-wrapper list__wrapper">
                <h3 class="vueperslide__title">{{ project.name }}</h3>
                <ul>
                  <li
                    v-for="(lang, i) in project.langs"
                    :key="i"
                    class="py-1 px-4"
                  >
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
      activeIndex: 0,
      descBreakpoints: {
        1200: {
          slideRatio: 1 / 3,
        },
        769: {
          slideRatio: 1 / 2,
        },
        481: {
          slideRatio: 1 / 2,
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
        581: {
          slideRatio: 1 / 2,
          visibleSlides: 1,
        },
      },
    };
  },
  methods: {
    onSlideChange({ currentSlide }) {
      const index = currentSlide.index;
      this.activeIndex = index;

      // keep sliders in sync
      this.$refs.descriptionSlider?.goToSlide(index, { emit: false });
      this.$refs.listSlider?.goToSlide(index, { emit: false });

      // fix accessibility
      this.$nextTick(() => {
        const slides = this.$el.querySelectorAll(".vueperslide");

        slides.forEach((slide, i) => {
          const focusables = slide.querySelectorAll(
            "a, button, input, textarea, select"
          );

          focusables.forEach((el) => {
            if (i === index) {
              el.removeAttribute("tabindex");
              el.removeAttribute("aria-disabled");
            } else {
              el.setAttribute("tabindex", "-1");
              el.setAttribute("aria-disabled", "true");
            }
          });
        });
      });
    },
  },
};
</script>
<style scoped>
.desc__wrapper {
  background: transparent;
  border: 10px solid var(--brand-dark);
  font-size: 36px;
  font-size: clamp(24px, 2rem + 1vw, 36px);
  line-height: 1;
}
.desc__wrapper .desc__wrapper-links,
.list__wrapper ul {
  list-style: none;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}
.desc__wrapper .desc__wrapper-links li,
.list__wrapper ul li {
  font-size: 24px;
}
.desc__wrapper .desc__wrapper-links li a {
  text-decoration: none;
  color: var(--brand-light);
  background-color: var(--brand-dark);
  display: inherit;
  border-radius: 30px;
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
.list__wrapper ul li {
  background: var(--brand-light);
  color: var(--brand-dark);
  border-radius: 15px;
}
.vueperslide:not(.vueperslide--active)
  .vueperslide__content-wrapper.list__wrapper {
  opacity: 0.7;
}
.vueperslide--active .vueperslide__content-wrapper.list__wrapper {
  box-shadow: var(--overlay-bg) 6px 16px 4px;
  padding: 10px;
}
/* Arrows */
.slide-arrow {
  max-width: 50px;
  position: relative;
}
.darkmode .slide-arrow {
  filter: invert(87%) sepia(49%) saturate(364%) hue-rotate(354deg)
    brightness(95%) contrast(86%);
}
.slide-arrow.slide-arrow--right {
  right: -20px;
}
.slide-arrow.slide-arrow--left {
  left: -20px;
}
@media only screen and (max-width: 992px) {
  .list__wrapper h3 {
    font-size: 24px;
  }
  .list__wrapper ul li {
    font-size: 18px;
  }
}
@media only screen and (max-width: 480px) {
  .desc__wrapper {
    border-width: 5px;
  }
  .desc__wrapper,
  .desc__wrapper .desc__wrapper-links li {
    font-size: 18px;
  }

  .slide-arrow.slide-arrow--right {
    right: -50px;
  }
  .slide-arrow.slide-arrow--left {
    left: -50px;
  }
}
</style>
