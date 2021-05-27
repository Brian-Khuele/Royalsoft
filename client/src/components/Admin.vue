<template>
  <DataTable :endPoint="endPoint" :optionColumns="optionColumns" tableTitle="Staff members">
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
  import AdminManagement from './admin/AdminManagement';

  export default {
    components: {
      DataTable,
      AdminManagement,
    },
    data() {
      return {
        fullWidth: false,
        endPoint: 'http://localhost:3001/staff',
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
