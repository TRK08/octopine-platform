<template>
  <div class="tools">
    <div class="container">
      <div class="tools__wrap">
        <div class="tools-item tools-select">
          <CustomSelect
            v-if="setCategories.length"
            :options="setCategories"
            :default="setCategories[0]"
            @input="displayToKey"
          />
        </div>
        <!-- <input
          @input="$emit('input', searchValue)"
          class="tools-item tools-item__search"
          placeholder="Поиск"
          v-model="searchValue"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CustomSelect from "../ui/CustomSelect.vue";
export default {
  components: { CustomSelect },
  name: "NewsTools",
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    displayToKey(e) {
      let cat = this.categories.find((item) => item.title === e);
      this.$store.dispatch("news/setCategoryId", cat.id);
    },
  },
  computed: {
    ...mapGetters({
      categories: "news/getCategories",
    }),
    setCategories() {
      if (this.categories) {
        let res = [];
        this.categories.forEach((item) => {
          res.push(item.title);
        });
        return res;
      }
    },
  },
};
</script>

<style scoped>
.tools {
  width: 100%;
}

.tools__wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
}

.tools-item {
  text-align: center;
  width: 100%;
  background-color: var(--dark);
  border-radius: 30px;
}

.tools-item:nth-child(2) {
  margin: 0 5px;
}

.tools-item__sort::v-deep .selected,
.tools-item__sort::v-deep .selected.open {
  border-radius: 0;
}

.tools-item__search {
  border-radius: 0 30px 30px 0;
  color: var(--white);
  margin-bottom: 0;
  height: 60px;
  transition: all 0.5s ease;
}

.tools-item__search:focus::-webkit-input-placeholder {
  color: transparent;
}
.tools-item__search:focus:-moz-placeholder {
  color: transparent;
} /* FF 4-18 */
.tools-item__search:focus::-moz-placeholder {
  color: transparent;
} /* FF 19+ */
.tools-item__search:focus:-ms-input-placeholder {
  color: transparent;
} /* IE 10+ */

.tools-item__search:focus,
.tools-item__search:hover {
  background-color: var(--blue);
  transition: all 0.5s ease;
}

.tools-item__search::placeholder {
  color: var(--white);
}

.tools-select::v-deep .selected,
.tools-select::v-deep .selected.open {
  border-radius: 30px;
}

@media (max-width: 767px) {
  .tools__wrap {
    flex-direction: column-reverse;
  }

  .tools-select {
    margin-top: 4px;
  }

  .tools-item,
  .tools-select::v-deep .custom-select .selected {
    border-radius: 30px;
  }

  /* .tools-item__search {
    border-radius: 30px 30px 0 0;
  } */
}
</style>