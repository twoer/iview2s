<template>
  <div class="index">
    <Row>
      <Col span="4">
        <Menu :active-name="activeName" @on-select="toLink">
          <MenuItem name="page">
            Page 分页
          </MenuItem>
          <MenuItem name="collapse">
            Collapse 折叠面板
          </MenuItem>
          <MenuItem name="shortcut-datepicker">
            Datepicker 日期选择
          </MenuItem>
        </Menu>
      </Col>
      <Col span="20" class="main">
        <router-view/>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      activeName: ''
    }
  },
  methods: {
    toLink (path) {
      this.activeName = path
      this.$router.push({path: path})
    }
  }
}
</script>
<style lang="scss" scoped>
.index
{
  display: flex;
  flex: 1;
  .ivu-row
  {
    position: relative;
    flex: 1;
    .ivu-col
    {
      position: relative;
      height: 100%;
    }
    .main
    {
      > div
      {
        padding: 10px;
      }
    }
  }
  .ivu-menu
  {
    height: 100%;
    width: 100%!important;
  }
}
</style>

