<template>
  <div>
    <q-dialog
      v-model="fullWidth"
      full-width
      full-height
    >
      <q-card>
        <q-card-section>
          <div class="text-h6">
            Learner management
            <q-card-actions align="right">
              <q-btn
                flat
                label="Close"
                @click="closeDialog"
              />
            </q-card-actions>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab
              name="update"
              label="Update learner information"
            />
            <q-tab
              name="status"
              label="Learner status"
            />
            <q-tab
              name="subjects"
              label="Learner subjects"
            />
          </q-tabs>

          <q-separator />

          <q-tab-panels
            v-model="tab"
            animated
            full-height
          >
            <q-tab-panel name="update">
              <LearnerUpdate :props="selectedLearner" />
            </q-tab-panel>

            <q-tab-panel name="status">
              <LearnerStatus :props="selectedLearner" />
            </q-tab-panel>

            <q-tab-panel name="subjects">
              <LearnerSubjects :props="selectedLearner" />
            </q-tab-panel>
          </q-tab-panels>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import LearnerUpdate from "./LearnerUpdate";
import LearnerStatus from "./LearnerStatus";
import LearnerSubjects from "./LearnerSubjects";

export default {
  name: "LearnerManagement",
  components: {
    LearnerUpdate,
    LearnerStatus,
    LearnerSubjects,
  },
  props: {
    selectedLearner: {
      type: Object,
      required: true,
    },
    showDialog: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      tab: "update",
    };
  },
  computed: {
    fullWidth: {
      get() {
        return this.showDialog;
      },
      set(val) {
        this.$emit("closeDialog", val);
      },
    },
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog", false);
    },
  },
};
</script>

<style lang="sass" scoped>
</style>
