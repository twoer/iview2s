<template>
  <div class="collapse">
    <h3 class="title" @click="_toggle">
      <Icon v-if="expand" type="minus-circled" size="20"></Icon>
      <Icon v-else type="plus-circled" size="20"></Icon>
      <span>{{title}}</span>
    </h3>
    <div class="content" v-if="expand">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xcollapse',
  props: {
    title: {
      type: String,
      default: ''
    },
    open: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      expand: this.open
    };
  },
  created () {
  },
  methods: {
    _toggle () {
      this.expand = !this.expand;
    }
  },
  watch: {
    open (n) {
      this.expand = n;
    }
  }
};
</script>

<style lang="scss" scoped>
.collapse
{
  .title
  {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 32px;
    line-height: 1em;
    .ivu-icon
    {
      margin-left: 2px;
      margin-right: 6px;
      margin-top: 2px;
      color: lighten(#495060, 20%);
      cursor: pointer;
    }
    span
    {
      cursor: pointer;
    }
  }
  .content
  {
    padding: 8px 10px 8px 26px;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: height .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: 0px;
}
</style>
