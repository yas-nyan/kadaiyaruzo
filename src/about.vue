<template>
    <b-jumbotron class="about" bg-variant="light"  fluid>
        <template slot="header">
            かだいやるぞう
        </template>
        <template slot="lead">
            シンプルなマルチノート文字数カウンター
        </template>
        <hr class="my-4">
        <p class="text-md-left">
            同時に多数のタブを開きながら編集可能なWEBエディターです。
        </p>
        <p class="text-sm-left">
            作業中のデータはブラウザに自動保存されます。
            目標文字数を設定することでグラフィカルに進捗状況を表示します。
        </p>
        <p class="text-sm-left">
            <small class="text-danger">商用目的ではありません。アプリケーションの不具合による責任は負いかねます。</small>
        </p>
        <p class="text-sm-left">
            クリエイティブ・コモンズです。ご意見ご要望はgithubからどうぞ。
            <a class="btn btn-info github-link"  v-bind:href="this.$config.github">Github <v-icon class="github" name="github"></v-icon></a>
        </p>
    </b-jumbotron>
</template>

<script>
export default {
  name: "about",
  components: {},
  data() {
    return {
      hoge: "hogehoge"
    };
  }
};
</script>

<style lang="scss">
.about {
    margin-bottom: 0;
}
.github {
    height: 20px;
}

</style>
