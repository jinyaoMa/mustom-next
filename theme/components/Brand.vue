<template>
  <mn-hanger
    class="Brand"
    :caption="$localeConfig.brand.caption"
    :icon="$localeConfig.brand.icon"
    type="primary"
    plain
  >
    <div class="inner">
      <mn-avatar size="128px" src="/assets/img/avatar.png" fit="contain" circle>
        user
      </mn-avatar>
      <div class="name">
        {{ $localeConfig.brand.name }}
      </div>
      <div class="signature">
        {{ $localeConfig.brand.signature }}
      </div>
      <div class="overview">
        <div>
          <div class="count">
            {{ $sitePostsTotal }}
          </div>
          <div>
            {{
              $sitePostsTotal === 1
                ? $localeConfig.unit.post.one
                : $localeConfig.unit.post.more
            }}
          </div>
        </div>
        <div>
          <div class="count">10</div>
          <div>分类</div>
        </div>
        <div>
          <div class="count">25</div>
          <div>标签</div>
        </div>
      </div>
      <mn-button-group class="contact">
        <mn-button
          v-for="(contact, i) in $localeConfig.brand.contacts"
          :key="i"
          fix-icon
          fix-padding
          :title="contact.hint"
        >
          <mn-icon :name="contact.icon"></mn-icon>
        </mn-button>
      </mn-button-group>
    </div>
  </mn-hanger>
</template>

<script>
export default {
  name: "Brand",
};
</script>

<style lang="stylus" scoped>
.inner
  display flex
  flex-direction column
  justify-content center
  align-items center
  padding 1.5em

.name
  margin-top 1em
  font-size 1.25em
  font-weight bold

.signature, .overview
  margin-top 0.5em
  text-align center

.contact
  margin-top 0.75em

.overview
  display flex
  flex-direction row
  flex-wrap nowrap
  > div
    padding 0.5em
    display flex
    flex-direction column
    cursor pointer
    &:hover
      .count
        color var(--color-primary-0)

.count
  margin-bottom 0.25em
  transition 0.2s
  font-weight bold
</style>