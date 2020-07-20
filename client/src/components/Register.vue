<template>
	<div class="q-pa-md">
		<h5>Register new learner</h5>

		<q-form
			@submit.prevent="onSubmit"
			@reset="onReset"
			class="row q-gutter-lg"
		>
			<div class="col">
				<q-input
					v-model="learner.idNumber"
					ref="idNumber"
					outlined
					hint="Enter id/passport number"
					hide-hint
					label="ID/Passport"
					dense
					lazy-rules
					:rules="[
						val =>
							(val && val.length > 0) ||
							'Learner Id/Passport may not be empty'
					]"
					input-class="dataInput"
					label-color="white"
				/>
				<q-input
					v-model="learner.name"
					ref="learnerName"
					outlined
					hint="The learner's name"
					hide-hint
					label="Name"
					dense
					lazy-rules
					:rules="[
						val =>
							(val && val.length > 0) ||
							`Leaner's name may not be blank`
					]"
				/>
				<q-input
					v-model="learner.surname"
					ref="learnerSurname"
					outlined
					hint="The learner's surname"
					hide-hint
					label="Surname"
					dense
					lazy-rules
					:rules="[
						val =>
							(val && val.length > 0) ||
							`Learner's surname may not be blank`
					]"
				/>
				<q-select
					v-model="selectGrade"
					ref="learnerGrade"
					outlined
					:options="Object.keys(grades)"
					label="Grade"
					hint="Select a grade"
					hide-hint
					dense
					lazy-rules
					:rules="[
						val =>
							(val && val.length > 0) ||
							'You have to specify a grade'
					]"
				/>
				<q-input
					v-model="learner.address.street"
					ref="learnerStreetAddress"
					outlined
					hint="street (e.g 31 Dover street)"
					hide-hint
					label="Address"
					dense
					lazy-rules
					:rules="[
						val =>
							(val && val.length > 0) || 'street may not be empty'
					]"
				/>

				<q-input
					v-model="learner.address.surburb"
					ref="surburb"
					outlined
					hint="Type in the surburb"
					hide-hint
					label="Surburb"
					dense
					lazy-rules
					:rules="[
						val =>
							(val && val.length > 0) ||
							'Surburb may not be empty'
					]"
				/>
				<q-input
					v-model="learner.address.city"
					ref="city"
					outlined
					hint="Type in the city"
					hide-hint
					label="City"
					dense
					lazy-rules
					:rules="[
						val =>
							(val && val.length > 0) || 'City may not be empty'
					]"
				/>
				<q-select
					v-model="learner.address.province"
					ref="province"
					:options="provinces"
					outlined
					hint="Select a Province"
					hide-hint
					label="Province"
					dense
					lazy-rules
					:rules="[
						val =>
							(val && val.length > 0) ||
							'Province may not be empty'
					]"
				/>
				<q-input
					v-model="learner.postal_code"
					ref="postal_code"
					outlined
					hint="Type in the postal code"
					hide-hint
					label="Postal Code"
					dense
					lazy-rules
					:rules="[
						val =>
							(val && val.length > 0) ||
							'Postal code may not be empty'
					]"
				/>
			</div>
			<div class="col"></div>
		</q-form>
		<div class="btnActions">
			<q-btn
				label="Save"
				color="primary"
				@click="onSubmit"
				:disable="learner.idNumber.length == 0"
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
		data() {
			return {
				learner: {
					idNumber: "",
					address: {}
				},
				grades: [],
				selectGrade: "",
				provinces: []
			};
		},
		computed: {
			//...mapGetters("module", ["getLoggedInUser"])
		},
		methods: {
			onSubmit() {
				//
			},
			onReset() {
				//Clear the data object

				this.learner = {
					idNumber: "",
					address: {}
				};

				Object.keys(this.$refs).map(ref => {
					if (this.$refs[ref].hasOwnProperty("resetValidation"))
						this.$refs[ref].resetValidation();
				});
			}
		}
	};
</script>

<style lang="css" scoped>
</style>
