<template>
  <div class="workingSpace">
    <b-card no-body>
      <b-tabs card>
        <!-- Render Tabs -->
        <b-tab :title="`${tab.title}`" v-for="tab in tabs" :key="tab.id">
          <b-row>
            <b-col lg="1">
              <label :for="`title-${tab.id}`">タイトル:</label>
            </b-col>
            <b-col lg="4">
              <b-input :id="`title-${tab.id}`" class="" v-model="tab.title"></b-input>
            </b-col>
            <b-col lg="1">
              <label :for="`target-${tab.id}`" >目標数:</label>
            </b-col>
            <b-col lg="1">
              <b-input :id="`target-${tab.id}`" class="" v-model="tab.target" type="number"></b-input>
            </b-col>
            <b-col lg="2">
              現在の文字数：{{tab.content.length}}
            </b-col>
            <b-col lg="1">
              <b-btn size="sm" variant="danger" class="float-right" @click="()=>closeTab(tab.id)">
                ノートを削除
              </b-btn>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <b-col lg="12">
              <b-form-textarea v-model="tab.content" placeholder="何か書きましょう" :rows="30" :max-rows="40">
              </b-form-textarea>
            </b-col>
          </b-row>

        </b-tab>

        <!-- New Tab Button (Using tabs slot) -->
        <b-nav-item slot="tabs" @click.prevent="newTab" href="#">
          +
        </b-nav-item>

        <b-nav-item slot="tabs" class="danger" href="#">
          <b-btn size="sm" variant="danger" @click="()=>closeAllTabs()">
            全てのノートを削除する
          </b-btn>
        </b-nav-item>

        <!-- Render this if no tabs -->
        <div slot="empty" class="text-center text-muted">
          ノートがありません
          <br> + ボタンから新しいノートを作成してください．
        </div>
      </b-tabs>
    </b-card>

  </div>
</template>

<script>
export default {
  name: "Workingspace",
  data() {
    return {
      tabs: [],
      tabCounter: 0
    };
  },
  created: function() {
    this.apply();
  },
  watch: {
    tabs: {
      handler: function() {
        //localstorageにtabsを保存
        localStorage.setItem("data", JSON.stringify(this.tabs));
        //counterも保存
        localStorage.setItem("counter", this.tabCounter);
        return this.tabs;
      },
      deep: true
    },
    tabCounter: function() {
      localStorage.setItem("counter", this.tabCounter);
      return this.tabCounter;
    }
  },
  methods: {
    closeTab(id) {
      for (let index in this.tabs) {
        if (this.tabs[index].id === id) {
          this.tabs.splice(index, 1);
        }
      }
    },
    newTab() {
      //this.tabs.push(this.tabCounter++);
      this.tabs.push({
        id: this.tabCounter++,
        title: "新しいノート",
        content: "",
        updated_at: new Date().toLocaleString(),
        target: 0
      });
    },
    closeAllTabs() {
      let is_ok = confirm("本当によろしいですか？");
      alert(this.tabs);
      if (is_ok) {
        this.tabs = [];
      }
    },
    apply() {
      try {
        let old_tabs = JSON.parse(localStorage.getItem("data"));
        let old_counter = Number(localStorage.getItem("counter"));
        this.tabs = old_tabs;
        this.tabCounter = old_counter;
      } catch (e) {
        console.log("無いよ");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.workingSpace {
  height: 500px;
  label {
    vertical-align: middle;
  }
}
</style>
