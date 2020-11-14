<template>
	<div>
		<q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
			<q-input
				outlined
				type="textarea"
				v-model="reason"
				label="Reason for status change"
				lazy-rules
				:rules="[val => val.length > 0 || 'Please type your age']"
			/>

			<q-toggle v-model="user.status" label="Toggle user status" />

			<div>
				<q-btn label="Submit" type="submit" color="primary" />
				<q-btn
					label="Reset"
					type="reset"
					color="primary"
					flat
					class="q-ml-sm"
				/>
			</div>
		</q-form>
	</div>
</template>

<script>
export default {
  name: 'AdminStatus',
  props: {
    props: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      active: false,
      user: {},
      reason: '',
    };
  },
  methods: {
    onSubmit() {
      try {
        this.$q.notify({
          message:
							`Sending updated information to the server...${this.user.status}`,
          color: 'yellow',
        });
        // send data to the server
        this.$axios
          .post(
            'https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/user/status',
            {
              staff_id: this.user.staff_id,
              status: this.user.status,
              reason: this.reason,
            },
          )
          .then((response) => {
            // check the response and then decide
            if (response.statusText === 'OK') {
              this.$q.notify({
                message: 'successfully updated user status',
              });
            } else {
              // we'll come back to this
            }
          })
          .catch((error) => {
            this.$q.notify({
              message: JSON.stringify(error),
              color: 'crimson',
            });
          });
      } catch (error) {
        this.$q.notify({
          message: JSON.stringify(error),
          color: 'red',
        });
      }
    },
    onReset() {
      //
    },
  },
  mounted() {
    // we are getting the props from the parent component. Maybe use computed properties?????

    this.user = this.props;
  },
};
</script>

<style lang="scss" scoped>
</style>
