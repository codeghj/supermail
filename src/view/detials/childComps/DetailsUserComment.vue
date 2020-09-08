<!--  -->
<template>
  <div class="details-user-comment">
      <div class="navbar">
          <div class="navbar-item1">用户评价</div>
          <div class="more">更多</div>
      </div>
    <div class="user">
      <div class="userimg">
        <img :src="userSay.user.avatar" alt />
      </div>
      <div class="username">
        <span>{{userSay.user.uname}}</span>
      </div>
    </div>
    <div class="conmment">
      <div>{{userSay.content}}</div>
    </div>
    <div class="time">
      <div class="created">{{userSay.created|createFilters}}</div>
      <div class="style">{{userSay.style}}</div>
    </div>
    <div class="comment-img">
      <img v-for="item in userSay.image" :src="item" alt />
    </div>
  </div>
</template>

<script>
import {time} from 'common/utils'
export default {
  name: "DetailsUserComment",
  data() {
    return {};
  },
  props: {
    userSay: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters:{
    createFilters(value){
        let date=new Date(value*1000)
        return time(date,'yyyy-MM-dd hh:mm:ss')
        
    }
  }
};
</script>

<style  scoped>
.details-user-comment{
    border-bottom: 4px solid #eee;
    padding-bottom: 20px;
}
.navbar{
    height: 50px;
    font-size: 13px;
    line-height: 50px;
    border-bottom: 2px solid #eee;
}
.navbar-item1{
    float: left;
    margin-left: 13px;
}
.more{
    float: right;
    margin-right: 13px;
}
.user {
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 13px;
  color: black;
}
.userimg {
  width: 60px;
  height: 60px;
  text-align: center;
}
.userimg img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.username {
  flex: 1;
}
.conmment {
  width: 100%;
  margin-top: 10px;
  font-size: 10px;
}
.conmment div {
  margin-left: 13px;
  width: 80%;
}
.time {
  display: flex;
  margin-top: 10px;
  font-size: 10px;
}
.created {
  margin-left: 10px;
  margin-right: 10px;
}
.comment-img {
    margin-top: 10px;
}
.comment-img img:not(:first-child) {
  width: 40px;
  height: 40px;
  margin-left: 10px;
}
.comment-img img:first-child {
  width: 40px;
  height: 40px;
  margin-left: 13px;
}
</style>
