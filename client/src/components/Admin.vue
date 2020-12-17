<template>
  <div class="divContent">
    <p>List of all employees / system users</p>
    <div class="searchFilters">
      <q-input outlined placeholder="Universal search" dense v-model="filter">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>

    <div>
      <q-table
        dense
        title="Employees/ System users"
        :data="data"
        :columns="columns"
        :visible-columns="visibleColumns"
        no-results-label="Search didn't return any result"
        no-data-label="No user information found...contact admin"
        row-key="name"
        class="tableLearners"
      >
        <template v-slot:body="props">
          <q-tr
            :props="props"
            class="tblRow"
            @click="rowClicked($event, props)"
          >
            <q-td v-for="col in props.cols" :props="props" :key="col.name">{{
              col.value
            }}</q-td>
          </q-tr>
        </template>
      </q-table>
    </div>

    <AdminManagement
      :selectedUser="selectedUser"
      :showDialog="showDialog"
      @closeDialog="showDialog = false"
    />
  </div>
</template>

<script>
import AdminManagement from "./admin/adminManagement";

export default {
  components: { AdminManagement },
  data() {
    return {
      filterMsg: "",
      filter: "",
      options: [],
      model: "",
      columns: [],
      data: [],
      visibleColumns: [],
      showDialog: false,
      selectedUser: {},
    };
  },
  methods: {
    rowClicked(event, props) {
      this.showDialog = true;
      this.selectedUser = this.data.filter(
        (object) => object.staff_id === props.row.staff_id
      )[0];
    },
  },
  mounted() {
    // get all the learners in the school
    this.$axios
      .get("https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/employees")
      .then((response) => {
        this.columns = Object.keys(response.data[0]).map((column) => ({
          name: column,
          label: column.split("_").join(" ").toUpperCase(),
          field: column,
          sortable: true,
          align: "left",
        }));

        this.visibleColumns = this.columns.map((column, index) =>
          index < this.columns.length - 1 ? column.name : ""
        );

        this.data = response.data;
      })
      .catch((error) => {
        this.$q.notify({
          message: JSON.stringify(error),
        });
      });
  },
};
</script>

<style lang="css" scoped>
</style>
