<template>
  <div class="divContent">
    <div class="searchFilters">
      <q-input outlined placeholder="Universal search" dense v-model="filter">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>

    <div>
      <q-table
        :loading="loading"
        dense
        title="Learners"
        :data="data"
        :columns="columns"
        :visible-columns="visibleColumns"
        no-results-label="Search didn't return any result;)"
        no-data-label="No learners loaded yet. Register new learners or accept online applications)"
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
              getColumnValueDesc(col.name, col.value)
            }}</q-td>
          </q-tr>
        </template>
      </q-table>
    </div>

    <LearnerManagement
      :selectedLearner="selectedLearner"
      :showDialog="showDialog"
      @closeDialog="showDialog = false"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LearnerManagement from "./learner/LearnerManagement";

export default {
  components: { LearnerManagement },
  data() {
    return {
      filterMsg: "",
      filter: "",
      options: [],
      model: "",
      columns: [],
      data: [],
      visibleColumns: [""],
      loading: false,
      fullWidth: false,
      tab: "edit",
      selectedLearner: {},
      showDialog: false,
    };
  },
  computed: {
    ...mapGetters("module", [
      "getRaces",
      "getRoles",
      "getCountries",
      "getGrades",
      "getSubjects",
      "getCombinations",
      "getGenders",
      "getIdTypes",
      "getLanguages",
      "getRelations",
      "getLearnerStatus",
    ]),
  },
  methods: {
    rowClicked(event, props) {
      this.showDialog = true;
      this.selectedLearner = this.data.filter(
        (object) => object.student_number == props.row.student_number
      )[0];
    },
    getColumnValueDesc(colName, colValue) {
      switch (colName) {
        case "grade":
          Array(this.getGrades).map((obj) => {
            obj.map((value) => {
              if (colValue == value.id) {
                colValue = value.description;
              }
            });
          });

          return colValue;
          break;
        case "birth_country":
          Array(this.getCountries).map((obj) => {
            obj.map((value) => {
              if (colValue == value.id) {
                colValue = value.description;
              }
            });
          });

          return colValue;
          break;
        case "combination":
          Array(this.getCombinations).map((obj) => {
            obj.map((value) => {
              if (colValue == value.id) {
                colValue = value.description;
              }
            });
          });

          return colValue;
          break;
        case "gender":
          Array(this.getGenders).map((obj) => {
            obj.map((value) => {
              if (colValue == value.id) {
                colValue = value.description;
              }
            });
          });

          return colValue;
          break;
        case "home_language":
          Array(this.getLanguages).map((obj) => {
            obj.map((value) => {
              if (colValue == value.id) {
                colValue = value.description;
              }
            });
          });

          return colValue;
          break;
        case "id_type":
          Array(this.getIdTypes).map((obj) => {
            obj.map((value) => {
              if (colValue == value.id) {
                colValue = value.description;
              }
            });
          });

          return colValue;
          break;
        case "race":
          Array(this.getRaces).map((obj) => {
            obj.map((value) => {
              if (colValue == value.id) {
                colValue = value.description;
              }
            });
          });

          return colValue;
          break;
        case "status":
          Array(this.getLearnerStatus).map((obj) => {
            obj.map((value) => {
              if (colValue == value.id) {
                colValue = value.description;
              }
            });
          });

          return colValue;
          break;

        default:
          return colValue;
          break;
      }
    },
  },
  mounted() {
    // get all the learners in the school
    this.loading = true;
    this.$axios
      .get("http://localhost:3001/api/learners")
      .then((response) => {
        this.columns = Object.keys(response.data[0]).map((column) => ({
          name: column,
          label: column.split("_").join(" ").toUpperCase(),
          field: column,
          sortable: true,
          align: "left",
        }));

        this.visibleColumns = this.columns.map((column, index) => {
          return index == this.columns.length ? column.name : "";
        });

        this.data = response.data;
        console.log("learners", response.data);
      })
      .catch((error) => {
        // showNotif from global state
        this.$q.notify({
          message: JSON.stringify(error),
        });
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style lang="css" scoped>
</style>
