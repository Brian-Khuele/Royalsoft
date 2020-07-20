<template>
	<div class="col">
		<div class="row">
			<div class="q-pa-lg subjects">
				Learner subjects
				<q-option-group
					v-model="groupLearnerSubjects"
					:options="learnerSubjects"
					color="primary"
					type="checkbox"
					keep-color
				/>
			</div>
			<div class="q-pa-lg subjects">
				Available subjects
				<q-option-group
					v-model="groupLearnerSubjects"
					:options="availableSubjects"
					color="primary"
					type="checkbox"
					keep-color
				/>
			</div>
		</div>
		<div style="margin-top: 10px">
			<q-btn
				@click="submit"
				label="Update subjects"
				color="primary"
			></q-btn>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	export default {
		name: "LearnerSubjects",
		props: {
			props: {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				groupLearnerSubjects: [],
				groupAvailableSubjects: [],
				availableSubjects: [],
				learnerSubjects: [],
				learner: {}
			};
		},
		computed: {
			...mapGetters("module", ["getSubjects", "getGrades"])
		},
		methods: {
			submit() {
				try {
					//send selected subjects to the server for updated
					this.$axios
						.post(
							`https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/learner/subjects/${this.props.student_number}`,
							{
								student_number: this.props.student_number,
								subject_id: this.groupLearnerSubjects
							}
						)
						.then(response => {
							this.$q.notify({
								message: "response: " + JSON.stringify(response)
							});
						})
						.catch(error => {
							this.$q.notify({
								message: "error: " + JSON.stringify(error),
								color: "red"
							});
						});
				} catch (error) {
					this.$q.notify({
						message: "error: " + JSON.stringify(error),
						color: "red"
					});
				}
			}
		},
		mounted() {
			try {
				this.$axios
					.get(
						`https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/learner/subjects/${this.props.student_number}`
					)
					.then(response => {
						this.learnerSubjects = response.data.map(subjectObject => {
							this.groupLearnerSubjects.push(
								subjectObject.subject_id
							);
							return {
								label: subjectObject.subject_desc,
								value: subjectObject.subject_id
							};
						});
						//set system subjects and filter subjects student already has
						this.availableSubjects = this.getSubjects
							.map(subject => {
								return {
									label: subject.subject_desc,
									value: subject.subject_id
								};
							})
							.filter(subject => {
								return !this.groupLearnerSubjects.includes(
									subject.value
								);
							});
					})
					.catch(error => {
						this.$q.notify({
							message: JSON.stringify(error),
							color: "red"
						});
					});
			} catch (error) {}
		}
	};
</script>

<style lang="scss" scoped>
	.q-pa-lg,
	.row {
		border: 1px solid white !important;
		flex-grow: 1;
		color: white;
		border-radius: 10px;

		> * {
			border: none !important;
		}
	}
</style>