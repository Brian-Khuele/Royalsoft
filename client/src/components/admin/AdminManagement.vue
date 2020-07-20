<template>
	<div>
		<q-dialog v-model="fullWidth" full-width full-height>
			<q-card>
				<q-card-section>
					<div class="text-h6">
						User management
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
						<q-tab name="edit" label="Update user information" />
						<q-tab name="status" label="User status" />
						<q-tab name="roles" label="User roles" />
					</q-tabs>

					<q-separator />

					<q-tab-panels v-model="tab" animated full-height>
						<q-tab-panel name="edit">
							<AdminUpdate :props="selectedUser" />
						</q-tab-panel>

						<q-tab-panel name="status">
							<AdminStatus :props="selectedUser" />
						</q-tab-panel>

						<q-tab-panel name="roles">
							<AdminRoles :props="selectedUser" />
						</q-tab-panel>
					</q-tab-panels>
				</q-card-section>
			</q-card>
		</q-dialog>
	</div>
</template>

<script>
	import AdminRoles from "./AdminRoles";
	import AdminStatus from "./AdminStatus";
	import AdminUpdate from "./AdminUpdate";

	export default {
		name: "AdminManagement",
		components: {
			AdminRoles,
			AdminStatus,
			AdminUpdate
		},
		props: {
			selectedUser: {
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
				tab: "edit"
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