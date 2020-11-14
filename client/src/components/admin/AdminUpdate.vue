<template>
	<div>
		<q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md frm">
			<div class="col">
				<div>
					<q-input
						v-model="user.name"
						ref="name"
						outlined
						label="Name"
						dense
						lazy-rules
						:rules="[
							val =>
								(val && val.length > 0) ||
								'value may not be empty'
						]"
					/>
					<q-input
						v-model="user.surname"
						ref="surname"
						outlined
						label="Surname"
						dense
						lazy-rules
						:rules="[
							val =>
								(val && val.length > 0) ||
								'value may not be empty'
						]"
					/>
					<q-input
						v-model="user.email"
						ref="email"
						outlined
						label="Email"
						dense
						lazy-rules
						:rules="[
							val =>
								(val && val.length > 0) ||
								'value may not be empty'
						]"
					/>

					<q-select
						v-model="user.gender"
						ref="gender"
						:options="genders"
						outlined
						label="Gender"
						dense
						lazy-rules
						:rules="[
							val =>
								(val && val.length > 0) ||
								'value may not be empty'
						]"
					/>
					<q-select
						v-model="user.staff_type"
						ref="staff_type"
						:options="staff_types"
						outlined
						label="Staff type"
						dense
						lazy-rules
						:rules="[
							val =>
								(val && val.length > 0) ||
								'value may not be empty'
						]"
					/>
					<q-select
						v-model="user.group"
						ref="group"
						:options="groups"
						outlined
						label="Groups"
						dense
						lazy-rules
						@select.stop="getGroupRoles"
						:rules="[
							val =>
								(val && val.length > 0) ||
								'value may not be empty'
						]"
					/>
					<q-input
						v-model="user.cellphone_number"
						ref="cellphone_number"
						outlined
						label="Cellphone number"
						dense
						lazy-rules
						:rules="[
							val =>
								(val && val.length > 0) ||
								'value may not be empty'
						]"
					/>
					<q-select
						v-model="user.race"
						ref="race"
						:options="races"
						outlined
						label="Races"
						dense
						lazy-rules
						:rules="[
							val =>
								(val && val.length > 0) ||
								'value may not be empty'
						]"
					/>
				</div>
				<div class="roles">
					<q-table
						dense
						title="Roles linked to selected group"
						:data="data"
						:columns="columns"
						no-results-label="Search didn't return any result, remember you can search on any column ;)"
						no-data-label="No user information found...contact admin if you don't understand this message :)"
						row-key="name"
						class="tableLearners"
					>
					</q-table>
				</div>
			</div>

			<div class="col">
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
  name: 'AdminUpdate',
  props: {
    props: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      data: [],
      columns: [],
      user: {},
      genders: [],
      races: [],
      groups: ['teachers', 'admin', 'data capturer'], // these are user groups
      staff_types: [],
    };
  },
  methods: {
    getGroupRoles() {
      try {
        console.log(this.user.group);
        this.$axios
          .get(
            `https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/roles/${this.user.group}`,
          )
          .then((response) => {
            this.$q.notify({ message: JSON.stringify(this.user) });
            // validate response
            console.log(response.data);
            if (response.statusText == 'OK') {
              this.columns = Object.keys(response.data[0]).map(
                (column) => ({
                  name: column,
                  label: column
                    .split('_')
                    .join(' ')
                    .toUpperCase(),
                  field: column,
                  sortable: true,
                  align: 'left',
                }),
              );

              return (this.data = response.data);
            }
            // we'll see what other code we might receive here
          })
          .catch((error) => {
            console.error(error);
            this.$q.notify({
              message: `getRoles error 1${JSON.stringify(error)}`,
              color: 'red',
            });
          });
      } catch (error) {
        this.$q.notify({
          message: `getRoles error 2${JSON.stringify(error)}`,
          color: 'red',
        });
      }
    },
    onSubmit() {
      // send the data to the server
      try {
        this.$axios
          .post(
            `https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/employees/${this.user.staff_id}`,
            this.user,
          )
          .then((response) => {
            this.$q.notify({ message: JSON.stringify(this.user) });
            // validate response
            if (response.statusText == 'OK') {
              this.$q.notify({
                message:
										'User information successfully updated. Changes will take effect immediately ;)',
              });
            } else {
              // we'll see what other code we might receive here
            }
          })
          .catch((error) => {
            this.$q.notify({
              message:
									`server error response:${
									  JSON.stringify(error)}`,
              color: 'red',
            });
          });
      } catch (error) {
        this.$q.notify({
          message: `network error:${JSON.stringify(error)}`,
          color: 'red',
        });
      }
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    },
  },
  mounted() {
    this.user = this.props;

    // get group roles
    this.getGroupRoles();
  },
};
</script>

<style lang="scss" scoped>
	$subtleTouch: #15e0da;
	$mainContent: #0f1724;
	$notification: #afd310;

	.col {
		display: flex;
		flex-direction: row;

		div {
			flex-grow: 1;
			margin: 10px;
		}
	}

	.roles {
		border: 1px solid $subtleTouch;
		border-radius: 10px;
	}
</style>
