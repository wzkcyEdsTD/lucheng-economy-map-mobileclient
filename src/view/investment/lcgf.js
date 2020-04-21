const lcgf = {
  data: () => {
    return {
      data: {}
    };
  },
  created() {
    this.data = JSON.parse(localStorage["Listitem"]);
    console.log(this.data);
  },
  methods: {
    getmap(data) {
      this.$router.push("/map?type=point&id=u_lcgf&name=" + data["地址"]);
    }
  }
};
export default lcgf;
