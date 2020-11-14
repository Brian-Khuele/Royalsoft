<template>
	<div class="divLearners">
		<p>Parents & Guardians</p>
		<div class="searchFilters">
			<q-input
				outlined
				placeholder="Universal search"
				dense
				v-model="filter"
			>
				<template v-slot:prepend>
					<q-icon name="search" />
				</template>
			</q-input>
		</div>

		<div>
			<q-table
				dense
				title="Parents & Guardians"
				:data="data"
				:columns="columns"
				:visible-columns="visibleColumns"
				no-results-label="Search didn't return any result, remember you can search on any column ;)"
				no-data-label="No information found...contact admin if you don't understand this message :)"
				row-key="name"
				class="tableLearners"
			></q-table>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      filterMsg: '',
      filter: '',
      options: [],
      model: '',
      columns: [],
      data: [],
      visibleColumns: [],
    };
  },
  methods: {},
  mounted() {
    // get all the learners in the school
    this.$axios
      .get(
        'https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/parents',
      )
      .then((response) => {
        this.columns = Object.keys(response.data[0]).map((column) => ({
          name: column,
          label: column
            .split('_')
            .join(' ')
            .toUpperCase(),
          field: column,
          sortable: true,
          align: 'left',
        }));

        this.visibleColumns = this.columns.map((column, index) => (index < this.columns.length - 1 ? column.name : ''));

        this.data = response.data;
      })
      .catch((error) => {
        //console.log(error);
      });
  },
};
</script>

<style lang="css" scoped>
</style>
