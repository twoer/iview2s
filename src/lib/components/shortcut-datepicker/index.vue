<template>
  <div class="shortcut-datepicker" :class="[ 'align-' + align ]">
    <ButtonGroup size="small">
      <Button v-for="(val, key) in tags" :key="key"
        :type=" key === currentTag ? 'primary' : 'ghost' " @click="_tagChange(key)" >{{ val.name }}</Button>
    </ButtonGroup>
    <DatePicker
      :open="open"
      :value="value"
      :clearable=false
      format = "yyyy/MM/dd "
      type="daterange"
      transfer
      @on-change="_datepickerChange">
        <Button type="primary" size="small" icon="calendar" @click.stop="_datepickerShow">{{value[0]}} - {{value[1]}}</Button>
    </DatePicker>
    <span ref="clickPlaceholder"></span>
  </div>
</template>

<script>
import Xdate from './Xdate.js';
export default {
  name: 'shortcut-datepicker',
  props: {
    default: {
      type: String,
      default: 'today'
    },
    align: {
        type: String,
        default: 'right'
    }
  },
  data () {
    return {
      open: false,
      startDate: null,
      endDate: null,
      tags: null,
      value: [],
      currentTag: 'today'
    };
  },
  created () {
    this.currentTag = this.default;
    this._initTags();
  },
  methods: {
    _initTags () {
      let _tags = {
        today: {
          name: '今天',
          date: null
        },
        yesterday: {
          name: '昨天',
          date: null
        },
        lately7Days: {
          name: '近7天',
          date: null
        },
        lately30Days: {
          name: '近30天',
          date: null
        },
        currentMonth: {
          name: '本月',
          date: null
        },
        prevMonth: {
          name: '上月',
          date: null
        }
      };
      let _now = new Date();
      let _year = _now.getFullYear();
      let _month = _now.getMonth();
      let _today = new Xdate(_now).format('yyyy/MM/dd');
      let _yesterday = new Xdate(_now).addDay(-1).format('yyyy/MM/dd');
      let _lately7Days = new Xdate(_now).addDay(-6).format('yyyy/MM/dd');
      let _lately30Days = new Xdate(_now).addDay(-29).format('yyyy/MM/dd');
      let _currentMonthFirstDay = new Xdate(_year, _month, 1).format('yyyy/MM/dd');
      let _prevMonthFirstDay = new Xdate(_year, _month - 1, 1).format('yyyy/MM/dd');
      let _prevMonthLastDay = new Xdate(_year, _month, 0).format('yyyy/MM/dd');
      _tags.today.date = [_today, _today];
      _tags.yesterday.date = [_yesterday, _yesterday];
      _tags.lately7Days.date = [_lately7Days, _today];
      _tags.lately30Days.date = [_lately30Days, _today];
      _tags.currentMonth.date = [_currentMonthFirstDay, _today];
      _tags.prevMonth.date = [_prevMonthFirstDay, _prevMonthLastDay];
      this.tags = _tags;
      this.value = this.tags[this.currentTag].date;
    },
    _tagChange (key) {
      this.currentTag = key;
      this.value = this.tags[key].date;
      this.open = false;
      this.$emit('on-change', this.value[0], this.value[1]);
    },
    _datepickerShow () {
      this.open = !this.open;
      // fix open 状态下，第一次事件无效情况
      if (this.open) {
        setTimeout(() => {
          this.$refs.clickPlaceholder.click();
        }, 40);
      }
    },
    _datepickerChange (date) {
      // 去除空格
      date.forEach((item, index) => {
        date[index] = item.replace(/\s$/, '');
      });
      this.value = date;
      this.open = false;
      let tag = '';
      let datestr = this.value.join(',');
      for (const key in this.tags) {
        if (this.tags.hasOwnProperty(key)) {
          if (this.tags[key].date.join(',') === datestr) {
            tag = key;
            break;
          }
        }
      }
      this.currentTag = tag;
      this.$emit('on-change', this.value[0], this.value[1]);
    },
    close () {
      this.open = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.shortcut-datepicker
{
    &.align-right
    {
      text-align: right;
    }
    &.align-left
    {
      text-align: left;
    }
    &.align-center
    {
      text-align: center;
    }
    .ivu-btn-group
    {
        margin-right: 10px;
    }
}
</style>
