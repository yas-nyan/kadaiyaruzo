<template>
  <div class="workingSpace">
    <b-card no-body>
      <b-tabs card>
        <!-- Render Tabs -->
        <b-tab :title="`Tab ${i}`" v-for="i in tabs" :key="i">
          Tab Contents {{i}}
          aaaaaaaaaaaaaaa

          <b-input class="">
          </b-input>
          <b-btn size="sm" variant="danger" class="float-right" @click="()=>closeTab(i)">
            Close tab
          </b-btn>
        </b-tab>

        <!-- New Tab Button (Using tabs slot) -->
        <b-nav-item slot="tabs" @click.prevent="newTab" href="#">
          +
        </b-nav-item>

        <b-nav-item slot="tabs" class="danger" href="#">
          <b-btn size="sm" variant="danger" @click="()=>closeAllTabs()">
            全てのタブを削除する
          </b-btn>
        </b-nav-item>

        <!-- Render this if no tabs -->
        <div slot="empty" class="text-center text-muted">
          There are no open tabs
          <br> Open a new tab using + button.
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
  methods: {
    closeTab(x) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] === x) {
          this.tabs.splice(i, 1);
        }
      }
    },
    newTab() {
      this.tabs.push(this.tabCounter++);
    },
    closeAllTabs() {
      let is_ok = confirm("本当によろしいですか？");
      alert(this.tabs);
      if (is_ok) {
        this.tabs = [];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.workingSpace {
  height: 500px;
}
</style>
