<template>
  <div
    class="q-pa-md"
    style="width: 100%"
  >
    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      animated
      class="main"
    >
      <q-step
        :name="1"
        title="Capture learner details"
        icon="edit"
        :done="step > 1"
      >
        <q-form
          @submit.prevent.stop="onSubmit"
          @reset.prevent.stop="onReset"
          class="row q-gutter-lg"
        >
          <div class="col">
            <q-input
              v-model="learner.student_number"
              ref="student_number"
              outlined
              label="Student number"
              dense
              readonly
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || `Value may not be blank`,
              ]"
            />
            <q-input
              v-model="learner.name"
              ref="firstname"
              outlined
              label="First name"
              dense
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || `Value may not be blank`,
              ]"
            />
            <q-input
              v-model="learner.surname"
              ref="lastname"
              outlined
              label="Last name"
              dense
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || `Value may not be blank`,
              ]"
            />
            <q-input
              v-model="learner.id_number"
              ref="id_number"
              outlined
              label="Id/Passport number"
              dense
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || ' Value may not be blank ',
              ]"
            />
            <q-select
              v-model="learner.grade"
              ref="grade"
              :options="
                getGrades.map((obj) => ({
                  label: obj.description,
                  value: obj.id,
                }))
              "
              emit-value
              map-options
              outlined
              label="Grade"
              dense
              :rules="[validate]"
            />
            <q-input
              v-model="learner.email"
              ref="email"
              outlined
              label="Email"
              dense
              lazy-rules
              :rules='[ (val) => (val && val.length > 0) || " vcbcv "]'
            />
            <q-select
              v-model="learner.gender"
              ref="gender"
              :options="
                getGenders.map((obj) => ({
                  label: obj.description,
                  value: obj.id,
                }))
              "
              emit-value
              map-options
              outlined
              label="Gender"
              dense
              lazy-rules
              :rules="[validate]"
            />
          </div>
          <div class="col">
            <q-input
              v-model="learner.cellphone_number"
              ref="cellphone_number"
              outlined
              label="Cellphone number"
              dense
              lazy-rules
              :rules='[ (val)=> (val && val.length > 0) || " Value may not be empty " , ]'
            />
            <q-select
              v-model="learner.id_type"
              ref="id_type"
              :options="
                getIdTypes.map((obj) => ({
                  label: obj.description,
                  value: obj.id,
                }))
              "
              emit-value
              map-options
              outlined
              label="Id type"
              dense
              lazy-rules
              :rules="[validate]"
            />
            <q-select
              v-model="learner.birth_country"
              ref="birth_country"
              :options="
                getCountries.map((obj) => ({
                  label: obj.description,
                  value: obj.id,
                }))
              "
              emit-value
              map-options
              outlined
              label="Birth country"
              dense
              lazy-rules
              :rules="[validate]"
            />
            <q-select
              v-model="learner.home_language"
              ref="home_language"
              :options="
                getLanguages.map((obj) => ({
                  label: obj.description,
                  value: obj.id,
                }))
              "
              emit-value
              map-options
              outlined
              label="Home language"
              dense
              lazy-rules
              :rules="[validate]"
            />
            <q-select
              v-model="learner.race"
              ref="race"
              :options="
                getRaces.map((obj) => ({
                  label: obj.description,
                  value: obj.id,
                }))
              "
              emit-value
              map-options
              outlined
              label="Race"
              dense
              lazy-rules
              :rules="[validate]"
            />
            <q-select
              v-model="learner.combination"
              ref="combination"
              :options="
                getCombinations.map((obj) => ({
                  label: obj.description,
                  value: obj.id,
                }))
              "
              emit-value
              map-options
              outlined
              label="Combination"
              dense
              lazy-rules
              :rules="[validate]"
            />
          </div>
        </q-form>
      </q-step>

      <q-step
        :name="2"
        title="Capture parent/guardian details"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
      >
        An ad group contains one or more ads which target a shared set of
        keywords.
      </q-step>

      <q-step
        :name="3"
        title="Select subjects"
        icon="assignment"
      >
        This step won"t show up because it is disabled.
      </q-step>

      <q-step
        :name="4"
        title="Review registration"
        icon="add_comment"
      >
        Try out different ad text to see what brings in the most customers, and
        learn how to enhance your ads using features like ad extensions. If you
        run into any problems with your ads, find out how to tell if they"re
        running and how to resolve approval issues.
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="$refs.stepper.next()"
            color="primary"
            :label='step === 4 ? "Finish" : "Continue"'
          />
          <q-btn
            v-if="
            step
          > 1"
            flat
            color="primary"
            @click="$refs.stepper.previous()"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      step: 1,
      learner: {},
    };
  },
  computed: {
    ...mapGetters("module", [
      "getGrades",
      "getGenders",
      "getRaces",
      "getLanguages",
      "getSubjects",
      "getIdTypes",
      "getCountries",
      "getCombinations",
    ]),
  },
  methods: {
    onSubmit() {
      alert("clicked");
    },
    onReset() {
      console.log("");
    },
    validate(value) {
      console.log(value);
      if (!value) return "Make a selection";
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  border: 1px solid black !important;
}
</style>
