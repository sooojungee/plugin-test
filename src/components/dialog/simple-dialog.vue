<template>
  <div class = "dialog-area" v-if="isShow">
    <div class="dialog">
      <div class="header">
        <h1> Text </h1>
      </div>
      <div class="content">
        <div class="resolve"> resolve </div>
      </div>
    </div>
  </div>
</template>
<script src="./simple-dialog.ts"/>
<style lang="scss">
.dialog-area {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
}

.dialog {
  width: 400px;
  height: 200px;
  padding: 16px 8px;
  border: 2px solid #ccc;
  background: white;
}
.header {
  height: 150px;
  width: 100%;
  line-height: 70px;
}

.content {
  width: 100%;
  padding: 4px 8px;
  display: flex;
}

.resolve {
  cursor: pointer;
  width: 100px;
  height: 100%;
  background: #aaa;
  color: white;
  padding: 4px;
}

</style>
