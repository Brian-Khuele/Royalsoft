<template>
	<div class="divLearners">
		<p>List of all learners in the school</p>
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
				:loading="loading"
				dense
				title="Learners"
				:data="data"
				:columns="columns"
				:visible-columns="visibleColumns"
				no-results-label="Search didn't return any result, remember you can search on any column ;)"
				no-data-label="No Vdo information found...contact admin if you don't understand this message :)"
				row-key="name"
				class="tableLearners"
			>
				<template v-slot:body="props">
					<q-tr
						:props="props"
						class="tblRow"
						@click="rowClicked($event, props)"
					>
						<q-td
							v-for="col in props.cols"
							:props="props"
							:key="col.name"
							>{{ col.value }}</q-td
						>
					</q-tr>
				</template>
			</q-table>
		</div>

		<LearnerManagement
			:selectedLearner="selectedLearner"
			:showDialog="showDialog"
			@closeDialog="showDialog = false"
		/>
	</div>
</template>

<script>
	import LearnerManagement from "./learner/LearnerManagement";

	export default {
		components: { LearnerManagement },
		data() {
			return {
				filterMsg: "",
				filter: "",
				options: [],
				model: "",
				columns: [],
				data: [],
				visibleColumns: [""],
				loading: false,
				fullWidth: false,
				tab: "edit",
				selectedLearner: {},
				showDialog: false
			};
		},
		methods: {
			rowClicked(event, props) {
				this.showDialog = true;
				this.selectedLearner = this.data.filter(object => {
					return object.student_number == props.row.student_number;
				})[0];
			}
		},
		mounted() {
			//get all the learners in the school
			this.loading = true;
			this.$axios
				.get(
					"https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/learners"
				)
				.then(response => {
					this.columns = Object.keys(response.data[0]).map(column => {
						return {
							name: column,
							label: column
								.split("_")
								.join(" ")
								.toUpperCase(),
							field: column,
							sortable: true,
							align: "left"
						};
					});

					this.visibleColumns = this.columns.map((column, index) => {
						return index < this.columns.length - 1 ? column.name : "";
					});

					this.data = response.data;
				})
				.catch(error => {
					//showNotif from global state
					this.$q.notify({
						message: JSON.stringify(error)
					});
				})
				.finally(() => (this.loading = false));
		}
	};
</script>

<style lang="css" scoped>
</style>
