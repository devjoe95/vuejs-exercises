function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
    };
  },
  computed: {
    monsterStatusbar() {
      return { width: this.monsterHealth + "%" };
    },
    playerStatusbar() {
      return {
        width: this.playerHealth + "%",
      };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
    },
    attackMonster() {
      const attackValue = getRandomNumber(5, 12);
      this.currentRound++;
      if (this.monsterHealth < attackValue) {
        this.monsterHealth = 0;
      } else {
        this.monsterHealth -= attackValue;
      }
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomNumber(8, 15);
      if (this.playerHealth < attackValue) {
        this.playerHealth = 0;
      } else {
        this.playerHealth -= attackValue;
      }
    },
    specialAttack() {
      this.currentRound++;
      const attackValue = getRandomNumber(10, 25);
      if (this.monsterHealth < attackValue) {
        this.monsterHealth = 0;
      } else {
        this.monsterHealth -= attackValue;
      }
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomNumber(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
  },
}).mount("#game");
