<template>
  <v-container>
    <h4 style="font-weight: bolder; text-align: center">Tools</h4>
    <PlaceHolder />
    <p style="color: #a4b2b2">FAVOURITES</p>
    <ToolCard
      title="ausculto for heart"
      v-bind:fav="true"
      content="Collect your heart sound through our phone-based intelligent stethoscope."
      destination="/ausculto"
    ></ToolCard>
    <PlaceHolder />
    <ToolCard
      title="ausculto for lung"
      v-bind:fav="true"
      content="Collect your lung sound through our phone-based intelligent stethoscope."
      destination="/ausculto"
    ></ToolCard>
    <PlaceHolder />
    <p style="color: #a4b2b2">ALL</p>
    <ToolCard
      title="Wound care"
      v-bind:fav="false"
      content="Keep tracking your wound condition and consult doctors."
    ></ToolCard>
    <PlaceHolder />
    <ToolCard
      title="Blood glucose level"
      v-bind:fav="false"
      content="Record and track your blood glucose level. (*Additional device is needed)"
    ></ToolCard>
    <PlaceHolder />
    <ToolCard
      title="Blood pressure"
      v-bind:fav="false"
      content="Record and track your blood pressure. (*Additional device is needed)"
    ></ToolCard>
    <div style="width: 100%; height: 40px"></div>
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
