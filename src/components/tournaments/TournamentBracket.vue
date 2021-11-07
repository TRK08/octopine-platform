<template>
  <section class="bracket" v-if="tournament">
    <main id="tournament">
      <ul class="round" v-for="(round, i) in tournament.rounds" :key="i">
        <div
          class="round-item"
          v-for="item in round.round"
          :key="item.teams.id_1"
        >
          <li class="spacer">&nbsp;</li>
          <li
            class="game game-top"
            :class="{ winner: item.teams.id_1 == item.teams.win }"
            v-if="item"
          >
            {{
              tournament.teams.find((team) => team.id === item.teams.id_1).name
            }}
          </li>
          <li class="game game-spacer">&nbsp;</li>
          <li
            class="game game-bottom"
            :class="{ winner: item.teams.id_2 == item.teams.win }"
            v-if="item"
          >
            {{
              tournament.teams.find((team) => team.id === item.teams.id_2).name
            }}
          </li>
          <li class="spacer">&nbsp;</li>
        </div>
      </ul>
    </main>
  </section>
</template>

<script>
export default {
  name: "TournamentBracket",
  props: {
    tournament: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      localTournament: this.tournament,
    };
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: row;
}
.round {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  list-style: none;
  padding: 0;
}
.round .spacer {
  flex-grow: 1;
}
.round .spacer:first-child,
.round .spacer:last-child {
  flex-grow: 0.5;
}

.round .game-spacer {
  flex-grow: 1;
}

.round-item {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

/*
 *  General Styles
*/
body {
  font-family: sans-serif;
  font-size: small;
  padding: 10px;
  line-height: 1.4em;
}

li.game {
  padding-left: 20px;
}

li.game.winner {
  font-weight: bold;
  color: var(--red);
}
li.game span {
  float: right;
  margin-right: 5px;
}

li.game-top {
  border-bottom: 1px solid #aaa;
}

li.game-spacer {
  border-right: 1px solid #aaa;
  min-height: 60px;
}

li.game-bottom {
  border-top: 1px solid #aaa;
}
</style>