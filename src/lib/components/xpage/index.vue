<template>
    <Page transfer :current="current"
      :page-size="pageSize"
      :total="total"
      :show-total="showTotal"
      :show-sizer="showSizer"
      :show-elevator="showElevator"
      @on-change="_pageChange"
      @on-page-size-change="_pageSizeChange"></Page>
</template>

<script>
export default {
  name: 'xpage',
  props: {
    current: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 10
    },
    showTotal: {
      type: Boolean,
      default: true
    },
    showSizer: {
      type: Boolean,
      default: true
    },
    showElevator: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    };
  },
  created () {
  },
  methods: {
    _pageChange (current) {
      this.$emit('update:current', current);
      this.$emit('on-change', current, this.pageSize);
    },
    _pageSizeChange (size) {
      this.$emit('update:pageSize', size);
      if (this.current === 1) {
        this.$emit('on-change', this.current, size);
      }
    }
  }
};
</script>
