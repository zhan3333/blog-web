<template>
  <div>
    <el-container>
      <el-header>
        header
      </el-header>
      <el-container>
        <el-main>
          <el-row v-for="blog in blog_list">
            <el-col>
              <el-row>
                <el-col>{{blog.user_info.name}}</el-col>
              </el-row>
              <el-row>
                <el-col>{{blog.created_at}}</el-col>
              </el-row>
              <el-row>
                <el-col>{{blog.title}}</el-col>
              </el-row>
              <el-row>
                <el-col>{{blog.content}}</el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-main>
        <el-aside width="200px">aside</el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import ElCol from 'element-ui/packages/col/src/col'
  export default {
    components: {ElCol},
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
    }
  }
</script>
