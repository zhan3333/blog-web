<template>
  <div>
    <el-row>
      <el-col>
        <!--header-->
        <el-row style="background-color: #fff; margin-bottom: 20px; height: 48px" type="flex" justify="center">
          <el-col style="margin: auto">
            <el-row type="flex" justify="end" :gutter="40">
              <el-col :span="2" :offset="20"><span @click="loginDialogFormVisible = true">登陆</span></el-col>
              <el-col :span="2"><span @click="registerDialogFormVisible = true">注册</span></el-col>
            </el-row>
          </el-col>
        </el-row>
        <!--body-->
        <el-row>
          <!--中间栏-->
          <el-col style="padding: 0px 20px; min-width: 700px;" :span="16" :offset="4" >
            <!--发布博客部分-->
            <el-row style="background-color: #fff; border-radius: 2px;">
              <el-col>
                <el-form :model="blog_form" style="margin: 10px;" ref="blog_form" :rules="blogFormRules">
                  <div style="text-align: left; padding: 4px; font-size: 18px; color: #1b7fb6">发布博客</div>
                  <el-form-item prop="title">
                    <el-input v-model="blog_form.title" size="mini" placeholder="标题"></el-input>
                  </el-form-item>
                  <el-form-item prop="content">
                    <el-input v-model="blog_form.content" autosize type="textarea" placeholder="内容"></el-input>
                  </el-form-item>
                  <el-form-item style="text-align: right">
                    <el-button @click="submitForm('blog_form')" size="mini" round>发布</el-button>
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
                            {{blog.user_name}}
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col class="main-blog-crated-at">
                            {{blog.created_at}}
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col class="main-blog-title" @click="click_blog(blog.id)">
                            {{blog.title}}
                          </el-col>
                        </el-row>
                      </el-col>
                    </el-row>
                  </div>
                  <!--博客正文-->
                  <div style="text-align: left" @click="click_blog(blog.id)">
                    {{blog.content}}
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-col>
          <!--右边栏-->
          <el-col :span="4">
            <el-row style="margin-right: 20px; width: 230px; border-radius: 2px;">
              <el-col>
                <div style="height: 75px; background-image: url(../../static/background.jpg)">
                  <img src="../../static/default.jpeg"
                       style="border-radius: 50%; height: 100px; width: 100px; margin-top: 10px;">
                  <div style="color: #333; font-size: 14px;font-weight: bold;">{{self_info.name}}</div>
                </div>
                <div style="height: 90px; background-color: #fff"></div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>

    </el-row>
    <!--登陆弹出框-->
    <el-dialog title="登陆" :visible.sync="loginDialogFormVisible">
      <el-form :model="login_form" :rules="loginFormRules" ref="login_form">
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="login_form.email" auto-complete="on" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="login_form.password" type="password" auto-complete="on" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="loginDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('login_form')">确 定</el-button>
      </div>
    </el-dialog>
    <!--注册弹出框-->
    <el-dialog title="注册" :visible.sync="registerDialogFormVisible">
      <el-form :model="register_form" ref="register_form" :rules="registerFormRules">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="register_form.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="register_form.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="register_form.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="重复密码" prop="repeat_password">
          <el-input v-model="register_form.repeat_password" type="password" placeholder="请再次输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="registerDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('register_form')">确 定</el-button>
      </div>
    </el-dialog>
    <!--博客详情弹出框-->
    <el-dialog :title="open_blog_info.title" :visible.sync="blogInfoDialogFormVisible">
      <el-row>
        <el-col>
          <div>{{open_blog_info.content}}</div>
        </el-col>
      </el-row>
      <el-row v-for="comment in open_blog_info.comment_list">
        <el-col>{{comment.content}}</el-col>
      </el-row>
    </el-dialog>
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
      let validateRepeatPassword = (rule, value, callback) => {
        // todo 自定义验证未生效
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.register_form.repeat_password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        blog_list: [],
        self_info: {
          id: null,
          name: '',
          email: ''
        },
        blog_form: {
          content: '',
          title: ''
        },
        login_form: {
          email: '',
          password: ''
        },
        register_form: {
          name: '',
          email: '',
          password: '',
          repeat_password: ''
        },
        open_blog_info: {
          title: '',
          content: '',
          user_name: '',
          created_at: '',
          comment_list: [
            {
              id: null,
              content: '111'
            },
            {
              id: null,
              content: '222'
            }
          ]
        },
        loginDialogFormVisible: false,
        registerDialogFormVisible: false,
        blogInfoDialogFormVisible: false,
        registerFormRules: {
          name: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 6, message: '用户名最短4位数', trigger: 'blur'}
          ],
          email: [
            {required: true, message: '请输入邮箱', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, message: '密码最短6位数', trigger: 'blur'}
          ],
          repeat_password: [
            {min: 6, message: '密码最短6位数', trigger: 'blur'},
            {validator: validateRepeatPassword, trigger: 'blur'}
          ]
        },
        loginFormRules: {
          email: [
            {required: true, message: '请输入邮箱', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, message: '密码最短6位数', trigger: 'blur'}
          ]
        },
        blogFormRules: {
          content: [
            {min: 6, message: '内容最短6个字符', trigger: 'blur'}
          ]
        }
      }
    },
    created () {
      this.flush_blog_list()
      this.flush_self_info()
    },
    methods: {
      click_blog (blogId) {
        console.log('blog id is ' + blogId)
        this.request.post('blog/show', {id: blogId})
          .then((data) => {
            this.open_blog_info = data
            this.blogInfoDialogFormVisible = true
          })
          .catch(() => {
            this.$message.error('请求数据失败')
          })
      },
      flush_blog_list () {
        /**
         * 刷新博客列表
         */
        this.request.post('blog/index')
          .then((data) => {
            this.blog_list = data
          })
          .catch((err) => {
            console.error(err)
          })
      },
      flush_self_info () {
        console.log('self_info')
//        if (!localStorage.getItem('token')) return false
        this.request.get('user/show')
          .then((data) => {
            this.self_info = data
          })
          .catch((err) => {
            console.error(err)
          })
      },
      submit_blog () {
        /**
         * 提交博客表单数据
         */
        console.log('blog_submit!')
      },
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (!valid) {
            this.$message.error('表单未填写完整')
            return false
          } else {
            if (formName === 'register_form') {
              /**
               * 注册操作
               */
              this.request.post('user/register', this.register_form)
                .then((data) => {
                  this.$message.success('注册成功')
                  this.registerDialogFormVisible = false
                })
                .catch((err) => {
                  let errInfo = err.error_data
                  this._.forEach(errInfo, (value, key) => {
                    this.$message.warning(key + ': ' + value)
                  })
                })
            }
            if (formName === 'login_form') {
              /**
               * 登陆操作
               */

              this.request.post('user/login', this.login_form)
                .then((data) => {
                  this.$message.success('登陆成功')
                  this.loginDialogFormVisible = false
                  this.flush_self_info()
                })
                .catch((err) => {
                  if (err.error_data) {
                    let errInfo = err.error_data
                    this._.forEach(errInfo, (value, key) => {
                      this.$message.warning(key + ': ' + value)
                    })
                  } else {
                    this.$message.error(err.msg)
                  }
                })
            }
            if (formName === 'blog_form') {
              this.request.post('blog/create', this.blog_form)
              /**
               * 发布博客
               */
                .then((data) => {
                  this.$message.success('发布成功')
                  this.blog_form.content = ''
                  this.blog_form.title = ''
                  this.flush_blog_list()
                })
                .catch((err) => {
                  if (err.error_data) {
                    let errInfo = err.error_data
                    this._.forEach(errInfo, (value, key) => {
                      this.$message.warning(key + ': ' + value)
                    })
                  } else {
                    this.$message.error(err.msg)
                  }
                })
            }
          }
        })
      }
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
