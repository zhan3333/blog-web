<template>
  <div>
    <el-container>
      <el-header style="background-color: #fff; margin-bottom: 20px; height: 48px">
        <el-row type="flex" justify="end">
          <el-col :span="20"></el-col>
          <el-col :span="1">登陆</el-col>
          <el-col :span="1">注册</el-col>
        </el-row>
      </el-header>
      <el-container>
        <!--左边栏-->
        <el-aside width="400px"></el-aside>
        <!--中间栏-->
        <el-main style="padding: 0px 20px">
          <!--发布博客部分-->
          <el-row style="background-color: #fff; border-radius: 2px;">
            <el-col>
              <el-form style="margin: 10px;">
                <div style="text-align: left; padding: 4px; font-size: 18px; color: #1b7fb6">发布博客</div>
                <el-form-item>
                  <el-input type="textarea"></el-input>
                </el-form-item>
                <el-form-item style="text-align: right">
                  <el-button size="mini" round>发布</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
          <!--博客列表-->
          <el-row v-for="blog in blog_list" style="margin: 20px 0px">
            <el-col>
              <el-card :body-style="{padding: '10px'}">
                <div slot="header">
                  <el-row :gutter="40" align="middle">
                    <!--头像-->
                    <el-col :span="4">
                      <img src="../../static/default.jpeg" height="100px" width="100px" style="border-radius: 50%">
                    </el-col>
                    <!--用户信息-->
                    <el-col :span="20" style="height: 100px">
                      <el-row>
                        <el-col class="main-user-name">
                          {{blog.user_info.name}}
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col class="main-blog-crated-at">
                          {{blog.created_at}}
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col class="main-blog-title">
                          {{blog.title}}
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </div>
                <!--博客正文-->
                <div style="text-align: left">
                  {{blog.content}}
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-main>
        <!--右边栏-->
        <el-aside width="600px">
          <el-row style="margin-right: 20px; width: 230px; border-radius: 2px;">
            <el-col>
              <div style="height: 75px; background-image: url(../../static/background.jpg)">
                <img src="../../static/default.jpeg"
                     style="border-radius: 50%; height: 100px; width: 100px; margin-top: 10px;">
                <div style="color: #333; font-size: 14px;font-weight: bold;">用户姓名</div>
              </div>
              <div style="height: 90px; background-color: #fff"></div>
            </el-col>
          </el-row>
        </el-aside>
      </el-container>
      <el-footer>
        footer
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import ElCol from 'element-ui/packages/col/src/col'
  import ElFooter from '../../node_modules/element-ui/packages/footer/src/main'
  import ElButton from '../../node_modules/element-ui/packages/button/src/button'
  import ElForm from '../../node_modules/element-ui/packages/form/src/form'
  import ElFormItem from '../../node_modules/element-ui/packages/form/src/form-item'
  import ElInput from '../../node_modules/element-ui/packages/input/src/input'
  import ElRow from 'element-ui/packages/row/src/row'
  import ElCard from '../../node_modules/element-ui/packages/card/src/main'
  export default {
    components: {
      ElCard,
      ElRow,
      ElInput,
      ElFormItem,
      ElForm,
      ElButton,
      ElFooter,
      ElCol},
    data () {
      return {
        blog_list: [
          {
            title: '标题',
            content: '内容',
            created_at: '2017-10-25 18:27:30',
            user_id: '1000',
            user_info: {
              name: 'zhan'
            }
          }, {
            title: '标题',
            content: '内容',
            created_at: '2017-10-25 18:27:30',
            user_id: '1000',
            user_info: {
              name: 'zhan'
            }
          }, {
            title: '标题',
            content: '内容',
            created_at: '2017-10-25 18:27:30',
            user_id: '1000',
            user_info: {
              name: 'zhan'
            }
          }, {
            title: '标题',
            content: '内容',
            created_at: '2017-10-25 18:27:30',
            user_id: '1000',
            user_info: {
              name: 'zhan'
            }
          }, {
            title: '标题',
            content: '内容',
            created_at: '2017-10-25 18:27:30',
            user_id: '1000',
            user_info: {
              name: 'zhan'
            }
          }, {
            title: '标题',
            content: '内容',
            created_at: '2017-10-25 18:27:30',
            user_id: '1000',
            user_info: {
              name: 'zhan'
            }
          }, {
            title: '标题',
            content: '内容',
            created_at: '2017-10-25 18:27:30',
            user_id: '1000',
            user_info: {
              name: 'zhan'
            }
          }, {
            title: '标题',
            content: '内容',
            created_at: '2017-10-25 18:27:30',
            user_id: '1000',
            user_info: {
              name: 'zhan'
            }
          }, {
            title: '标题',
            content: '内容',
            created_at: '2017-10-25 18:27:30',
            user_id: '1000',
            user_info: {
              name: 'zhan'
            }
          }, {
            title: '标题',
            content: '内容',
            created_at: '2017-10-25 18:27:30',
            user_id: '1000',
            user_info: {
              name: 'zhan'
            }
          }, {
            title: '标题',
            content: '内容',
            created_at: '2017-10-25 18:27:30',
            user_id: '1000',
            user_info: {
              name: 'zhan'
            }
          }, {
            title: '标题',
            content: '内容',
            created_at: '2017-10-25 18:27:30',
            user_id: '1000',
            user_info: {
              name: 'zhan'
            }
          }, {
            title: '标题',
            content: '内容',
            created_at: '2017-10-25 18:27:30',
            user_id: '1000',
            user_info: {
              name: 'zhan'
            }
          }, {
            title: '标题',
            content: '内容',
            created_at: '2017-10-25 18:27:30',
            user_id: '1000',
            user_info: {
              name: 'zhan'
            }
          }, {
            title: '标题',
            content: '内容',
            created_at: '2017-10-25 18:27:30',
            user_id: '1000',
            user_info: {
              name: 'zhan'
            }
          }
        ]
      }
    },
    created () {
      this.request.post('blog/index')
        .then((data) => {
          console.log(data)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
</script>
<style>
.main-user-name {
  text-align: left;
  font-size: 14px;
  font-weight: 700;
  color: #333;
  margin: 3px;
}

.main-blog-crated-at{
  text-align: left; font-size: 12px; color: #808080;
  margin: 3px;

}

.main-blog-title {
  text-align: left; font-size: 14px; padding: 1px 0 3px; line-height: 23px; color: #333;
  margin: 3px;
}
</style>
