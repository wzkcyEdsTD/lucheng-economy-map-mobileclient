const investmentdetail = {
  data: () => {
    return {
      data: {}
    };
  },
  created() {
    this.data = JSON.parse(localStorage["Listitem"]);
    console.log(this.data);
  },
  mounted() {},
  methods: {
    getmap(type, id, name) {
      this.$router.push("/map?type=" + type + "&id=" + id + "&name=" + name);
    }
  },
  watch: {}
};
export default investmentdetail;
