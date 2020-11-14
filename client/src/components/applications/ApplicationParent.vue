<template>
	<div class="q-pa-md">
		<q-form
			@submit.prevent="onSubmit"
			@reset="onReset"
			class="row q-gutter-lg"
		>
			<div class="col">
				<q-input
					v-model="parent.parent_id"
					ref="parent_id"
					outlined
					hint="enter new id/passport"
					hide-hint
					label="Parent Id"
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
					v-model="parent.firstname"
					ref="firstname"
					outlined
					hint="The parent's name"
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
					v-model="parent.lastname"
					ref="lastname"
					outlined
					hint="The parent's surname"
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
					v-model="parent.email"
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
					v-model="parent.gender"
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
				<q-select
					v-model="parent.relation"
					ref="relation"
					:options="getRelations"
					outlined
					hint="Father"
					hide-hint
					label="Relation"
					dense
					lazy-rules
					:rules="[
						(val) =>
							(val && val.length > 0) || 'Value may not be empty',
					]"
				/>
				<q-select
					v-model="parent.race"
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
			</div>
			<div class="col">
				<q-input
					v-model="parent.cellphone_number"
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
				<q-input
					v-model="parent.work_tel"
					ref="work_tel"
					outlined
					hint="Type in the work tel number"
					hide-hint
					label="Work_tel number"
					dense
					lazy-rules
					:rules="[
						(val) =>
							(val && val.length > 0) || 'Value may not be empty',
					]"
				/>
				<q-input
					v-model="parent.home_tel"
					ref="home_tel"
					outlined
					hint="Type in the home tel number"
					hide-hint
					label="Home tel number"
					dense
					lazy-rules
					:rules="[
						(val) =>
							(val && val.length > 0) || 'Value may not be empty',
					]"
				/>
				<q-input
					v-model="parent.occupation"
					ref="occupation"
					outlined
					hint="Type in the occupation"
					hide-hint
					label="Occupation"
					dense
					lazy-rules
					:rules="[
						(val) =>
							(val && val.length > 0) || 'Value may not be empty',
					]"
				/>
				<q-input
					v-model="parent.employer_name"
					ref="employer_name"
					outlined
					hint="Employer name"
					hide-hint
					label="Employer name"
					dense
					lazy-rules
					:rules="[
						(val) =>
							(val && val.length > 0) || 'Value may not be empty',
					]"
				/>
				<q-input
					v-model="parent.employer_tel"
					ref="employer_tel"
					outlined
					hint="Type in the employer's tel"
					hide-hint
					label="Employer tel number"
					dense
					lazy-rules
					:rules="[
						(val) =>
							(val && val.length > 0) || 'Value may not be empty',
					]"
				/>
				<q-input
					v-model="parent.employer_address"
					type="textarea"
					ref="employer_address"
					outlined
					hint="Employer's address"
					hide-hint
					label="Employer's address"
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
				:disable="parent.student_number == 0"
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
  name: 'ApplicationParent',
  props: {
    props: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      parent: {},
      loading: false,
    };
  },
  computed: {
    ...mapGetters('module', ['getRelations', 'getGenders', 'getRaces']),
  },
  methods: {
    onSubmit() {
      // submit the updated changes
      this.loading = true;

      this.$axios
        .post(
          `https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/learners/${this.parent.parent_id}`,
          this.parent,
        )
        .then((response) => {
          // show success notification
          if (response.statusText == 'OK') {
            this.$q.notify({
              message: 'successfully updated parent information',
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
      this.parent = {};

      Object.keys(this.$refs).map((ref) => {
        if (this.$refs[ref].hasOwnProperty('resetValidation')) { this.$refs[ref].resetValidation(); }
      });
      this.parent.student_number = this.props.student_number;
    },
  },
  mounted() {
    // copy props to mutable data object for updating
    this.parent = this.props.parent;
  },
};
</script>

<style lang="css" scoped>
</style>
