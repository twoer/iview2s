<template>
  <div>
        <Alert>
            <p>1. 实现了日期区段快速选择</p>
        </Alert>

        <Row>
            <Col span="24">
                <shortcut-datepicker ref="shortcutDatepicker" align="left" default="currentMonth" @on-change="datepickerChange"></shortcut-datepicker>
            </Col>
        </Row>
        <br>
        <Row>
            <Col v-if="searchData.beginDate" span="24">
                开始日期：{{searchData.beginDate}}
                结束日期：{{searchData.endDate}}
            </Col>
        </Row>
  </div>
</template>

<script>
export default {
  data () {
    return {
        searchData: {
            beginDate: '',
            endDate: '',
        }
    }
  },
  methods: {
      datepickerChange (beginDate, endDate) {
        this.searchData.beginDate = beginDate
        this.searchData.endDate = endDate
      }
  }
}
</script>
<style lang="scss" scoped>
</style>

