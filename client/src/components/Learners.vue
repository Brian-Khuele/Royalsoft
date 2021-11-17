<template>
  <DataTable :endPoint="endPoint" :optionColumns="optionColumns" tableTitle="All learners">
    <template v-slot="p">
      <component
        :is="DialogComponent"
        :selectedLearner="p.selectedPerson"
        :showDialog="p.showDialog"
        @closeDialog="p.closeDialog"
      />
    </template>
  </DataTable>
</template>

<script>
  import DataTable from './dataTable/DataTable';
  import LearnerManagement from './learner/LearnerManagement';

  export default {
    components: {
      DataTable,
      LearnerManagement,
    },
    data() {
      return {
        fullWidth: false,
        endPoint: 'http://localhost:3001/learner',
        DialogComponent: 'LearnerManagement',
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
