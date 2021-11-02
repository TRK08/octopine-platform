<template>
  <div class="single-forum" v-if="singleTheme">
    <div class="container">
      <div class="single-forum__theme">
        <h2>{{ singleTheme.name }}</h2>
        <span> {{ singleTheme.date }} </span>
      </div>

      <div class="single-forum__answers">
        <h2>Ответы: {{ singleTheme.answers }}</h2>
        <div
          class="single-forum__answer"
          v-for="item in comments"
          :key="item.date"
        >
          <div class="single-forum__answer-info">
            <div class="single-forum__answer-avatar">
              <img :src="item.user_avatar" alt="" />
            </div>
            <span class="single-forum__answer-nickname">
              {{ item.user_name }}
            </span>
            <span class="single-forum__answer-date">
              {{ item.date }}
            </span>
          </div>
          <div class="single-forum__answer-text">
            <!-- <p>{{ item.comment }}</p> -->
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              repellat a eveniet dolorum velit, minima totam odit consequatur
              adipisci id vel tempore facere magnam placeat error voluptates
              earum, incidunt iusto? Dolor consequatur cumque perspiciatis
              exercitationem provident ipsam ipsa repellendus vel nobis minus
              dolorum sapiente quibusdam, sed accusamus repudiandae et unde
              fugiat sit laboriosam? Adipisci rem error voluptas quia odio nemo?
              Voluptatibus debitis illum, quod dolorem aut fugit possimus
              explicabo itaque voluptatum distinctio. Maiores praesentium odit
              omnis nisi similique exercitationem consequuntur, inventore rerum
              soluta repudiandae atque perferendis possimus eaque quos dolores?
              Molestiae ipsum fugit, cumque, earum magni distinctio, laborum
              enim harum alias praesentium nulla cum. Et sint beatae placeat,
              odio porro, nisi accusantium, sunt itaque voluptates blanditiis
              dolorum id maiores dolor. Nemo corrupti natus ea accusamus
              similique, at eaque sunt deserunt molestiae consectetur voluptate
              sit illo, tempora possimus rem unde aliquid tempore voluptatem
              repellendus exercitationem quaerat? Distinctio labore molestiae
              veritatis molestias? Sint pariatur inventore quae corrupti
              voluptate natus ab, sit saepe sed, eligendi, placeat atque
              consectetur beatae laboriosam ad. Aspernatur, nesciunt magni quos
              repellat corrupti nostrum perferendis. Beatae totam eius dolores.
              Porro, maiores natus molestias enim nostrum adipisci eligendi
              distinctio itaque! Perspiciatis enim, aliquam commodi sit quaerat
              nobis deleniti ex quia nam ullam amet totam quo deserunt
              consequuntur assumenda, temporibus inventore? Minima voluptate
              perferendis perspiciatis tenetur voluptates nulla, nemo maxime
              veritatis accusantium! Saepe maxime ea temporibus id velit
              molestias dignissimos quod necessitatibus laborum nesciunt
              mollitia sapiente adipisci, harum optio aliquam est. Aliquam a
              illo, odit optio neque quidem nobis, quasi eius tenetur asperiores
              quaerat modi! Iure quae itaque et quaerat distinctio aut ab
              nostrum harum suscipit tempore. Quam deserunt dicta ullam? Error
              inventore saepe ipsum blanditiis suscipit unde deleniti, rerum
              praesentium dignissimos pariatur cupiditate amet ullam quaerat
              voluptatum id voluptate expedita maxime deserunt molestias!
              Incidunt temporibus, velit tempore reprehenderit dolores sapiente?
            </p>
          </div>
        </div>
      </div>
      <div class="single-forum__comment"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SingleForum",
  props: ["id"],
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters({
      comments: "forum/getComments",
      singleTheme: "forum/getSingleTheme",
    }),
  },
  created() {
    this.$store.dispatch("forum/loadInfo", this.id);
  },
};
</script>

<style scoped>
.single-forum {
  padding: 100px 0;
}

.single-forum__theme {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
}

.single-forum__theme h2 {
  margin-bottom: 15px;
}

.single-forum__theme span {
  color: var(--grey);
  font-weight: 400;
}

.single-forum__answers h2 {
  margin-bottom: 30px;
}

.single-forum__answer {
  display: flex;
  border-radius: 30px;

  background-color: var(--dark);
  margin-bottom: 30px;
}

.single-forum__answer-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  line-height: 19px;
  font-weight: 400;
  border-right: 3px solid var(--bg);
  padding: 15px 30px;
  min-width: 190px;
  text-align: center;
}

.single-forum__answer-avatar {
  border-radius: 100%;
  width: 50px;
  height: 50px;
  overflow: hidden;
  margin-bottom: 15px;
}

.single-forum__answer-avatar img {
  width: 100%;
}

.single-forum__answer-date {
  margin-top: 15px;
  color: var(--grey);
}

.single-forum__answer-text {
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 400;
}

.single-forum__comment {
  border: 3px solid var(--dark);
  width: 100%;
  height: 50px;
  border-radius: 30px;
}
</style>