<template>
	<div class="q-pa-md">
		<q-form
			@submit.prevent="onSubmit"
			@reset="onReset"
			class="column q-gutter-lg"
		>
			<q-toggle
				v-model="application.outcome"
				label="Change application's final outcome"
				class="q-mb-md"
			/>
			<q-input
				v-model="application.learner.student_number"
				ref="student_number"
				outlined
				hint="Enter student number"
				hide-hint
				label="Student number"
				dense
				readonly
				input-class="dataInput"
				label-color="white"
			/>
			<q-slide-transition v-show="application.outcome == false">
				<q-input
					v-model="reason"
					type="textarea"
					ref="reason"
					outlined
					label="Type in reason for declining the application"
					lazy-rules
					:rules="[
						(val) =>
							(val && val.length > 0) || 'value may not be empty',
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
				:disable="disableButton()"
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
// import { mapGetters } from "vuex";

export default {
  name: 'LearnerStatus',
  props: {
    props: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      application: {
        learner: {
          student_number: '',
        },
      },
      reason: '',
    };
  },
  computed: {
    // ...mapGetters("module", ["getLoggedInUser"])
  },
  methods: {
    onSubmit() {
      // send deactivation data to the server
      try {
        this.$axios
          .post(
            'https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/application/status',
            this.application,
          )
          .then((response) => {
            this.$q.notify({
              message:
									`Application status succesfully updated. Student is now: ${
									  response.data}`,
            });
          })
          .catch((error) => {
            this.$q.notify({
              message:
									`status update unsuccessful${
									  JSON.stringify(error)}`,
            });
          });
      } catch (error) {
        this.$q.notify({
          message: `error occured during status update ${error}`,
        });
      }
    },
    onReset() {
      this.application = {};
      this.reason = '';

      Object.keys(this.$refs).map((ref) => {
        if (this.$refs[ref].hasOwnProperty('resetValidation')) { this.$refs[ref].resetValidation(); }
      });

      this.application.learner.student_number = this.props.learner.student_number;
    },
    disableButton() {
      if (this.application.outcome == false && this.reason == '') {
        console.log('2');
        return true;
      }

      return false;
    },
  },
  mounted() {
    this.application = this.props;
  },
};
</script>

<style lang="css" scoped>
</style>
