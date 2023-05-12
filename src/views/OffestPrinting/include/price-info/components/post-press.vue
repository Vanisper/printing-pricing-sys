<script lang="ts" setup>
enum Form {
  binding = "装订",
  lamination = "覆膜",
  glazing = "上光",
  bronzing = "烫金",
  embossing = "压凹凸",
  framing = "装裱",
}
type FormKeys = keyof typeof Form; // 获取 Form 的所有键名
type FormValues = `${Form}`; // 获取 Form 的所有值
type FormObject = Record<FormKeys, Record<string, string | number | boolean> | any>; // 将键名转换为一个对象类型，值为 string
const form = reactive<FormObject>({
  binding: "",
  lamination: {
    label: false,
    value: 0.5
  },
  glazing: {
    label: false,
    value: 0.5
  },
  bronzing: {
    label: false,
    value: 0.5
  },
  embossing: {
    label: false,
    value: 0.18
  },
  framing: {
    label: false,
    value: 20
  },
});

const binding = ref([
  { label: "骑马订", value: 0.5 },
  { label: "胶订", value: 1 },
]);

const emits = defineEmits(["afterPrint"])
const submit = () => {
  emits("afterPrint", form)
}
watch(form, () => {
  submit()
}, {
  immediate: true
})

</script>

<template>
  <h5 style="margin-left: 30px">印后加工</h5>
  <el-form inline :model="form" label-width="120px">
    <el-form-item :label="Form.binding">
      <el-select v-model="form.binding" :placeholder="Form.binding">
        <el-option v-for="(item, _index) in binding" :label="item.label" :value="item.value" />
      </el-select>
    </el-form-item>
    <el-form-item :label="Form.lamination">
      <el-radio-group v-model="form.lamination.label">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item :label="Form.glazing">
      <el-radio-group v-model="form.glazing.label">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item :label="Form.bronzing">
      <el-radio-group v-model="form.bronzing.label">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item :label="Form.embossing">
      <el-radio-group v-model="form.embossing.label">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item :label="Form.framing">
      <el-radio-group v-model="form.framing.label">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">否</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<style lang="less" scoped></style>
