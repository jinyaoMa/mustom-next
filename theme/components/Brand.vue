<template>
  <mn-hanger
    class="Brand"
    :caption="$localeConfig.brand.caption"
    :icon="$localeConfig.brand.icon"
    type="primary"
    plain
    round
    shadow
  >
    <div class="inner">
      <div class="box">
        <mn-avatar
          size="128px"
          src="/assets/img/avatar.png"
          fit="contain"
          circle
        >
          user
        </mn-avatar>
      </div>
      <div class="box">
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
            <div class="count">
              {{ $siteCategoriesTotal }}
            </div>
            <div>
              {{
                $siteCategoriesTotal === 1
                  ? $localeConfig.unit.category.one
                  : $localeConfig.unit.category.more
              }}
            </div>
          </div>
          <div>
            <div class="count">
              {{ $siteTagsTotal }}
            </div>
            <div>
              {{
                $siteTagsTotal === 1
                  ? $localeConfig.unit.tag.one
                  : $localeConfig.unit.tag.more
              }}
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <mn-button-group class="contact">
          <mn-button
            v-for="(contact, i) in $localeConfig.brand.contacts"
            :key="i"
            fix-icon
            fix-padding
            :title="contact.tooltip"
            :to="contact.url"
            external-link
          >
            <mn-icon :name="contact.icon"></mn-icon>
          </mn-button>
        </mn-button-group>
      </div>
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
  flex-wrap wrap
  flex-direction row
  justify-content space-around
  align-items center
  padding 1.5em

.box
  display flex
  flex-direction column
  justify-content center
  align-items center
  box-sizing border-box
  padding 0 4px

.name
  margin-top 0.75em
  font-size 1.5em
  font-weight bold

.signature
  color var(--color-text-regular)

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
    cursor default
    color var(--color-text-regular)
    &:hover
      .count
        color var(--color-primary-0)

.count
  margin-bottom 0.25em
  transition 0.2s
  font-weight bold
  color var(--color-text-primary)
</style>