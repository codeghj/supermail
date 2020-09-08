<!--  -->
<template>
  <div class="details-item-params">
    <table class="details-item-params-rule">
      <tr class="details-item-params-rule-tables" v-for="table in ItemParams.tables[0]">
        <td class="tables-item" v-for="item in table" colspan="4">{{item}}</td>
      </tr>
    </table>
    <table class="details-item-params-info">
      <tr class="info" v-for="item in ItemParams.set">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "DetialsItemParams",
  data() {
    return {
     
    };
  },

  props: {
    ItemParams: {
      type: Object,
      defaule() {
        return {};
      },
    },
  },
};
</script>

<style  scoped>
.details-item-params {
  padding-bottom: 10px;
  margin-top: 20px;
  border-bottom: 4px solid #eeeeee;
}
.details-item-params-rule {
  width: 100%;
  border-bottom: 2px solid #eee;
}
.details-item-params-info {
  width: 100%;
}
.details-item-params-info,
.details-item-params-rule {
  border-collapse: collapse;
}
.info,
.details-item-params-rule-tables {
  border-bottom: 1px solid #eee;
  width: 100%;
}

.details-item-params-rule-tables td:first-child {
  padding-left: 10px;
  padding-right: 80px;
}
.details-item-params-rule-tables td:not(:first-child) {
  padding-right: 44px;
}
.info,.details-item-params-rule-tables {
  font-size: 10px;
  line-height: 30px;
}

.info td:first-child {
  padding-left: 10px;
  width: 40px;
}
.info td:last-child {
  color: rgb(255, 87, 119);
  padding-left: 88px;
}
</style>
