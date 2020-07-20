<template>
	<div>
		<q-dialog v-model="fullWidth" full-width full-height>
			<q-card>
				<q-card-section>
					<div class="text-h6">
						Online application management
						<q-card-actions align="right">
							<q-btn flat label="Close" @click="closeDialog" />
						</q-card-actions>
					</div>
				</q-card-section>

				<q-card-section class="q-pt-none">
					<q-tabs
						v-model="tab"
						dense
						class="text-grey"
						active-color="primary"
						indicator-color="primary"
						align="justify"
						narrow-indicator
					>
						<q-tab name="learner" label="Learner information" />
						<q-tab name="parent" label="Parent information" />
						<q-tab name="status" label="Application status" />
						<q-tab
							name="subjects"
							label="Learner selected subjects"
						/>
					</q-tabs>

					<q-separator />

					<q-tab-panels v-model="tab" animated full-height>
						<q-tab-panel name="learner">
							<ApplicationLearner :props="selectedApplication" />
						</q-tab-panel>

						<q-tab-panel name="parent">
							<ApplicationParent :props="selectedApplication" />
						</q-tab-panel>

						<q-tab-panel name="status">
							<ApplicationStatus :props="selectedApplication" />
						</q-tab-panel>

						<q-tab-panel name="subjects">
							<ApplicationSubjects :props="selectedApplication" />
						</q-tab-panel>
					</q-tab-panels>
				</q-card-section>
			</q-card>
		</q-dialog>
	</div>
</template>

<script>
	import ApplicationLearner from "./ApplicationLearner";
	import ApplicationStatus from "./ApplicationStatus";
	import ApplicationSubjects from "./ApplicationSubjects";
	import ApplicationParent from "./ApplicationParent";

	export default {
		name: "ApplicationManagement",
		components: {
			ApplicationLearner,
			ApplicationStatus,
			ApplicationSubjects,
			ApplicationParent
		},
		props: {
			selectedApplication: {
				type: Object,
				required: true
			},
			showDialog: {
				type: Boolean,
				required: true
			}
		},
		data() {
			return {
				tab: "update"
			};
		},
		computed: {
			fullWidth: {
				get: function() {
					return this.showDialog;
				},
				set: function(val) {
					this.$emit("closeDialog", val);
				}
			}
		},
		methods: {
			closeDialog() {
				this.$emit("closeDialog", false);
			}
		}
	};
</script>

<style lang="sass" scoped>

</style>