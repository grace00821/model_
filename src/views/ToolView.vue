<template>
  <v-container>
    <v-card class="mx-auto" elevation="4">
      <v-toolbar color="teal">
        <v-btn icon="mdi-menu"></v-btn>

        <v-toolbar-title>Tools</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon="mdi-magnify"></v-btn>
      </v-toolbar>
      <v-list>
        <v-list-subheader>RECENT</v-list-subheader>
        <v-list-item
          v-for="(item, i) in items.slice(0, 2)"
          :key="i"
          :value="item"
          active-color="primary"
          rounded="shaped"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
        <v-list-subheader>ALL</v-list-subheader>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          active-color="primary"
          rounded="shaped"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ToolView",
  data: () => ({
    selectedItem: 1,
    items: [
      { text: "ausculto", icon: "mdi-stethoscope" },
      { text: "WoundCare", icon: "mdi-camera" },
      { text: "AnOtherAwesomeFunction", icon: "mdi-octagram" },
      { text: "AnOtherAwesomeFunction2", icon: "mdi-octagram" },
      { text: "AnOtherAwesomeFunction3", icon: "mdi-octagram" },
    ],
  }),
};
</script>

<style scoped></style>
