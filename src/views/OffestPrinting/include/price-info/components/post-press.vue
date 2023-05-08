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
type FormObject = Record<FormKeys, string | number | boolean>; // 将键名转换为一个对象类型，值为 string
const form = reactive<FormObject>({
  binding: "",
  lamination: false,
  glazing: false,
  bronzing: false,
  embossing: false,
  framing: false,
});

const binding = ref([
  { label: "骑马订", value: "001" },
  { label: "胶订", value: "002" },
]);
</script>

<template>
  <h5 style="margin-left: 30px">印后加工</h5>
  <el-form inline :model="form" label-width="120px">
    <el-form-item :label="Form.binding">
      <el-select v-model="form.binding" :placeholder="Form.binding">
        <el-option
          v-for="(item, _index) in binding"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item :label="Form.lamination">
      <el-radio-group v-model="form.lamination">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item :label="Form.glazing">
      <el-radio-group v-model="form.glazing">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item :label="Form.bronzing">
      <el-radio-group v-model="form.bronzing">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item :label="Form.embossing">
      <el-radio-group v-model="form.embossing">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item :label="Form.framing">
      <el-radio-group v-model="form.framing">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">否</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<style lang="less" scoped></style>
