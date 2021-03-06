<template>
  <div class="mn-audio">
    <div
      class="mn-audio-inner"
      :class="{
        reverse,
        vertical,
      }"
    >
      <div
        class="mn-audio-left"
        :style="{
          width: size,
          height: size,
          padding: `calc(${size} / 4)`,
        }"
      >
        <div
          class="mn-audio-button"
          :style="{
            padding: `calc(${size} / 12)`,
            borderRadius: `calc(${size} / 12)`,
          }"
          @click="isListOpen = !isListOpen"
        >
          <i
            :class="iconList"
            :style="{
              fontSize: `calc(${size} / 3)`,
            }"
          ></i>
        </div>
      </div>
      <div
        class="mn-audio-right"
        :style="{
          width: size,
          height: size,
          lineHeight: size,
          fontSize: `calc(${size} / 3)`,
          borderRadius: (round && '4px') || (circle && '50%'),
        }"
        :class="{ isPlayed }"
        @click="togglePlay"
      >
        <div class="mn-audio-cover" :style="customAudioStyle"></div>
        <div class="mn-audio-icon">
          <i v-if="!isPlayed" :class="iconPlay"></i>
          <i v-if="isPlayed" :class="iconPause"></i>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="isListOpen"
        class="mn-audio-list"
        :style="{
          top: listAlign.includes('top') && `calc(100% + ${size} * 0.1)`,
          bottom: listAlign.includes('bottom') && `calc(100% + ${size} * 0.1)`,
          left: listAlign.includes('left') && '0',
          right: listAlign.includes('right') && '0',
          maxHeight: listMaxHeight,
          width: listWidth,
          borderRadius: round && '4px',
          fontSize,
        }"
      >
        <div
          class="mn-audio-list-item"
          v-for="(song, i) in playlist"
          :key="i"
          :style="{
            paddingLeft: round && '4px',
            paddingRight: round && '4px',
          }"
          :class="{
            'mn-audio-highlight': i === currentIndex,
          }"
          @click="audioIndex(i)"
        >
          <span>{{ i + 1 }}</span>
          <span>{{ song.title || "" }}</span>
          <span>{{ song.author || "" }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "mn-audio",
  props: {
    size: {
      type: String,
      default() {
        return "60px";
      },
    },
    iconList: {
      type: String,
      default() {
        return "fas fa-list-ul";
      },
    },
    iconPlay: {
      type: String,
      default() {
        return "fas fa-music";
      },
    },
    iconPause: {
      type: String,
      default() {
        return "fas fa-pause";
      },
    },
    playlist: {
      type: Array,
      default() {
        return [
          {
            url: "",
            pic: "",
            title: "",
            author: "",
          },
        ];
      },
    },
    vertical: {
      type: Boolean,
      default() {
        return false;
      },
    },
    reverse: {
      type: Boolean,
      default() {
        return false;
      },
    },
    round: {
      type: Boolean,
      default() {
        return true;
      },
    },
    circle: {
      type: Boolean,
      default() {
        return false;
      },
    },
    listAlign: {
      type: String,
      default() {
        return "left bottom";
      },
    },
    listMaxHeight: {
      type: String,
      default() {
        return "50vh";
      },
    },
    listWidth: {
      type: String,
      default() {
        return "320px";
      },
    },
    fontSize: {
      type: String,
      default() {
        return "12px";
      },
    },
    autoplay: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    customAudioStyle() {
      return {
        backgroundImage: `url('${this.cover}')`,
      };
    },
  },
  watch: {
    playlist() {
      this.initAudio();
    },
  },
  methods: {
    destroyAudio() {
      if (this.audio) {
        this.audio.pause();
        this.audio.src = "";
        {
          this.audio = null;
          this.isPlayed = false;
          this.currentIndex = 0;
        }
      }
    },
    initAudio() {
      this.destroyAudio();
      if (this.playlist.length > 0) {
        this.audio = new Audio();
        this.audio.volume = 1;
        this.audioSrc();
        // Events
        this.audio.onended = (e) => {
          this.audioNext();
          this.audioPlay();
        };
        this.audio.onerror = (e) => {
          if (this.audio && !this.audio.paused) {
            this.$emit("error", {
              index: this.currentIndex,
              ...this.playlist[this.currentIndex],
            });
            window.setTimeout(this.audio.onended, 1000);
          }
        };
        this.audio.onplay = (e) => {
          if (this.audio && !this.audio.paused) {
            this.isPlayed = true;
            this.$emit("play", {
              index: this.currentIndex,
              ...this.playlist[this.currentIndex],
            });
          }
        };
        this.audio.onpause = (e) => {
          if (this.audio && this.audio.paused) {
            this.isPlayed = false;
            this.$emit("pause", {
              index: this.currentIndex,
              ...this.playlist[this.currentIndex],
            });
          }
        };
        if (this.autoplay) {
          this.audio.play().catch((e) => {
            if (e.name === "NotAllowedError") {
              this.isPlayed = false;
            }
          });
        }
      }
    },
    audioSrc() {
      if (!this.audio) return;
      this.audio.src = this.playlist[this.currentIndex].url || "";
      this.cover = this.playlist[this.currentIndex].pic || "";
      this.$emit("change", {
        index: this.currentIndex,
        ...this.playlist[this.currentIndex],
      });
    },
    audioNext() {
      this.currentIndex += 1;
      if (this.currentIndex > this.playlist.length - 1) {
        this.currentIndex = 0;
      }
      this.audioSrc();
    },
    audioIndex(index) {
      this.currentIndex = index;
      if (this.currentIndex > this.playlist.length - 1) {
        this.currentIndex = 0;
      }
      this.audioSrc();
      this.audioPlay();
    },
    audioPlay() {
      if (!this.audio) return;
      if (this.audio.paused) {
        this.audio.play().catch((e) => {
          if (e.name === "NotAllowedError") {
            this.isPlayed = false;
          }
        });
      }
    },
    togglePlay() {
      if (!this.audio) return;
      if (this.audio.paused) {
        this.audio.play().catch((e) => {
          if (e.name === "NotAllowedError") {
            this.isPlayed = false;
          }
        });
      } else {
        this.audio.pause();
      }
    },
  },
  data() {
    return {
      audio: null,
      cover: "",
      isPlayed: false,
      currentIndex: 0,
      isListOpen: false,
    };
  },
  mounted() {
    this.initAudio();
  },
  destroyed() {
    this.destroyAudio();
  },
};
</script>