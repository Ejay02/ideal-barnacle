<template>
  <div
    class="m-auto flex rounded justify-center py-20 px-9 bg-gray-600 w-full h-full absolute"
  >
    <OrganizationChart :value="data">
      <template #default="slotProps">
        <span class="bg-yellow-300">{{ slotProps.node.data.label }}</span>
      </template>
    </OrganizationChart>
  </div>
</template>

<script>
import OrganizationChart from "primevue/organizationchart";
import 'primevue/resources/primevue.min.css';                 //core css


export default {
  name: "Org Chart",

  data() {
    return {
      data: {
        key: "0",
        data: { label: "F.C. Barcelona" },
        children: [
          {
            key: "0_0",
            data: { label: "Manchester United" },
            children: [
              {
                key: "0_0_0",
                data: { label: "Chelsea F.C." },
              },
              {
                key: "0_0_1",
                data: { label: "Arsenal F.C." },
              },
            ],
          },
          {
            key: "0_1",
            data: { label: "Real Madrid" },
            children: [
              {
                key: "0_1_0",
                data: { label: "Bayern Munich" },
              },
              {
                key: "0_1_1",
                data: { label: "Liverpool F.C." },
              },
            ],
          },
        ],
      },
    };
  },

  return: { OrganizationChart },
};
</script>

<style></style>
