(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{3098:function(t,e,o){"use strict";o.r(e);o(528),o(21),o(68);var r=o(1012),n={name:"ResetPassword",head:function(){return{titleTemplate:"重置密码 - %s"}},data:function(){return{password:"",confirm_password:"",loading:!1}},computed:{query:function(){return JSON.parse(atob(this.$route.query.p))}},mounted:function(){var t=this.query,e=t.id,o=t.mail,n=t.sign,l=t.key;e&&o&&n&&Object(r.isMongoId)(e)&&Object(r.isEmail)(o)&&Object(r.isJWT)(n),Object(r.isMD5)(l)||(this.$notify.error({title:"验证失败",message:"无效的参数"}),this.$router.replace("/"))},methods:{resetPassword:function(){var t=this,e=this.query,o=e.id,r=e.mail,n=e.sign,l=e.key;return/^[\w_-]{6,16}$/.test(this.password)?this.password!==this.confirm_password?this.$notify.error({title:"修改失败",message:"两次密码不一致"}):(this.$store.commit("loadingComponent",!0),this.loading=!0,void this.$axios.post("/user/reset_password/reset",{sign:n,mail:r,id:o,key:l,new_password:this.password}).then((function(){t.loading=!1,t.$notify.success({title:"修改成功"}),t.$router.replace("/"),t.$store.commit("loadingComponent",!1)})).catch((function(e){t.loading=!1,t.$notify.error({title:"修改失败",message:e}),t.$store.commit("loadingComponent",!1)}))):this.$notify.error({title:"修改失败",message:"密码格式不正确"})}}},l=o(6),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"reset_password"},[e("nya-container",{attrs:{main:"",title:"重置密码"}},[e("div",{staticClass:"nya-subtitle"},[t._v("\n            密码\n        ")]),e("el-input",{staticClass:"mb-15",attrs:{placeholder:"支持6-16位（- _ 大小写字母 数字）",autofocus:"",clearable:""},model:{value:t.password,callback:function(e){t.password="string"==typeof e?e.trim():e},expression:"password"}}),e("div",{staticClass:"nya-subtitle"},[t._v("\n            确认密码\n        ")]),e("el-input",{staticClass:"mb-15",attrs:{placeholder:"与密码相同",autofocus:"",clearable:""},model:{value:t.confirm_password,callback:function(e){t.confirm_password="string"==typeof e?e.trim():e},expression:"confirm_password"}}),e("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.resetPassword}},[t._v("\n            "+t._s(t.loading?"设置中":"重设密码")+"\n        ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);