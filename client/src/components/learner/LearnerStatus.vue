<template>
	<div class="q-pa-md">
		<q-form
			@submit.prevent="onSubmit"
			@reset="onReset"
			class="column q-gutter-lg"
		>
			<q-toggle
				v-model="learner.status"
				label="Change learner''s status"
				class="q-mb-md"
			/>
			<q-input
				v-model="learner.student_number"
				ref="student_number"
				outlined
				hint="Enter student number"
				hide-hint
				label="Student number"
				dense
				readonly
				lazy-rules
				:rules="[
					val => (val && val.length > 0) || 'value may not be empty'
				]"
				input-class="dataInput"
				label-color="white"
			/>
			<q-slide-transition>
				<q-input
					v-model="reason"
					type="textarea"
					ref="reason"
					outlined
					label="Type in reason for de-registering learner"
					lazy-rules
					:rules="[
						val =>
							(val && val.length > 0) || 'value may not be empty'
					]"
					input-class="dataInput"
					label-color="white"
				/>
			</q-slide-transition>
		</q-form>
		<div class="btnActions">
			<q-btn
				label="Save"
				color="primary"
				@click="onSubmit"
				:disable="learner.student_number == 0"
			/>
			<q-btn
				label="Reset"
				color="primary"
				flat
				class="q-ml-sm"
				@click="onReset"
			/>
		</div>
	</div>
</template>

<script>
	//import { mapGetters } from "vuex";

	export default {
		name: "LearnerStatus",
		props: {
			props: {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				learner: {},
				reason: ""
			};
		},
		computed: {
			//...mapGetters("module", ["getLoggedInUser"])
		},
		methods: {
			onSubmit() {
				//send deactivation data to the server
				try {
					this.$axios
						.post(
							`https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/learner/status/${this.learner.student_number}`,
							{
								student_number: this.learner.student_number,
								reason: this.reason,
								status: this.learner.status
							}
						)
						.then(response => {
							this.$q.notify({
								message:
									"student status succesfully updated. Student is now: " +
									response.data.status
							});
						})
						.catch(error => {
							this.$q.notify({
								message:
									"status update unsuccessful" +
									JSON.stringify(error)
							});
						});
				} catch (error) {
					this.$q.notify({
						message: `error occured during status update ${error}`
					});
				}
			},
			onReset() {
				this.learner = {};
				this.reason = "";

				Object.keys(this.$refs).map(ref => {
					if (this.$refs[ref].hasOwnProperty("resetValidation"))
						this.$refs[ref].resetValidation();
				});

				this.learner.student_number = this.props.student_number;
			}
		},
		mounted() {
			this.learner = this.props;
		}
	};
</script>

<style lang="css" scoped>
</style>
