<!--
    系统名称和Logo组件
-->
<template>
  <div class="system-logo">
    <img v-if="icon" :src="icon" />
    <img v-else src="@/assets/img/logo.png" alt="logo" />

    <a-tooltip>
      <template #title>
        <span>{{ tempTitle || oneTitle || title || '业务基础平台' }}{{ secondTitle }}</span>
      </template>
      <div :class="{ column: !horizontal }" v-if="!collapsed" style="">
        <span :style="mainTitleStyle">
          {{ tempTitle || oneTitle || title || '业务基础平台' }}
        </span>
        <span v-if="secondTitle" :style="minorTitleStyle">
          {{ secondTitle }}
        </span>
      </div>
    </a-tooltip>
    <span class="tag-box">
      <a-tag :color="secretLevelObj.sercetLevelColor">{{ secretLevel }}</a-tag>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useLogoConfig } from '@/utils/hooks/useLogoConfig';
defineProps({
  /**默认的名称 */
  title: { type: String },
  /**是否折叠模式 */
  collapsed: { type: Boolean, default: false },
  /**标题布局模式 ture 为水平，false 为垂直*/
  horizontal: { type: Boolean }
});
// 修改左上角标题密级跟随public/config.js中的配置 20250208 by于小耘
// const { secretLevelObj, icon, oneTitle, secondTitle, mainTitleStyle, minorTitleStyle } =
//   useLogoConfig();
const { secretLevelObj, icon, mainTitleStyle, minorTitleStyle } = useLogoConfig();
const secretLevel = window.$config.secretLevel;
const oneTitle = window.$config.appName;
const secondTitle = '';
const tempTitle = window.$config.appName;
</script>

<style lang="less" scoped>
.system-logo {
  display: flex;
  align-items: center;
  width: auto;
  .tag-box {
    display: inline-flex;
    span {
      font-size: 12px;
      padding: 0 8px;
      border-radius: 12px;
      display: inline-block;
      text-align: center;
      font-weight: normal;
      margin-bottom: 14px;
      margin-left: 6px;
    }
  }
  img {
    max-width: 32px;
    max-height: 32px;
    margin-right: 6px;
  }
  .column {
    display: block;
    width: 160px;
    height: 32px;
    line-height: 32px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #fff;
    padding-right: 30px;
  }
}
</style>
