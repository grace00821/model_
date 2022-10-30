<template>
  <v-container>
    <h4 style="font-weight: bolder; text-align: center">Tools</h4>
    <PlaceHolder />
    <p1 style="color: #a4b2b2">FAVOURITES</p1>
    <PlaceHolder />
    <ToolCard title="ausculto for heart"></ToolCard>
    <PlaceHolder />
    <ToolCard title="ausculto for lung"></ToolCard>
    <PlaceHolder />
    <p1 style="color: #a4b2b2">ALL</p1>
    <PlaceHolder />
    <ToolCard title="Wound care"></ToolCard>
  </v-container>
</template>

<script>
import ToolCard from "@/components/ToolCard";
import PlaceHolder from "@/components/PlaceHolder";
export default {
  name: "ToolView",
  components: {
    ToolCard,
    PlaceHolder,
  },
};
</script>

<style scoped></style>
