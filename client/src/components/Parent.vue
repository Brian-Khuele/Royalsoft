<template>
  <DataTable :endPoint="endPoint" :optionColumns="optionColumns" tableTitle="Parents/Guardians">
    <template v-slot="p">
      <component
        :is="DialogComponent"
        :selectedUser="p.selectedPerson"
        :showDialog="p.showDialog"
        @closeDialog="p.closeDialog"
      />
    </template>
  </DataTable>
</template>

<script>
  import DataTable from './dataTable/DataTable';

  export default {
    components: {
      DataTable,
    },
    data() {
      return {
        fullWidth: false,
        endPoint: 'http://localhost:3001/parent',
        DialogComponent: 'AdminManagement',
        optionColumns: [
          'grade',
          'gender',
          'id_type',
          'birth_country',
          'home_language',
          'race',
          'combination',
          'status',
        ],
      };
    },
    methods: {
      //
    },
  };
</script>

<style lang="scss" scoped></style>
