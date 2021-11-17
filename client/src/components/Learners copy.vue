<template>
  <div class="q-pa-md divContent" style="max-width: 100%">
    <q-list class="rounded-borders" style="border: 2px solid grey">
      <q-expansion-item
        expand-separator="expand-separator"
        icon="view_column"
        label="Toggle columns"
        caption="Select columns to show/hide"
      >
        <q-card>
          <q-card-section>
            <div class="columnToggles">
              <template v-for="(columnName, index) in columns">
                <q-toggle
                  v-model="visibleColumns"
                  :val="columnName.name"
                  :label="columnName.label"
                  :key="index"
                >
                </q-toggle>
              </template>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item
        expand-separator="expand-separator"
        icon="filter_list"
        label="Filters"
        caption="Apply filters"
      >
        <q-card>
          <q-card-section> </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item
        expand-separator="expand-separator"
        icon="import_export"
        label="Export"
        caption="Perform export functions to various formats"
      >
        <q-card>
          <q-card-section>
            <q-btn class="btnExport" color="red" label="PDF" @click="exportData('pdf')"></q-btn>
            <q-btn class="btnExport" color="green" label="Excel" @click="exportData('csv')"></q-btn>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <hr />
    <q-table
      title="Learners"
      :data="data"
      :columns="columns"
      row-key="name"
      :visible-columns="visibleColumns"
      dense="dense"
      :filter="filter"
      :filter-method="filterTable"
    >
      <template v-slot:top-right>
        <div class="col-2 q-table__title">
          <span float-right>
            <button float-right @click="filter = {}">
              reset filters
            </button>
          </span>
        </div>
      </template>
      <template v-slot:header="props">
        <q-tr :props="props"></q-tr>
        <q-th v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.label }}
          <q-select
            v-if="optionColumns.includes(col.name)"
            v-model="dropDownFilters[col.name]"
            :key="col.name"
            outlined="outlined"
            dense="dense"
            :options="getSelectionSearchValues(col.name)"
            @click.stop.prevent=""
            @input="startSearch(col.name, $event)"
            clearable
          >
          </q-select>
          <q-input
            v-else
            outlined="outlined"
            dense="dense"
            @click.stop.prevent=""
            :props="props"
            v-model="col.placeholder"
            @input="startSearch(col.name, $event)"
          >
          </q-input>
        </q-th>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props" @click="rowClicked($event, props)">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ getColumnValueDesc(col.name, col.value) }}
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <LearnerManagement
      :selectedLearner="selectedLearner"
      :showDialog="showDialog"
      @closeDialog="showDialog = false"
    />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import LearnerManagement from './learner/LearnerManagement';

  export default {
    components: { LearnerManagement },
    data() {
      return {
        filterMsg: '',
        options: [],
        model: '',
        columns: [],
        data: [],
        visibleColumns: [''],
        loading: false,
        fullWidth: false,
        tab: 'edit',
        selectedLearner: {},
        showDialog: false,
        optionColumns: [
          'grade',
          'gender',
          'id_type',
          'birth_country',
          'home_language',
          'race',
          'combination',
          'status',
        ],
        dropDownFilters: {},
        filter: {},
        searchText: '',
        filteredData: [],
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
        'getRelations',
        'getLearnerStatus',
      ]),
    },
    methods: {
      filterTable(rows, terms) {
        try {
          if (Object.keys(terms).length === 0) {
            return rows;
          }

          Object.keys(terms).map((key) => {
            if (terms[key] !== '')
              this.filteredData = rows.filter((dataObj) => {
                return this.getColumnValueDesc(key, dataObj[key])
                  .toString()
                  .toUpperCase()
                  .includes(terms[key].toString().toUpperCase());
              });
          });

          return this.filteredData;
        } catch (error) {
          console.log('error occured');
        }
      },

      rowClicked(event, props) {
        this.showDialog = true;
        this.selectedLearner = this.data.filter(
          (object) => object.student_number == props.row.student_number
        )[0];
      },
      getSelectionSearchValues(colName) {
        switch (colName.toLowerCase()) {
          case 'grade':
            return this.getGrades.map((obj) => obj.description);
            break;
          case 'gender':
            return this.getGenders.map((obj) => obj.description);
            break;
          case 'id_type':
            return this.getIdTypes.map((obj) => obj.description);
            break;
          case 'birth_country':
            return this.getCountries.map((obj) => obj.description);
            break;
          case 'home_language':
            return this.getLanguages.map((obj) => obj.description);
            break;
          case 'race':
            return this.getRaces.map((obj) => obj.description);
            break;
          case 'combination':
            return this.getCombinations.map((obj) => obj.description);
            break;
          case 'status':
            return this.getLearnerStatus.map((obj) => obj.description);
            break;

          default:
            return [];
            break;
        }
      },
      getColumnValueDesc(colName, colValue) {
        switch (colName) {
          case 'grade':
            Array(this.getGrades).map((obj) => {
              obj.map((value) => {
                if (colValue === value.id) {
                  colValue = value.description;
                }
              });
            });

            return colValue;
            break;
          case 'birth_country':
            Array(this.getCountries).map((obj) => {
              obj.map((value) => {
                if (colValue === value.id) {
                  colValue = value.description;
                }
              });
            });

            return colValue;
            break;
          case 'combination':
            Array(this.getCombinations).map((obj) => {
              obj.map((value) => {
                if (colValue === value.id) {
                  colValue = value.description;
                }
              });
            });

            return colValue;
            break;
          case 'gender':
            Array(this.getGenders).map((obj) => {
              obj.map((value) => {
                if (colValue === value.id) {
                  colValue = value.description;
                }
              });
            });

            return colValue;
            break;
          case 'home_language':
            Array(this.getLanguages).map((obj) => {
              obj.map((value) => {
                if (colValue === value.id) {
                  colValue = value.description;
                }
              });
            });

            return colValue;
            break;
          case 'id_type':
            Array(this.getIdTypes).map((obj) => {
              obj.map((value) => {
                if (colValue === value.id) {
                  colValue = value.description;
                }
              });
            });

            return colValue;
            break;
          case 'race':
            Array(this.getRaces).map((obj) => {
              obj.map((value) => {
                if (colValue === value.id) {
                  colValue = value.description;
                }
              });
            });

            return colValue;
            break;
          case 'status':
            Array(this.getLearnerStatus).map((obj) => {
              obj.map((value) => {
                if (colValue === value.id) {
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
      startSearch(columnName, value) {
        console.log('what\'s the input?', value);
        if (value !== '' && value !== null) {
          this.filter = { ...this.filter, [columnName]: value };
        } else {
          delete this.filter[columnName];
          this.filter = { ...this.filter };
        }

        if (Object.keys(this.filter).length === 0) {
          this.filter = {}; //reset filter if all search fields were deleted
        }
        console.log('filter array', this.filter);

        // TODO: set the elements value here, after filtering and see what that does
      },
    },
    mounted() {
      // get all the learners in the school
      this.loading = true;
      this.$axios
        .get('http://localhost:3001/api/learners')
        .then((response) => {
          this.columns = Object.keys(response.data[0]).map((column) => ({
            name: column,
            label: column
              .split('_')
              .join(' ')
              .toUpperCase(),
            field: column,
            sortable: true,
            align: 'left',
          }));

          this.visibleColumns = this.columns.map((column, index) => {
            return index <= 11 ? column.name : '';
          });

          this.data = response.data;
        })
        .catch((error) => {
          // showNotif from global state
          this.$q.notify({
            message: JSON.stringify('error occured' + error),
          });
        })
        .finally(() => (this.loading = false));
    },
  };
</script>

<style lang="scss" scoped>
  .columnToggles {
    > * {
      width: 15%;
      /* border: 1px solid brown; */
    }
  }

  th {
    width: 150px;
  }
</style>
