<template>
  <AvicModal
    :visible="true"
    title="保存"
    width="960px"
    height="580px"
    :centered="true"
    @ok="handleOk"
    @cancel="closeModal"
  >
    <div class="form-content">
      <a-form ref="formRef" :model="form" v-bind="layout" :rules="rules" layout="horizontal">
        <a-form-item name="schemeType" label="模板类型" has-feedback>
          <div class="radio-group-wrapper">
            <a-radio-group v-model:value="form.schemeType" :auto-focus="true">
              <a-radio
                v-for="item in orderTypeOptionList"
                :key="item.lookupCode"
                :value="item.lookupCode"
              >
                {{ item.lookupName }}
              </a-radio>
            </a-radio-group>
          </div>
        </a-form-item>
        <a-form-item name="schemeName" label="模板名称" has-feedback>
          <a-input v-model:value="form.schemeName" placeholder="请输入模板名称" style="width: 280px" />
        </a-form-item>
      </a-form>
    </div>
  </AvicModal>
</template>

<script setup lang="ts">
import { saveMdsAdvancedQueryScheme } from '@/api/avic/mms/mds/MdsAdvancedQuerySchemeApi';

const props = defineProps({
  queryData: {
    type: Object,
    default: {}
  },
  tabName: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['close']);
const { proxy } = getCurrentInstance();
const form = ref({
  billNo: ''
});
const colLayout = proxy.$colLayout2; // 调用布局公共方法
const loading = ref(false);
const formRef = ref(null);
const layout = {
  labelCol: { flex: '0 0 140px' },
  wrapperCol: { flex: '1 1 0' }
};
const rules = {
  schemeTypeName: [
    { required: true, message: '模板类型不能为空', trigger: 'change' }
  ],
  schemeName: [
    { required: true, message: '模板名称不能为空', trigger: 'blur' }
  ]
};
const orderTypeOptionList = ref([]);
const menuUrl = ref('');
const lookupParams = [
  { fieldName: 'schemeType', lookUpType: 'MDS_SCHEME_TYPE' }
];

onMounted(() => {
  // 获取菜单
  const url = window.location.href.split('/');
  menuUrl.value = url[url.length - 2] + '/' + url[url.length - 1];
  // 通用代码
  getLookupList();
});


/** 获取通用代码  */
function getLookupList() {
  proxy.$getLookupByType(lookupParams, result => {
    orderTypeOptionList.value = result.schemeType;
  });
}

/**
 * 确定
 * */
const handleOk = () => {
  formRef.value.validate().then((validate) => {
    if (!validate) {
      return;
    }
    if (Object.keys(props.queryData).length === 0) {
      proxy.$message.error('请添加搜索条件！');
      return;
    }
    const data = {
      schemeTab: props.tabName ? props.tabName : null, // tab页
      schemeType: form.value.schemeType,               // 方案类型
      schemeName: form.value.schemeName,               // 方案名称
      queryCondition: JSON.stringify(props.queryData), // 方案内容/搜索条件
      secretLevel: '1',             // 密级
      schemeMenu: menuUrl.value                        // 菜单名称
    };
    saveMdsAdvancedQueryScheme(data)
      .then((res) => {
        if (res.success) {
          proxy.$message.success('保存成功！');
          closeModal();
        } else {
          loading.value = false;
        }
      })
      .catch(() => {
        loading.value = false;
        proxy.$message.error('保存失败！');
      });
  });
};


const closeModal = () => {
  emit('close');
};
</script>

<style scoped lang="less">
.editBorder {
  background: white;
  width: 80%;
  height: 95%;
  margin: 0 auto;
  border-radius: 10px;
  padding: 10px;
  border: #00000017;
  box-shadow: 0 2px 8px #00000017;
}

.content-wrapper {
  max-width: 960px;
  margin: 0 auto;
}

.form-content {
  margin-left: 50px;
  display: flex;
  flex-direction: column;
}

/* 使用::v-deep修饰符，确保样式正确覆盖到表单项内部元素 */
.a-form-item ::v-deep .ant-form-item-label > label {
  margin-right: 50px; /* 为标签文本与单选框组之间添加间距 */
}


/* 使用::v-deep修饰符，调整表单项标签宽度 */
.ant-row.ant-form-item {
  width: 800px; /* 自定义标签宽度，根据需要调整 */
  height: 40px;
  align-items: center;
}

.ant-radio-wrapper {
  width: 200px;
}

.a-radio-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* 单选框组内单选框之间的间距 */
}

.button-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 60px;
}
</style>
