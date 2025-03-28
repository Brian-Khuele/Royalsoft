<template>
	<div class="q-pa-md">
		<q-form
			@submit.prevent="onSubmit"
			@reset="onReset"
			class="row q-gutter-lg"
		>
			<div class="col">
				<q-input
					v-model="learner.student_number"
					ref="student_number"
					outlined
					hint="enter new id/passport"
					hide-hint
					label="Student number"
					dense
					readonly
					lazy-rules
					:rules="[
						(val) =>
							(val && val.length > 0) || 'value may not be empty',
					]"
					input-class="dataInput"
				/>
				<q-input
					v-model="learner.firstname"
					ref="firstname"
					outlined
					hint="The learner's name"
					hide-hint
					label="First name"
					dense
					lazy-rules
					:rules="[
						(val) =>
							(val && val.length > 0) || `Value may not be blank`,
					]"
				/>
				<q-input
					v-model="learner.lastname"
					ref="lastname"
					outlined
					hint="The learner's surname"
					hide-hint
					label="Last name"
					dense
					lazy-rules
					:rules="[
						(val) =>
							(val && val.length > 0) || `Value may not be blank`,
					]"
				/>
				<q-input
					v-model="learner.id_number"
					ref="id_number"
					outlined
					hint="Id or passport number"
					hide-hint
					label="Id/Passport number"
					dense
					lazy-rules
					:rules="[
						(val) =>
							(val && val.length > 0) || 'Value may not be blank',
					]"
				/>
				<q-select
					v-model="learner.grade"
					ref="grade"
					:options="getGrades"
					outlined
					hint="Select a grade"
					hide-hint
					label="Grade"
					dense
					lazy-rules
					:rules="[(val) => val || 'Value may not be empty']"
				/>
				<q-input
					v-model="learner.email"
					ref="email"
					outlined
					hint="bk@gmail.com"
					hide-hint
					label="Email"
					dense
					lazy-rules
					:rules="[
						(val) =>
							(val && val.length > 0) || 'Value may not be empty',
					]"
				/>
				<q-select
					v-model="learner.gender"
					ref="gender"
					:options="getGenders"
					outlined
					hint="Select a gender"
					hide-hint
					label="Gender"
					dense
					lazy-rules
					:rules="[
						(val) =>
							(val && val.length > 0) || 'Value may not be empty',
					]"
				/>
			</div>
			<div class="col">
				<q-input
					v-model="learner.cellphone_number"
					ref="cellphone_number"
					outlined
					hint="Type in the cellphone number"
					hide-hint
					label="Cellphone number"
					dense
					lazy-rules
					:rules="[
						(val) =>
							(val && val.length > 0) || 'Value may not be empty',
					]"
				/>
				<q-select
					v-model="learner.id_type"
					ref="id_type"
					:options="getIdTypes"
					outlined
					hint="Select an Id type"
					hide-hint
					label="Id type"
					dense
					lazy-rules
					:rules="[
						(val) =>
							(val && val.length > 0) || 'Value may not be empty',
					]"
				/>
				<q-select
					v-model="learner.birth_country"
					ref="birth_country"
					:options="getCountries"
					outlined
					hint="Select a birth country"
					hide-hint
					label="Birth country"
					dense
					lazy-rules
					:rules="[
						(val) =>
							(val && val.length > 0) || 'Value may not be empty',
					]"
				/>
				<q-select
					v-model="learner.home_language"
					ref="home_language"
					:options="getLanguages"
					outlined
					hint="Select a home language"
					hide-hint
					label="Home language"
					dense
					lazy-rules
					:rules="[
						(val) =>
							(val && val.length > 0) || 'Value may not be empty',
					]"
				/>
				<q-select
					v-model="learner.race"
					ref="race"
					:options="getRaces"
					outlined
					hint="Select a Race"
					hide-hint
					label="Race"
					dense
					lazy-rules
					:rules="[
						(val) =>
							(val && val.length > 0) || 'Value may not be empty',
					]"
				/>
				<q-select
					v-model="learner.combination"
					ref="combination"
					:options="getCombinations"
					outlined
					hint="Select a combination"
					hide-hint
					label="Combination"
					dense
					lazy-rules
					:rules="[
						(val) =>
							(val && val.length > 0) || 'Value may not be empty',
					]"
				/>
			</div>
		</q-form>
		<div class="btnActions">
			<q-btn
				label="Save"
				color="primary"
				@click="onSubmit"
				:disable="learner.student_number == 0"
				:loading="loading"
			/>
			<q-btn
				label="Clear all"
				color="primary"
				flat
				class="q-ml-sm"
				@click="onReset"
			/>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ApplicationLearner',
  props: {
    props: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      learner: {},
      loading: false,
    };
  },
  computed: {
    ...mapGetters('module', [
      'getRaces',
      'getRoles',
      'getCountries',
      'getGrades',
      'getSubjects',
      'getCombinations',
      'getGenders',
      'getIdTypes',
      'getLanguages',
    ]),
  },
  methods: {
    onSubmit() {
      // submit the updated changes
      this.loading = true;

      this.$axios
        .post(
          `https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/learners/${this.learner.student_number}`,
          this.learner,
        )
        .then((response) => {
          // show success notification
          if (response.statusText == 'OK') {
            this.$q.notify({
              message: 'successfully updated learner information',
            });
          }
        })
        .catch((error) => {
          // show error notification
          this.$q.notify({
            message: JSON.stringify(error),
          });
        })
        .finally(() => (this.loading = false));
    },
    onReset() {
      this.learner = {};

      Object.keys(this.$refs).map((ref) => {
        if (this.$refs[ref].hasOwnProperty('resetValidation')) { this.$refs[ref].resetValidation(); }
      });
      this.learner.student_number = this.props.student_number;
    },
  },
  mounted() {
    // copy props to mutable data object for updating
    this.learner = this.props.learner;
  },
};
</script>

<style lang="css" scoped>
</style>
