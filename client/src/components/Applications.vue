<template>
	<div class="divLearners">
		<p>Online applications</p>
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
				title="Online applications"
				:data="data"
				:columns="columns"
				no-results-label="Search didn't return any result, remember you can search on any column ;)"
				no-data-label="No online applications received yet :("
				row-key="name"
				class="tableLearners"
			>
				<template v-slot:header="props">
					<q-tr :props="props">
						<q-th auto-width />
						<q-th
							v-for="col in props.cols"
							:key="col.name"
							:props="props"
						>
							{{ col.label }}
						</q-th>
					</q-tr>
				</template>

				<template v-slot:body="props">
					<q-tr :props="props" @click="rowClicked($event, props)">
						<q-td auto-width>
							<q-btn
								size="sm"
								color="accent"
								round
								dense
								@click.stop.prevent="
									props.expand = !props.expand
								"
								:icon="props.expand ? 'remove' : 'add'"
							/>
						</q-td>
						<q-td
							v-for="col in props.cols"
							:key="col.name"
							:props="props"
						>
							{{ col.value }}
						</q-td>
					</q-tr>

					<q-tr
						v-show="props.expand"
						:props="props"
						class="expandRow"
					>
						<q-td colSpan="100%">
							<div>
								<q-table
									title="Learner information"
									dense
									:data="[props.row.learner]"
									:columns="table(props.row.learner)"
									row-key
									hide-bottom
									hide-selected-banner
									hide-no-data
									hide-pagination
									table-class="learnerTable"
								>
								</q-table>
							</div>
						</q-td>
					</q-tr>
				</template>
			</q-table>
		</div>
		<ApplicationManagement
			:showDialog="showDialog"
			:selectedApplication="selectedApplication"
			@closeDialog="showDialog = false"
		/>
	</div>
</template>

<script>
	import ApplicationManagement from "./applications/ApplicationManagement";
	export default {
		name: "Applications",
		components: { ApplicationManagement },
		data() {
			return {
				filterMsg: "",
				filter: "",
				options: [],
				model: "",
				columns: [],
				data: [],
				visibleColumns: [],
				showDialog: false,
				selectedApplication: {}
			};
		},
		methods: {
			rowClicked(event, props) {
				//Show application management dialog
				this.showDialog = true;
				this.selectedApplication = this.data.filter(object => {
					return object.parent_id == props.row.parent_id;
				})[0];
			},
			table(input) {
				//console.log(input);
				return Object.keys(input).map(column => {
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
			}
		},
		mounted() {
			//get all the learners in the school
			this.$axios
				.get(
					"https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/applications"
				)
				.then(response => {
					this.columns = Object.keys(response.data[0].parent).map(key => {
						return {
							name: key,
							label: key
								.split("_")
								.join(" ")
								.toUpperCase(),
							field: row => {
								return row.parent[key];
							},
							sortable: true,
							align: "left"
						};
					});
					this.data = response.data;
				})
				.catch(error => {
					console.log(error);
				});
		}
	};
</script>

<style lang="scss" scoped>
	.expandRow:hover {
		background: none;
	}
</style>
